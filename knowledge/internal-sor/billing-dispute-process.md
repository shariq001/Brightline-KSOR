---
type: Concept
title: "Billing Dispute Process"
description: "Billing Dispute Process"
status: stable
generated: { by: "human:mshariq", at: "2026-09-14T17:00:00Z" }
ksor:
  audience:
    - internal
  owner: human:mshariq
  approval: { by: "human:mshariq", at: "2026-09-14T17:00:00Z" }
sources:
  - id: fixture-billing-dispute-process
    title: Fixture billing-dispute-process.md
    resource: "src/brightline-ksor-fixtures/fixtures/internal-sor/billing-dispute-process.md"
---

Process for handling customer-initiated billing disputes and chargebacks.
This is distinct from the Refund Approval Policy: a "dispute" originates with
the customer's card issuer or the customer formally contesting a charge, not
a routine refund request handled directly by Support.

## Process

1. Billing Ops is notified of a dispute either via the payment processor
   (chargeback notification) or via a customer email disputing a charge.
2. Billing Ops opens a case within 1 business day and gathers account and
   invoice history.
3. If the dispute is a chargeback (initiated with the card issuer), Billing
   Ops submits supporting evidence to the payment processor within the
   processor's deadline (typically 7–10 days).
4. If the dispute is raised directly by the customer (not yet a chargeback),
   Billing Ops attempts resolution directly — this may result in a refund
   processed under the normal Refund Approval Policy thresholds, or a
   negotiated credit.
5. Disputes involving more than $2,000 or a pattern of repeated disputes from
   the same account are escalated to the Finance team for review.

## Relationship to Other Policies

- Standard refunds within a dispute resolution still follow the thresholds in
  `refund-approval-policy.md`.
- Disputes are tracked separately from routine refunds in the billing system
  for chargeback-rate monitoring with the payment processor.
