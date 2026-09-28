---
format: 2
name: brightline-ksor
title: Brightline Software Knowledge Base
description: Brightline Software's governed source of product, pricing, and support knowledge.
site:
  url: https://brightline-ksor-site.vercel.app
mcp_url: https://brightline-ksor-site.vercel.app/mcp
toolchain:
  requires: ">=0.0.60"
  scaffolded: "0.0.60"
database:
  dsn_env: KSOR_DB_URL
---

This is Brightline Software's governed source of product, pricing, and support knowledge. It is the single authoritative place where facts about the product are written down, checked, and kept current — ensuring both people and AI agents receive accurate, cited answers instead of guesses. The corpus is firmly governed; queries for information not stored here will be met with "not in this corpus" rather than an invented response. Public users may browse this corpus directly, and connected agents may query it over MCP.

The record explicitly **does not cover**:
- **Operational state**: live account status, current subscriptions, or open support tickets. These must be fetched live to avoid cached inaccuracies.
- **Working context**: support emails, Slack threads, and internal chats. These are not reviewed or approved, and are never cited as fact.
- **Customer-specific data**: any information specific to a single client company's instance is excluded and remains in their own instance.
- **Third-party systems**: how external integrations (like Salesforce or Slack) work, beyond Brightline's own product documentation.
