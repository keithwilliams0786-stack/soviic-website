/**
 * Soviic — Cloudflare Pages Worker (_worker.js)
 *
 * This file lives alongside index.html in the GitHub repo root.
 * Cloudflare Pages automatically picks it up when named _worker.js.
 *
 * What it does:
 *   - POST /subscribe  → forwards email to Mailchimp server-side
 *   - Everything else  → passes through to static Pages assets
 *     (index.html, thank-you.html, privacy-policy.html, etc.)
 *
 * Why this approach:
 *   The wrangler.jsonc in this repo uses "assets" mode which means
 *   a single Worker handles both static files AND custom routes.
 *   A separate soviic-subscribe Worker can't intercept /subscribe
 *   because the assets Worker handles all requests first.
 *   Putting the subscribe logic here in _worker.js solves that.
 *
 * After uploading this file to GitHub:
 *   1. Cloudflare Pages auto-deploys within ~60 seconds
 *   2. Test by submitting the waitlist form on soviic.com
 *   3. Check Mailchimp — email should appear within 1-2 minutes
 *   4. The separate soviic-subscribe Worker and its route can be
 *      deleted from Cloudflare as they are no longer needed.
 */

// ── Mailchimp config ──────────────────────────────────────────────────────────
const MAILCHIMP_DC      = 'us19';
const MAILCHIMP_LIST_ID = '36f74ef069';
const MAILCHIMP_U       = '86789b176f8105c8c6960b59d';
const MAILCHIMP_F_ID    = '007bb3e4f0';

const MAILCHIMP_URL =
  `https://${MAILCHIMP_DC}.list-manage.com/subscribe/post` +
  `?u=${MAILCHIMP_U}&id=${MAILCHIMP_LIST_ID}&f_id=${MAILCHIMP_F_ID}`;

// ── CORS headers ──────────────────────────────────────────────────────────────
function corsHeaders() {
  return {
    'Access-Control-Allow-Origin':  'https://soviic.com',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age':       '86400',
  };
}

// ── JSON response helper ──────────────────────────────────────────────────────
function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(),
    },
  });
}

// ── Subscribe handler ─────────────────────────────────────────────────────────
async function handleSubscribe(request) {
  // CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders() });
  }

  // Only accept POST
  if (request.method !== 'POST') {
    return jsonResponse({ result: 'error', msg: 'Method not allowed' }, 405);
  }

  // Parse email from request body
  let email = '';
  try {
    const contentType = request.headers.get('Content-Type') || '';
    if (contentType.includes('application/json')) {
      const json = await request.json();
      email = (json.email || '').trim().toLowerCase();
    } else {
      const form = await request.formData();
      email = (form.get('email') || form.get('EMAIL') || '').trim().toLowerCase();
    }
  } catch {
    return jsonResponse({ result: 'error', msg: 'Invalid request body' }, 400);
  }

  // Validate email
  if (!email || !email.includes('@') || !email.includes('.')) {
    return jsonResponse({ result: 'error', msg: 'Valid email address required' }, 400);
  }

  // Forward to Mailchimp server-side
  const formData = new URLSearchParams({
    EMAIL: email,
    [`b_${MAILCHIMP_U}_${MAILCHIMP_LIST_ID}`]: '', // honeypot — must be empty
  });

  let mcResult = 'subscribed';
  let mcMsg    = 'You have been added to the waitlist.';

  try {
    const mcResponse = await fetch(MAILCHIMP_URL, {
      method:   'POST',
      headers:  { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:     formData.toString(),
      redirect: 'follow',
    });

    const text = await mcResponse.text();

    if (text.includes('Almost finished') || text.includes('success')) {
      mcResult = 'subscribed';
      mcMsg    = 'Successfully added to the waitlist!';
    } else if (text.includes('already subscribed') || text.includes('already on our list')) {
      mcResult = 'already_subscribed';
      mcMsg    = 'You are already on the waitlist.';
    } else if (text.includes('invalid') || text.includes('Invalid')) {
      mcResult = 'error';
      mcMsg    = 'Invalid email address.';
    }
  } catch (err) {
    // Mailchimp unreachable — log but don't block the user redirect
    console.error('Mailchimp error:', err);
    mcResult = 'error';
    mcMsg    = 'Could not reach Mailchimp — please try again.';
  }

  return jsonResponse({ result: mcResult, msg: mcMsg, email });
}

// ── Main export ───────────────────────────────────────────────────────────────
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Route POST /subscribe to the Mailchimp handler
    if (url.pathname === '/subscribe') {
      return handleSubscribe(request);
    }

    // Everything else — pass through to Cloudflare Pages static assets
    // env.ASSETS is the built-in Pages static asset binding
    return env.ASSETS.fetch(request);
  },
};
