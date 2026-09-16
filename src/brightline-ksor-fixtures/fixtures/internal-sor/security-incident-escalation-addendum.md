---
doc_id: BL-INT-002-ADD
title: Security Incident Escalation Addendum
version: 1.0
effective_date: 2026-08-20
status: current
audience: internal
owner: Security
confidentiality: internal-only
sensitivity: restricted
---

# Security Incident Escalation Addendum (Internal, Restricted)

This addendum tightens escalation timing specifically for incidents with a
**security** dimension (suspected unauthorized access, data exposure, or
active exploitation) — as distinct from general availability incidents
covered by the main Incident Response Runbook.

## Escalation Timing

For any incident where a security dimension is suspected, the on-call
engineer must escalate to the VP Engineering / security escalation contact
**within 15 minutes** of the incident being declared SEV1 in `#incidents`,
rather than the 30-minute window described for general SEV1 incidents.

## Additional Steps

- Loop in the Security team in `#security-incidents` immediately, in parallel
  with the standard `#incidents` posting.
- Do not include specific exploit details in the public-facing status page
  update; use pre-approved general language only.
- Legal must be notified for any incident involving suspected customer data
  exposure, regardless of confirmed impact.

## Note

This addendum has not yet been merged into the main
`incident-response-runbook.md`, which still states a 30-minute SEV1
escalation window without a security-specific carve-out. Until reconciled,
on-call staff should follow the 15-minute window for security-flagged
incidents and the 30-minute window for all other SEV1 incidents.
