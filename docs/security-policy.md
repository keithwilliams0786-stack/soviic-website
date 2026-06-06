# Security Policy — Soviic

**Company:** CyberSentinel Services LLC (DBA: Soviic)  
**Version:** 1.0 | **Effective:** June 2026 | **Review:** Annually

## 1. Purpose

This policy establishes the security principles, responsibilities, and minimum controls that govern the development, operation, and maintenance of the Soviic platform. It aligns with the NIST Cybersecurity Framework (CSF) and NIST SP 800-171.

## 2. Scope

Applies to all systems, services, data, and personnel involved in the operation of Soviic, including the production application, development environments, third-party integrations, and contractor relationships.

## 3. Security Principles

- **Security by Design** — Security controls are built into the architecture from inception, not added after the fact.
- **Least Privilege** — Users and systems are granted only the minimum access required to perform their function.
- **Defense in Depth** — Multiple layers of security controls are applied so that no single point of failure exposes the system.
- **Transparency** — Security practices are documented, communicated to customers, and open to responsible scrutiny.

## 4. Technical Controls

| Control | Implementation |
|---------|---------------|
| Encryption in transit | TLS 1.2+ enforced on all endpoints |
| Encryption at rest | AES-256 via Supabase storage layer |
| Authentication | MFA required; Supabase Auth with JWT |
| Access control | RBAC + Row-Level Security (RLS) in database |
| Secrets management | Cloudflare Secrets + Supabase Vault |
| Dependency scanning | Automated CVE scanning on all dependencies |
| Error monitoring | Sentry — no PII in error payloads |
| DDoS protection | Cloudflare — all traffic routed through CDN |

## 5. Password Requirements

- Minimum 12 characters
- Hashed using Argon2id (primary) or bcrypt (fallback)
- Plaintext passwords never stored, logged, or transmitted
- Password reset via time-limited, single-use email link

## 6. Vulnerability Management

- Dependencies scanned for CVEs on every deployment
- Critical vulnerabilities remediated within 30 days of disclosure
- High vulnerabilities remediated within 60 days
- Responsible disclosure policy published at soviic.com/security

## 7. Incident Response

See `incident-response.md` for the full incident response plan.

Summary:
- Security incidents reported to security@soviic.com
- Initial triage within 24 hours
- Customer notification within 72 hours of confirmed breach
- Post-incident review within 14 days

## 8. Third-Party Security

All subprocessors are evaluated for security posture before onboarding. Current subprocessor list maintained in `subprocessor-list.md`. Subprocessors must:
- Maintain SOC 2 Type II or equivalent certification
- Support data deletion requests within 30 days
- Notify Soviic of security incidents within 24 hours

## 9. Responsible Disclosure

If you discover a security vulnerability in Soviic:

1. Email security@soviic.com with details
2. Do not publicly disclose until we have had 90 days to remediate
3. We will acknowledge receipt within 72 hours
4. We will not pursue legal action against good-faith researchers

## 10. Review and Updates

This policy is reviewed annually and updated when significant changes to the platform architecture or threat landscape occur. Current version maintained in `/docs/security-policy.md` in the GitHub repository.

---
*CyberSentinel Services LLC | 3245 Main St Ste 235-609, Frisco TX 75034 | security@soviic.com*
