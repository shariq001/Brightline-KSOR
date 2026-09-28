---
type: Concept
title: "Brightline MCP Server Setup"
description: "How to connect your autonomous AI agents to Brightline's Knowledge System of Record via the Model Context Protocol (MCP)."
order: 4
status: stable
generated: { by: "human:mshariq", at: "2026-09-28T14:15:00Z" }
ksor:
  audience: [public]
  owner: human:mshariq
  approval: { by: "human:mshariq", at: "2026-09-28T14:15:00Z" }
---

# Brightline MCP Server Setup

![MCP Connection](/brightline_services.jpg)

The **Model Context Protocol (MCP)** is an open standard that allows AI agents to securely connect to external knowledge bases. By connecting your agent to the Brightline KSOR MCP Server, your agent instantly gains access to all of our verified product information, pricing tiers, SLAs, and technical specifications.

---

## 1. The MCP Connection URL

If you are using a standard MCP client (like an agent harness, Claude Desktop, or custom script), you will need our official MCP endpoint.

<Callout type="info" title="Official Endpoint">
**`https://brightline-ksor.vercel.app/mcp`**
</Callout>

*Note: If you are testing locally during development, the endpoint is `http://localhost:3000/mcp`.*

---

## 2. Connecting with Claude Desktop

If you use Claude Desktop as your AI assistant, configuring it to read our documentation is simple. 

1. Open your Claude Desktop configuration file.
   - **Mac**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
2. Add the Brightline server to your `mcpServers` object using the standard Server-Sent Events (SSE) transport:

```json
{
  "mcpServers": {
    "brightline-ksor": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sse",
        "--url",
        "https://brightline-ksor.vercel.app/mcp"
      ]
    }
  }
}
```

3. **Restart Claude Desktop**. You will now see a small "plug" icon confirming Brightline KSOR tools are available.

---

## 3. What Can Your Agent Do?

Once connected, your AI agent has three primary tools at its disposal:

- `search`: Searches our vector database for specific concepts (e.g., "What is the SaaS pricing?").
- `read`: Retrieves the full markdown text of a specific document if the search requires more context.
- `outline`: Lists all available documents in the public Brightline ecosystem.

<Callout type="warn" title="Fail-Closed Abstention">
Our MCP server uses strict embedding distance thresholds. If your agent asks a question that our documentation does not answer, the server deliberately refuses to provide a document. This ensures your agent will safely abstain rather than hallucinate false policies.
</Callout>
