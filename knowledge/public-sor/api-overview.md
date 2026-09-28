---
type: Concept
title: "Brightline API & Developer Overview"
description: "Integration details for Brightline SaaS, AI Agents, and RAG architectures."
status: stable
generated: { by: "human:mshariq", at: "2026-09-28T13:00:00Z" }
ksor:
  audience:
    - public
  owner: human:mshariq
  approval: { by: "human:mshariq", at: "2026-09-28T13:00:00Z" }
---

# Brightline API & Developer Overview

Brightline offers powerful developer tools to integrate our SaaS platforms, trigger autonomous AI Agents, and interact with your custom RAG pipelines.

## 1. REST API
Our unified REST API allows you to programmatically manage your digital products.
- **Base URL**: `https://api.brightline.com/v1/`
- **Authentication**: Bearer token via standard `Authorization` headers. We support Workspace API keys and OAuth 2.0 flows.
- **Endpoints**: Cover user management, billing provisioning, and custom dashboard analytics.

## 2. AaaS (Agentic) Triggers & Webhooks
Integrate Brightline's autonomous agents directly into your CI/CD pipelines or internal tools.
- **Agent Triggers**: Send a `POST /v1/agents/invoke` request to dispatch a background agent for a specific task (e.g., data research, code review).
- **Webhooks**: Register webhooks to receive real-time JSON payloads when an agent completes a workflow, encounters a blocker, or requires human-in-the-loop approval.

## 3. RAG Pipeline Integrations
For clients utilizing our Retrieval-Augmented Generation services, we expose direct interfaces to your siloed vector stores.
- **Ingest API**: Stream documents directly into your vector database.
- **Semantic Search API**: Query your RAG database programmatically to receive grounded, cited answers inside your own applications.

<Callout type="info" title="Developer Portal">
For complete OpenAPI specifications, SDKs (Node.js, Python), and rate limit details, visit the Brightline Developer Portal at `developer.brightline.com`.
</Callout>
