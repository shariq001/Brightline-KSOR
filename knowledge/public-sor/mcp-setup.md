---
type: Concept
title: "Brightline AI Agent Connection (MCP)"
description: "A digital brain for your AI assistants. Connect to Brightline's Knowledge System of Record via the Model Context Protocol (MCP) to interact with our latest verified information."
order: 4
status: stable
generated: { by: "human:mshariq", at: "2026-09-28T14:58:00Z" }
ksor:
  audience: [public]
  owner: human:mshariq
  approval: { by: "human:mshariq", at: "2026-09-28T14:58:00Z" }
---

# Brightline AI Agent Connection (MCP)

![Brightline MCP Server](/minimal_agentic_ai.jpg)

**The Brightline AI Agent Connection** is your autonomous assistant's direct gateway to our Knowledge System of Record. Instead of relying on outdated training data, your agent connects to our live brain. It lives inside the AI agent you already use, including Claude Desktop, pulling verified pricing, SLAs, and technical specifications exactly when you need them.

## 1. The MCP Endpoint

The Model Context Protocol (MCP) is the standard that wires your local agent into our live records. If you are using a standard MCP client, you will need our official MCP endpoint.

<Callout type="info" title="Official Live Endpoint">
**`https://brightline-ksor-site.vercel.app/mcp`**
</Callout>

*Note: This endpoint uses the Server-Sent Events (SSE) transport protocol.*

---

## 2. Connecting with Claude Desktop

If you use Claude Desktop as your AI assistant, configuring it to read our documentation is simple. It takes exactly three steps.

### Step 1: Open Configuration
Open your Claude Desktop configuration file.
- **Mac**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

### Step 2: Add the Brightline Server
Add the Brightline server to your `mcpServers` object:

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

### Step 3: Restart
**Restart Claude Desktop**. You will now see a small "plug" icon (🔌) confirming Brightline KSOR tools are available. You can now ask Claude questions like:
- *"What is Brightline's SaaS pricing?"*
- *"Show me the Brightline 14-day refund policy."*

---

## 3. The Toolset

Once connected, your AI agent has three primary tools at its disposal:

| Tool | Purpose |
| :--- | :--- |
| **`search`** | Semantically searches our vector database for specific concepts. |
| **`read`** | Retrieves the full markdown text of a specific document for deep context. |
| **`outline`** | Lists all available documents in the public Brightline ecosystem. |

<Callout type="warn" title="Fail-Closed Abstention">
Our MCP server uses strict embedding distance thresholds. If your agent asks a question that our documentation does not answer, the server deliberately refuses to provide a document. This ensures your agent will safely abstain rather than hallucinate false policies.
</Callout>
