---
type: Concept
title: "Employee Discount Authority"
description: "Employee Discount Authority"
status: stable
generated: { by: "human:mshariq", at: "2026-09-14T17:00:00Z" }
ksor:
  audience:
    - internal
  owner: human:mshariq
  approval: { by: "human:mshariq", at: "2026-09-14T17:00:00Z" }
sources:
  - id: fixture-employee-discount-authority
    title: Fixture employee-discount-authority.md
    resource: "src/brightline-ksor-fixtures/fixtures/internal-sor/employee-discount-authority.md"
---

This policy defines how much discount off list price (see `pricing-policy.md`) a sales representative may offer without additional approval.

## Discount Thresholds

| Discount Off List Price | Who May Approve                      |
|---------------------------|----------------------------------------|
| Up to 10%                 | Sales Rep (no additional approval)     |
| 10.01% – 20%               | Sales Manager approval required        |
| 20.01% – 30%               | VP Sales approval required             |
| Above 30%                 | Not permitted except via Enterprise custom contract approved by the CFO |

## Process

1. Rep determines the appropriate discount based on deal size, competitive situation, and term length.
2. If within their own authority (≤10%), the rep applies the discount directly in the quote tool.
3. For discounts requiring approval, the rep submits the quote in Salesforce for approval routing before sending to the customer.
4. Discounts must never be verbally promised to a customer before approval is confirmed in Salesforce.

## Notes

- These thresholds apply to Team, Business, and standard Enterprise deals. Non-standard contract terms (e.g., multi-year prepay, non-standard payment terms) always require Sales Manager review regardless of discount size.
- This authority is separate from and unrelated to the Refund Approval Policy, which governs post-sale refunds, not sale-time discounts.
