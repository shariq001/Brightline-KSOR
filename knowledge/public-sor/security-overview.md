---
type: Concept
title: "Brightline Security & Compliance Overview"
description: "How Brightline secures your SaaS products, AI Agents, and Vector Databases."
status: stable
generated: { by: "human:mshariq", at: "2026-09-28T13:00:00Z" }
ksor:
  audience:
    - public
  owner: human:mshariq
  approval: { by: "human:mshariq", at: "2026-09-28T13:00:00Z" }
---

# Brightline Security & Compliance Overview

This document summarizes how Brightline Software Inc. protects customer data and ensures the highest standards of reliability across our digital products.

## Certifications & Audits

- **SOC 2 Type II**: Brightline maintains ongoing SOC 2 Type II compliance. The full report is available under NDA upon request.
- **Penetration Testing**: We conduct bi-annual third-party penetration testing across our SaaS platforms and AI infrastructure. Summary results are available to Enterprise customers on request.

## AI & Data Security

With the introduction of Agents as a Service (AaaS) and Retrieval-Augmented Generation (RAG), we employ specialized security controls:

- **Vector Silos**: All RAG embeddings are strictly siloed. Cross-tenant data leakage is prevented via Row-Level Security (RLS) in our vector databases.
- **LLM Data Retention**: We only partner with AI providers (e.g., OpenAI, Anthropic, Google) through Enterprise agreements that explicitly **prohibit** the use of customer data for model training.
- **Agent Permissions**: AI Agents operate under the Principle of Least Privilege. Agents can only execute actions permitted by the specific API tokens and roles assigned to them by the client.

## Encryption & Access

- **In Transit**: All data is encrypted in transit using TLS 1.3 or higher.
- **At Rest**: Data at rest (including backups and vector embeddings) is encrypted using AES-256.
- **Access Control**: Brightline employees do not have access to customer data unless explicitly granted by the customer for support or troubleshooting purposes.

<Callout type="info" title="Security Reporting">
If you believe you have discovered a security vulnerability in a Brightline product, please report it immediately to `security@brightline.com`.
</Callout>
