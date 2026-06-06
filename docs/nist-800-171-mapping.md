# NIST SP 800-171 Control Mapping — Soviic

**Company:** CyberSentinel Services LLC (DBA: Soviic)  
**Version:** 1.0 | **Status:** In Progress — MVP Phase  
**Note:** This mapping documents design intent. Full assessment to be conducted post-MVP.

## Control Family Mapping

### 3.1 — Access Control

| Control | Requirement | Soviic Implementation | Status |
|---------|------------|----------------------|--------|
| 3.1.1 | Limit system access to authorized users | RBAC — Owner, Admin, Member, Viewer roles | Planned |
| 3.1.2 | Limit system access to authorized transactions | Row-Level Security (RLS) in Supabase | Planned |
| 3.1.3 | Control flow of CUI | CUI not processed at MVP — architecture ready | Design |
| 3.1.10 | Use session lock after period of inactivity | Configurable session timeout (default 60 min) | Planned |

### 3.3 — Audit and Accountability

| Control | Requirement | Soviic Implementation | Status |
|---------|------------|----------------------|--------|
| 3.3.1 | Create and retain audit logs | 12-month audit log retention in separate schema | Planned |
| 3.3.2 | Ensure actions of users traceable | User ID, IP, timestamp on all audit events | Planned |

### 3.5 — Identification and Authentication

| Control | Requirement | Soviic Implementation | Status |
|---------|------------|----------------------|--------|
| 3.5.1 | Identify system users | Email-verified accounts — no anonymous access | Planned |
| 3.5.2 | Authenticate users before access | Supabase Auth with JWT | Planned |
| 3.5.3 | Use MFA for local and network access | TOTP and SMS MFA — required for all accounts | Planned |

### 3.13 — System and Communications Protection

| Control | Requirement | Soviic Implementation | Status |
|---------|------------|----------------------|--------|
| 3.13.8 | Encrypt CUI in transit | TLS 1.2+ on all endpoints | Active (waitlist site) |
| 3.13.10 | Establish and manage cryptographic keys | Supabase Vault + Cloudflare Secrets | Planned |
| 3.13.16 | Protect CUI at rest | AES-256 encryption via Supabase | Planned |

### 3.14 — System and Information Integrity

| Control | Requirement | Soviic Implementation | Status |
|---------|------------|----------------------|--------|
| 3.14.1 | Identify and correct information system flaws | Dependabot + npm audit in CI/CD | Active |
| 3.14.2 | Provide protection from malicious code | Input validation, OWASP controls | Planned |
| 3.14.3 | Monitor security alerts | Sentry + Cloudflare security events | Planned |

## Status Key

- **Active** — Control implemented and operational
- **Planned** — Control defined in PRD, to be implemented during app build
- **Design** — Architecture designed to support control; implementation deferred
- **N/A** — Not applicable at current stage

---
*Last updated: June 2026 | Next review: Post-MVP launch*
