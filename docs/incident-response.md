# Incident Response Plan — Soviic

**Company:** CyberSentinel Services LLC (DBA: Soviic)  
**Version:** 1.0 | **Effective:** June 2026 | **Review:** Annually

## 1. Purpose

This plan defines the process for detecting, containing, eradicating, and recovering from security incidents affecting the Soviic platform or its customers.

## 2. Incident Classification

| Severity | Definition | Response Time |
|----------|-----------|---------------|
| Critical | Data breach, ransomware, full service outage | Immediate — within 1 hour |
| High | Partial data exposure, authentication bypass, significant service degradation | Within 4 hours |
| Medium | Attempted breach (blocked), single user impact, minor data issue | Within 24 hours |
| Low | Suspicious activity, policy violation, minor anomaly | Within 72 hours |

## 3. Incident Response Team

| Role | Responsibility | Contact |
|------|---------------|---------|
| Incident Commander | Keith R. Williams — overall response coordination | keith@soviic.com |
| Technical Lead | Keith R. Williams — investigation and remediation | keith@soviic.com |
| Customer Communications | Keith R. Williams — customer and regulatory notification | hello@soviic.com |

*Note: As the company scales, these roles will be distributed across dedicated team members.*

## 4. Response Phases

### Phase 1 — Detection & Identification
- Monitor Sentry error alerts, Cloudflare security events, and Supabase audit logs
- Receive reports via security@soviic.com or user reports
- Classify severity using the table above
- Document initial findings in incident log

### Phase 2 — Containment
- Isolate affected systems or accounts immediately
- Revoke compromised credentials or tokens
- Enable maintenance mode if necessary to prevent further exposure
- Preserve evidence — do not delete logs or modify systems before investigation

### Phase 3 — Eradication
- Identify and remove root cause
- Patch or update affected components
- Rotate all potentially compromised credentials
- Verify no backdoors or persistence mechanisms remain

### Phase 4 — Recovery
- Restore service from clean backup if required
- Verify system integrity before returning to production
- Monitor closely for 48 hours after recovery
- Confirm affected customers can access their data

### Phase 5 — Notification
- **Regulatory:** Notify applicable regulators within required timeframes (GDPR: 72 hours; CCPA: expedient)
- **Customers:** Notify affected customers within 72 hours of confirmed breach
- **Content:** What happened, what data was affected, what we did, what customers should do

### Phase 6 — Post-Incident Review
- Conduct review within 14 days of incident closure
- Document: timeline, root cause, impact, response actions, lessons learned
- Update security controls to prevent recurrence
- Update this plan if process gaps were identified

## 5. Communication Templates

### Customer Notification (Breach)
> Subject: Important Security Notice Regarding Your Soviic Account
>
> We are writing to inform you of a security incident that may have affected your account...

### Status Page Update
> We are investigating reports of [issue]. Our team has been notified and is actively working on a resolution. We will provide updates every 30 minutes.

## 6. Key Contacts

| Service | Contact |
|---------|---------|
| Supabase Support | support@supabase.io |
| Cloudflare Security | Cloudflare dashboard security tab |
| Stripe Fraud | Stripe dashboard + fraud@stripe.com |
| Texas AG Data Breach | dataprivacy@oag.texas.gov |

---
*CyberSentinel Services LLC | security@soviic.com*
