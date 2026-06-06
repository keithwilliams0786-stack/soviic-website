# Backup and Recovery Policy — Soviic

**Company:** CyberSentinel Services LLC (DBA: Soviic)  
**Version:** 1.0 | **Effective:** June 2026

## 1. Recovery Objectives

| Metric | Target |
|--------|--------|
| Recovery Time Objective (RTO) | 4 hours for critical systems |
| Recovery Point Objective (RPO) | 24 hours maximum data loss |
| Uptime Target | 99.5% monthly |

## 2. Backup Strategy

### Database (Supabase)
- **Frequency:** Continuous point-in-time recovery (PITR) — Supabase Pro feature
- **Retention:** 7 days of PITR on free tier; 30 days on Pro
- **Encryption:** Encrypted at rest by Supabase (AES-256)
- **Location:** Supabase-managed — AWS us-east-1

### Application Code
- **Method:** Git-based version control via GitHub
- **Frequency:** Every commit — continuous
- **Recovery:** Redeploy from any commit via Cloudflare Pages

### Configuration and Secrets
- **Method:** Documented in internal runbook (not in Git)
- **Secrets:** Stored in Cloudflare Secrets and Supabase Vault
- **Recovery:** Restore from Vault; rotate if compromised

## 3. Recovery Procedures

### Database Recovery
1. Log into Supabase dashboard
2. Navigate to Database → Backups
3. Select recovery point
4. Initiate point-in-time restore
5. Verify data integrity after restore
6. Update application connection strings if database URL changed

### Application Recovery
1. Log into Cloudflare Pages
2. Navigate to soviic-website project → Deployments
3. Select last known good deployment
4. Click "Rollback to this deployment"
5. Verify application functionality

### Full Platform Recovery (Disaster Scenario)
1. Provision new Supabase project
2. Restore database from most recent backup
3. Update environment variables in Cloudflare Pages
4. Redeploy application from GitHub
5. Verify all integrations and DNS settings
6. Notify customers of any service interruption

## 4. Testing

Backup recovery procedures shall be tested:
- Database restore: Quarterly (test restore to staging environment)
- Application rollback: Monthly (verify rollback capability after each major deployment)
- Full recovery drill: Annually

## 5. Communication During Outages

- Status page: status.soviic.com (to be implemented)
- Email notification to affected customers for outages > 30 minutes
- Incident Commander (Keith R. Williams) responsible for all communications

---
*CyberSentinel Services LLC | security@soviic.com*
