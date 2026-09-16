---
type: Concept
title: "Brightline API Overview"
description: "Brightline API Overview"
status: stable
generated: { by: "human:mshariq", at: "2026-09-14T17:00:00Z" }
ksor:
  audience:
    - public
  owner: human:mshariq
  approval: { by: "human:mshariq", at: "2026-09-14T17:00:00Z" }
sources:
  - id: fixture-api-overview
    title: Fixture api-overview.md
    resource: "src/brightline-ksor-fixtures/fixtures/public-sor/api-overview.md"
---

Brightline provides a REST API for programmatic access to projects, tasks,
and users.

## Authentication

- API keys (per-workspace) for server-to-server integrations.
- OAuth 2.0 for apps acting on behalf of a Brightline user.

## Rate Limits

| Plan       | Requests per minute |
|------------|----------------------|
| Team       | 120                  |
| Business   | 600                  |
| Enterprise | Custom, contact sales |

Rate limits apply per workspace. Exceeding the limit returns an HTTP 429 with
a `Retry-After` header.

## Core Resources

- `/projects` — create, list, update, archive projects
- `/tasks` — create, list, update tasks; supports filtering by project, assignee, status
- `/users` — list workspace members
- `/webhooks` — subscribe to task and project events

## Pagination

List endpoints are cursor-paginated via a `next_cursor` field in the response
body; pass it as a `cursor` query parameter to fetch the next page.

## Support

API support is available through the same channels described in
`support-sla.md`, at the response times listed there.
