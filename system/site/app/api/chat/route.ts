export const maxDuration = 30;

async function getContext(query: string) {
  try {
    const res = await fetch('http://127.0.0.1:8080/mcp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/event-stream'
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "tools/call",
        params: {
          name: "search",
          arguments: { query, k: 3 }
        }
      })
    });
    
    const rawText = await res.text();
    let dataObj: any = null;
    
    // Parse SSE or JSON
    if (rawText.includes('event: message\ndata: ')) {
      const dataStr = rawText.split('event: message\ndata: ')[1].split('\n\n')[0];
      dataObj = JSON.parse(dataStr);
    } else {
      dataObj = JSON.parse(rawText);
    }

    if (dataObj.result && dataObj.result.content) {
      // The search tool returns a stringified JSON in the text field
      const searchRes = JSON.parse(dataObj.result.content[0].text);
      if (searchRes.hits) {
        return searchRes.hits.map((h: any) => h.content).join('\n\n');
      }
    }
  } catch (e) {
    console.error("MCP Fetch Error", e);
  }
  return "";
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not set.");
    }

    const lastMessage = messages[messages.length - 1]?.content || "";
    const contextText = await getContext(lastMessage);

    const contents = messages.map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    const systemPrompt = `You are the Brightline AI assistant. You must obey these two strict rules based on the user's input:

Rule 1 (Greetings & Chit-chat): If the user is just saying hello, thanking you, or making polite small talk, respond warmly and briefly as a helpful assistant.

Rule 2 (Factual Queries): If the user asks ANY question about Brightline's product, pricing, policies, or operations, you MUST answer ONLY using the provided Context below. If the answer is not explicitly found in the Context, you must say exactly: "I can't find that information in the official documentation." DO NOT predict, guess, or hallucinate any data about Brightline.

Context:
${contextText}`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          systemInstruction: {
            role: "user",
            parts: [{ text: systemPrompt }]
          }
        })
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response("I'm receiving too many requests right now. Please wait a moment and try again.", { status: 429 });
      }
      const err = await response.text();
      console.error("Gemini API Error:", err);
      throw new Error(err);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";

    return new Response(text, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8'
      }
    });
  } catch (error: any) {
    console.error("AI GENERATE ERROR:", error);
    return new Response(error.message || "Unknown error", { status: 500 });
  }
}
