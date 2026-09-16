---
doc_id: BL-INT-007
title: Data Retention — Internal Operations Detail
version: 1.0
effective_date: 2026-05-10
status: current
audience: internal
owner: Engineering
confidentiality: internal-only
---

# Data Retention — Internal Operations Detail

This document describes retention mechanics from an engineering/operations
perspective, for staff who manage backups and deletion jobs.

## Primary Data

Customer content in the primary database is deleted per the customer-facing
policy: retained for 90 days after account closure, then hard-deleted from
primary storage (see `data-privacy-policy.md` for the customer-facing
statement of this).

## Backups

Encrypted database backups are retained on a rolling basis and are purged
60 days after the underlying data is deleted from primary storage as part of
normal backup rotation. This means backup copies of a closed account's data
may still exist for a period after the account's data has been removed from
primary systems.

## Operational Notes

- Engineering does not currently have a documented process for triggering
  early backup purges outside the normal rotation, e.g. for a specific
  deletion request. Any such request should go to the Eng on-call lead for
  manual handling until tooling exists.
- This document has not yet been reconciled with the public data privacy
  policy's retention language; the two describe primary and backup storage
  differently and should be read together, not in isolation.
