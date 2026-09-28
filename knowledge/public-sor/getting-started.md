---
type: Concept
title: "Getting Started with Brightline"
description: "A friendly, step-by-step crash course and onboarding guide for Brightline's Platform, AaaS, and RAG systems."
order: 1
status: stable
generated: { by: "human:mshariq", at: "2026-09-28T13:20:00Z" }
ksor:
  audience: [public]
  owner: human:mshariq
  approval: { by: "human:mshariq", at: "2026-09-28T13:20:00Z" }
---

# Getting Started with Brightline

Welcome to the **Brightline Knowledge System of Record (KSOR)**! We are thrilled to have you here. 

Whether you are a new customer looking to integrate our ready-to-use SaaS products, an engineer preparing to deploy autonomous AI agents, or an enterprise scaling private data pipelines, this guide will point you in the right direction. 

<Callout type="info" title="What is a KSOR?">
The Knowledge System of Record (KSOR) you are reading right now is our governed, single source of truth. Every document here is strictly version-controlled and verified. It serves as the factual foundation for both our human employees and our AI agents.
</Callout>

---

## 1. Choose Your Path

What are you trying to accomplish today? Pick your objective below to find the best documents to read first.

| Your Objective | What You'll Learn | Key Documents to Read |
| :--- | :--- | :--- |
| **Integrate SaaS & Web Apps** | How to set up API keys, manage your workspaces, and understand the platform structure. | [`Services & Deliverables`](product-overview.md)<br/>[`API Overview`](api-overview.md) |
| **Deploy AI Agents (AaaS)** | How to configure autonomous workflows, trigger agents, and monitor their performance. | [`API Overview`](api-overview.md)<br/>[`Pricing Policy`](pricing-policy.md) |
| **Build RAG Pipelines** | How to securely ingest your custom data and execute semantic search over private databases. | [`Data Privacy Policy`](data-privacy-policy.md)<br/>[`Security Overview`](security-overview.md) |

---

## 2. Your First Steps (Onboarding)

Follow these three core steps to get your Brightline workspace up and running safely and securely:

### Step 1: Secure Your Workspace
Before you upload any sensitive data, we want to ensure your account is locked down.
- **Read the Security Rules**: Take a minute to review our [Security & Compliance Overview](security-overview.md).
- **Turn on 2FA**: Enable Two-Factor Authentication (2FA) in your user dashboard.
- **Check Permissions**: Make sure you only give Admin rights to users who truly need them.

### Step 2: Understand the Costs and Guarantees
We hate surprise bills, and we bet you do too. Know your tier limits and support guarantees upfront.
- Subscriptions range from **Starter** to **Enterprise**.
- Check our [Pricing Policy](pricing-policy.md) to see exactly what features you get.
- Learn how fast we promise to answer your support tickets in the [Support & SLA Policy](support-sla.md).

### Step 3: Connect Your Data Safely
For users building RAG (Retrieval-Augmented Generation) databases or deploying AI Agents, connecting your private data securely is your next big move.
- Use our **Ingest APIs** to securely sync your documents to Brightline's isolated databases.
- Rest assured knowing your data will **never** be used to train public AI models (see our strict [Data Privacy Policy](data-privacy-policy.md)).

---

## 3. Best Practices for AI Workflows

When you start using Brightline's AI Agents to automate your business, keep these golden rules in mind:

<Callout type="warn" title="The Principle of Least Privilege">
Always give your AI agents the bare minimum permissions they need to do their job. If an agent is supposed to read customer emails, do not give it permission to delete your database!
</Callout>

1. **Be Explicit**: AI agents are smart, but they can't read your mind. Provide clear, step-by-step instructions when configuring them.
2. **Keep Humans in the Loop**: For critical tasks (like sending a financial wire or deleting old files), configure the agent to pause and ask for a human's approval before it acts.
3. **Watch the Dashboards**: Use your Brightline dashboard to keep an eye on what your agents are doing and how many API tokens they are consuming.

---

## Need Help?

We are always here if you get stuck:
- **General Support**: Reach out to `support@brightline.com`. (Check your [SLA](support-sla.md) to see how fast we'll reply).
- **Billing Questions**: Read our [Return & Refund Policy](refund-policy.md) for simple answers on cancellations and custom milestone billing.
