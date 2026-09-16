# Brightline Software Inc — Knowledge System of Record (Sample Dataset)

This is a synthetic, self-contained sample dataset for building and testing a
Knowledge System of Record (KSoR): a governed store of authoritative
documents, plus the metadata and infrastructure artifacts a real KSoR needs
around those documents (registry, access control, ingestion provenance,
audit trail, entity glossary) — and a set of deliberately planted problems
(stale docs, quiet conflicts, unauthoritative chatter) to validate that your
system handles them correctly.

## Layout

```
fixtures/
├── public-sor/        Governed docs safe for anyone to read (6 docs)
├── internal-sor/       Governed docs for employees only (9 docs, incl. 1 superseded + 2 in quiet conflict)
├── working-context/     Emails/Slack — evidence, never authority (5 items)
├── registry/           Infra layer: registry, access control, ingestion, audit, glossary
├── README.md            This file
└── PLANTED.md            Answer key of every planted problem (excluded from indexing)
```

## How to use this as a portfolio project

1. **Ingest** `public-sor/` and `internal-sor/` using `registry/ingestion-manifest.yaml`
   as the source-of-truth for where each doc "came from" (simulated Confluence,
   Notion, Zendesk Guide, Google Drive) and when it was last synced.
2. **Register** each doc using `registry/doc-registry.json` as the target schema —
   doc_id, version, status, audience, sensitivity, checksum, source.
3. **Enforce access** at query time using `registry/access-control.yaml` — map a
   requester's role to the set of `audience`/`sensitivity` values they may see,
   not just an `audience:` label in front matter (labels alone enforce nothing).
4. **Ground answers**, never index `working-context/` as fact — treat it only as
   optional supporting evidence, and never surface it to unauthenticated users.
5. **Resolve conflicts** before answering: prefer `status: current` over
   `status: superseded` (see `old-refund-policy.md`), and when two docs are both
   `status: current` but disagree (see PLANTED.md §5), your system should either
   flag the conflict or defer to the doc with the later `effective_date` —
   but only if you've implemented that rule, not by accident.
6. **Log access and changes** in the style of `registry/audit-log.jsonl`.
7. **Never index or surface** `PLANTED.md` — it's the answer key, not a KSoR document.

## What's deliberately NOT here

This dataset is still intentionally small (15 governed docs). For a real
deployment you'd want: real connector auth, a real vector store, real
chunking, a real doc-diffing job to keep the registry in sync with source
systems, and coverage across every policy domain your org actually has. This
dataset gives you the *shape* to build that against, with enough planted
edge cases to know if your system is actually working.
