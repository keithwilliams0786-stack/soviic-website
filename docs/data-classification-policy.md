# Data Classification Policy — Soviic

**Company:** CyberSentinel Services LLC (DBA: Soviic)  
**Version:** 1.0 | **Effective:** June 2026

## 1. Classification Levels

### Public
Information intentionally available to anyone.
- Marketing content, blog posts, pricing pages
- Public API documentation
- Open source code

**Handling:** No restrictions. May be freely shared.

### Internal
Business operational information not for public release.
- Workflow configurations and templates
- Team member lists and contact information
- Usage metrics and analytics
- Internal communications

**Handling:** Accessible to authenticated users with appropriate roles. Not to be shared externally without authorization.

### Confidential
Sensitive information requiring active protection.
- Customer personally identifiable information (PII) — names, emails, phone numbers
- Payment information (processed by Stripe — Soviic does not store card numbers)
- OAuth tokens and API keys for customer integrations
- Audit logs and security events
- Business financial information

**Handling:** Encrypted at rest and in transit. Access restricted to role-based need. Audit log entry required for access. Retention and deletion per Privacy Policy.

### CUI — Controlled Unclassified Information (Future)
Federal government-defined sensitive information subject to NIST SP 800-171 and CMMC requirements.

**Note:** Soviic does not currently process CUI. This category is reserved for future expansion into defense contractor support. CUI processing will not begin until a formal CMMC assessment is completed.

**Handling (when applicable):** Full CMMC Level 2 controls required. Separate processing environment. Legal review required before onboarding any CUI-handling customer.

## 2. Data Handling by Category

| Action | Public | Internal | Confidential | CUI |
|--------|--------|----------|-------------|-----|
| Store unencrypted | ✓ | ✓ | ✗ | ✗ |
| Transmit without TLS | ✓ | ✗ | ✗ | ✗ |
| Log in application logs | ✓ | ✓ | ✗ | ✗ |
| Share with subprocessors | ✓ | Limited | Contractually controlled | Prohibited |
| Retain indefinitely | ✓ | Per policy | Per Privacy Policy | Per CMMC requirements |

## 3. Customer Data

All customer data (workflows, configurations, connected integration data) is treated as Confidential by default unless explicitly classified otherwise by the customer.

## 4. Data Retention

| Data Type | Retention Period |
|-----------|-----------------|
| Active account data | Duration of account |
| Audit logs | 12 months minimum |
| Workflow execution logs | 90 days |
| Billing records | 7 years (tax requirement) |
| Deleted account data | 30 days post-deletion, then purged |

---
*CyberSentinel Services LLC | privacy@soviic.com*
