# AI Governance Policy — Soviic

**Company:** CyberSentinel Services LLC (DBA: Soviic)  
**Version:** 1.0 | **Effective:** June 2026

## 1. Purpose

Establish responsible use guidelines for AI features within the Soviic platform, including AI-assisted workflow creation, suggestions, and automation.

## 2. AI Features in Soviic

- **Workflow Suggestions** — AI recommends workflow structures based on described business processes
- **Natural Language Workflow Builder** — Users describe a workflow in plain language; AI generates the configuration
- **Error Diagnosis** — AI analyzes failed workflow runs and suggests fixes
- **Smart Defaults** — AI pre-populates common workflow settings based on industry and use case

## 3. Core AI Principles

### Human Oversight Required
- All AI-generated workflow configurations require explicit human review and activation before executing against live data
- No AI-generated workflow shall auto-activate without user confirmation
- Users are responsible for reviewing AI output before deployment

### Transparency
- AI-generated content is clearly labeled in the UI with an AI indicator badge
- Users are informed when AI features are in use
- AI limitations are disclosed at the point of use

### Accuracy Disclaimer
The following disclaimer is displayed on all AI-assisted features:

> *AI-generated suggestions may not always be accurate. Review all AI output before activating workflows. AI features do not constitute legal, compliance, financial, or professional advice.*

## 4. Data Usage

- Customer workflow data is not used to train AI models without explicit opt-in consent
- AI prompts and completions are logged in the audit trail
- Anonymized, aggregated patterns may be used to improve suggestion quality
- No customer PII is included in AI prompts without customer-initiated context

## 5. Prohibited AI Uses

Users may not use Soviic AI features to:
- Generate content that violates the Acceptable Use Policy
- Automate decisions with significant impact on individuals without human review
- Bypass security controls or access restrictions
- Create workflows designed to deceive, manipulate, or harm others

## 6. AI Provider Security

- AI API keys stored as encrypted secrets — never exposed in client-side code
- All AI API calls made server-side
- AI provider subprocessors evaluated for data handling practices
- No AI provider given standing access to customer data

## 7. Future Considerations

As AI capabilities evolve, this policy will be updated to address:
- Agentic AI workflows that take autonomous multi-step actions
- AI model fine-tuning on customer data (requires explicit consent framework)
- AI-generated compliance evidence and audit documentation
- NIST AI RMF alignment as the framework matures

---
*CyberSentinel Services LLC | hello@soviic.com*
