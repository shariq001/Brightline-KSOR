---
type: Concept
title: "Brightline AI Agent Connection (MCP)"
description: "A digital brain for your AI assistants. Connect to Brightline's Knowledge System of Record via the Model Context Protocol (MCP) to interact with our latest verified information."
order: 4
status: stable
generated: { by: "human:mshariq", at: "2026-09-28T15:25:00Z" }
ksor:
  audience: [public]
  owner: human:mshariq
  approval: { by: "human:mshariq", at: "2026-09-28T15:25:00Z" }
---

# Brightline AI

A personal enterprise agent, built as a digital twin of Brightline's core methodology, that teaches our product suite, remembers your business context, and continues where you stopped.

Brightline AI combines four things an ordinary AI chatbot does not have:

-   the governed knowledge of the Brightline Knowledge System of Record
-   Brightline's enterprise standards, service level agreements, and deployment methodology
-   your persistent integration record: what features you reviewed, what architecture you deployed, and what you should implement next
-   your specific enterprise goals and background. Every interaction is shaped around it, and it is yours to see and change any time.

![Brightline MCP Server](/minimal_agentic_ai.jpg)

Brightline Software co-founded the Agentic Web and architected this Knowledge System of Record. Our agentic methodology is designed to deploy high-quality software, SaaS products, and RAG solutions for enterprises worldwide.

Brightline AI lives inside the AI agent you already use, including Claude. Add one connector, authorize once, and begin integrating. There is no separate enterprise app to install and no second interface to learn. **Your AI agent is the runtime.**

## Personal AI begins with a purpose

Brightline AI has one defined purpose:

Help you gain the expertise to deploy Brightline SaaS products, architect RAG solutions, and securely integrate our services into your enterprise.

That focus makes it a **vertical personal AI agent for enterprise software**. It does not try to manage your entire life. It maintains the context required to guide one important technical deployment from beginning to competence.

Most AI assistants answer the question in front of them. Brightline AI also understands where that question belongs in your deployment journey. It can:

-   greet you by name
-   remember where your architecture planning stopped
-   continue across sessions and weeks
-   explain features in the sequence appropriate for your tech stack
-   check whether you understood the previous security concept
-   identify what deployment phase you should tackle next
-   ground every answer in the governed Brightline knowledge base

## One system, two roles

Brightline AI has two complementary roles.

**For the enterprise client**

A personal integration agent

It knows your deployment context and guides your individual progress through the Brightline product suite.

**For Brightline Software**

The reference expert twin

Brightline AI is a **digital twin** of our Chief Architect: our design identity, security judgment, and governed knowledge, encoded as an agent. In engineering, a digital twin represents a physical asset. Here, it represents our company's expertise and deployment method instead.

## One connector, two records

Behind the agent are two governed records working together:

**Knowledge Record**

The Brightline System of Record holds the governed concepts, pricing, API methods, terminology, and technical material.

**Client Record**

Your deployment goal, what you build, and how your stack operates, plus the modules you completed, the architecture you designed, and your next integration step.

Together, these records produce something more capable than a chatbot with a system prompt. They create an enterprise assistant that is grounded, recognizable, and continuous.

## Why it matters

The first generation of enterprise AI tools gave users access to generic answers. The next generation will give every client access to a personal agent that understands:

-   who they are
-   what they are trying to achieve
-   what they already know
-   where their deployment is struggling
-   what they should build next

Brightline AI is our implementation of that future.

---

### Set up Brightline AI

You add one thing in [claude.ai](https://claude.ai/new?modal=add-custom-connector#settings/customize-connectors), once. The **connector** brings the system of record, our methodology, and your progress. After that, you just ask a question. About one minute in all.

**Beta 1**
Expect rough edges while it is in beta. If something breaks, verify critical facts with our support team.

#### Step 1: Add the connector

1. Open **Connectors** in your [claude.ai](https://claude.ai/new?modal=add-custom-connector#settings/customize-connectors) sidebar under Customize.
2. Click **Add custom connector**.
3. Paste the **Name** and the **MCP Server URL** below. 
   - **Name**: Brightline AI
   - **MCP Server URL**: `https://brightline-ksor-site.vercel.app/mcp`
4. Open **Advanced settings**. Paste the **OAuth Client ID** there.
   - **OAuth Client ID**: `brightline-ksor` (Leave Client Secret empty).
5. Click **Add** to save the connector.
6. Find it in your list, click **Connect**, and approve. This gives you your own client record.
7. On the same page, set **Tool permissions** to **Always allow** for **both** groups. Skip this and Claude stops to ask your permission on almost every reply.

#### Step 2: Connect via Claude Desktop (Optional alternative)

If you prefer using the Claude Desktop application locally instead of the web, it takes exactly three steps to configure the Server-Sent Events (SSE) transport.

1. Open your Claude Desktop configuration file.
   - **Mac**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
2. Add the Brightline server to your `mcpServers` object:

```json
{
  "mcpServers": {
    "brightline-ksor": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sse",
        "--url",
        "https://brightline-ksor-site.vercel.app/mcp"
      ]
    }
  }
}
```
3. **Restart Claude Desktop**. You will now see a small "plug" icon (🔌) confirming Brightline KSOR tools are available.

#### Step 3: Start building

1. Open a new chat in claude.ai and pick **Opus 5** or **Sonnet 5** in the model picker under the chat box. Brightline AI has to check the system of record and your client record on every reply, and these two do that reliably.
2. Type this:
   `/brightline`
   Brightline AI will say hello by name and pick up where your integration stopped!
