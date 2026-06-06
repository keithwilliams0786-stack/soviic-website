# Access Control Policy — Soviic

**Company:** CyberSentinel Services LLC (DBA: Soviic)  
**Version:** 1.0 | **Effective:** June 2026

## 1. Purpose

Define how access to Soviic systems, data, and infrastructure is granted, managed, and revoked. Aligned with NIST SP 800-171 Section 3.1 and CMMC AC controls.

## 2. Role-Based Access Control (RBAC)

### Customer-Facing Roles

| Role | Capabilities |
|------|-------------|
| Owner | Full account access — billing, team management, all workflows, all data |
| Admin | Workflow management, team management, all workflows — no billing access |
| Member | Create and manage own workflows, view team workflows, limited data access |
| Viewer | Read-only access to workflows and reports — no create/edit/delete |

### Internal / Infrastructure Roles

| Role | Who | Access |
|------|-----|--------|
| Platform Admin | Keith R. Williams | Full infrastructure access via MFA-protected accounts |
| Supabase Admin | Keith R. Williams | Database console — MFA required |
| Cloudflare Admin | Keith R. Williams | DNS, CDN, Workers — MFA required |

## 3. Principles

- **Least Privilege** — Grant minimum access needed for the role
- **Separation of Duties** — No single user controls both financial and technical systems without oversight
- **Need to Know** — Access to customer data only when required for support, with audit log entry
- **Zero Standing Privilege** — Production database access is not persistent; obtained only when needed

## 4. Account Management

### Provisioning
- New users invited by Owner or Admin via verified email
- Role assigned at invitation — defaults to Member
- Account activation requires email verification

### De-provisioning
- Deactivated immediately when employment or contract ends
- OAuth tokens revoked within 24 hours
- Access reviewed quarterly

### Password and MFA Requirements
- Minimum 12 characters
- MFA required for all accounts (TOTP or SMS)
- MFA required for all infrastructure admin accounts

## 5. Infrastructure Access

- All Cloudflare, Supabase, GitHub, and Stripe accounts protected by MFA
- Shared credentials are prohibited — each administrator has individual accounts
- SSH access to any server requires key-based authentication — password auth disabled
- Access logs reviewed monthly

## 6. Third-Party Access

- Contractors given time-limited, scoped access only
- Access documented in contractor agreement
- Revoked immediately upon contract completion
- No third party has standing access to production customer data

---
*CyberSentinel Services LLC | security@soviic.com*
