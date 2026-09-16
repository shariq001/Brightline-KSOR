---
doc_id: BL-INT-001
title: Refund Approval Policy
version: 2.0
effective_date: 2026-06-01
status: current
audience: internal
owner: Customer Support Operations
confidentiality: internal-only
---

# Refund Approval Policy (Internal)

This policy sets refund thresholds and approval authority for Brightline Support staff. It supersedes all prior versions, including the version effective 2024-01-15.

## Thresholds and Approval Authority

| Refund Amount        | Who May Approve                          |
|-----------------------|--------------------------------------------|
| Up to $200            | Support Agent (no additional approval)     |
| $200.01 – $1,000      | Support Manager approval required          |
| Above $1,000          | Director of Customer Success approval required |

## Process

1. Agent confirms the refund reason and eligibility (billing error, service outage credit, cancellation within trial window, etc.).
2. Agent issues the refund directly in Zendesk/Stripe if the amount is at or below $200, logging a reason code.
3. For amounts above $200, the agent submits a refund request in the "Refund Approvals" Zendesk queue and tags the appropriate approver.
4. All refunds, regardless of amount, must be logged with a reason code for audit purposes.

## Notes

- Agents must never tell a customer a refund is "no questions asked" — all refunds require a logged reason code.
- This threshold applies per refund request, not cumulatively per customer per year.
- Questions about edge cases should be routed to the Support Manager on duty.
