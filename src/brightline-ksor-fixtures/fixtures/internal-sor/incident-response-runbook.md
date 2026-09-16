---
doc_id: BL-INT-002
title: Incident Response Runbook
version: 1.3
effective_date: 2026-03-10
status: current
audience: internal
owner: Engineering
confidentiality: internal-only
---

# Incident Response Runbook (Internal)

Steps to follow when a production outage or major incident is detected.

## 1. Detect and Declare

Any employee who notices a production issue (elevated error rates, downtime, data integrity concerns) declares an incident by posting in the `#incidents` Slack channel with a brief description and suspected severity (SEV1–SEV3).

## 2. Page On-Call

If not already paged automatically, the declarer pages the on-call engineer via PagerDuty ("Brightline Production" schedule).

## 3. Escalation Path

- If the on-call engineer does not acknowledge within 10 minutes, escalate to the Engineering Manager on-call.
- If the incident is unresolved after 30 minutes, or is assessed as SEV1, escalate to the primary incident escalation contact:

  **Priya Nair, VP Engineering — priya.nair@brightline-internal.example, +1 (555) 019-2231 (internal escalation line)**

## 4. Communicate

- Post customer-facing status updates on the status page for any incident affecting availability, following the Support team's approved status-page language.
- Provide internal updates in `#incidents` at least every 30 minutes until resolved.

## 5. Resolve and Follow Up

- Once resolved, post a resolution summary in `#incidents`.
- A postmortem document must be published within 5 business days for any SEV1 or SEV2 incident, including root cause and action items.

## Severity Definitions

- **SEV1**: Full outage or data-loss risk affecting all customers.
- **SEV2**: Significant degradation affecting a subset of customers or a major feature.
- **SEV3**: Minor degradation with workaround available.
