"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<{id: string, role: string, content: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue?.trim() || isLoading) return;
    
    const newUserMsg = { id: Date.now().toString(), role: 'user', content: inputValue };
    const newMessages = [...messages, newUserMsg];
    
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to fetch response");
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No response body");
      
      const decoder = new TextDecoder();
      let aiContent = "";
      
      setMessages([...newMessages, { id: (Date.now() + 1).toString(), role: 'assistant', content: aiContent }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        aiContent += decoder.decode(value, { stream: true });
        
        setMessages(prev => {
          const latest = [...prev];
          latest[latest.length - 1].content = aiContent;
          return latest;
        });
      }
    } catch (error: any) {
      console.error(error);
      setMessages(prev => [
        ...prev, 
        { id: Date.now().toString(), role: 'assistant', content: error.message || "Sorry, I encountered an error. Please try again." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="chat-button"
            layoutId="chat-widget-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 left-4 sm:bottom-6 sm:left-auto sm:right-6 p-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all z-50 flex items-center justify-center cursor-pointer group"
          >
            <MessageCircle size={26} className="group-hover:hidden" />
            <Sparkles size={26} className="hidden group-hover:block animate-pulse" />
          </motion.button>
        )}

        {isOpen && (
          <motion.div
            key="chat-window"
            layoutId="chat-widget-container"
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-4 left-4 sm:bottom-6 sm:left-auto sm:right-6 w-[calc(100vw-2rem)] sm:w-[400px] h-[85vh] sm:h-[650px] max-h-[85vh] bg-zinc-950 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col z-50 overflow-hidden ring-1 ring-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-zinc-900/90">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-violet-500 flex items-center justify-center shadow-inner">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm tracking-wide">Brightline AI</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs text-zinc-300 font-medium">Online & ready</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-zinc-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6 scroll-smooth bg-zinc-950/80">
              {messages.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center space-y-4 mt-8"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center ring-1 ring-white/20 shadow-lg">
                    <Bot size={32} className="text-white" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-white">How can I help you today?</p>
                    <p className="text-xs text-zinc-300 max-w-[250px] leading-relaxed">Ask anything about Brightline's policies, pricing, or product specs.</p>
                  </div>
                </motion.div>
              )}
              {messages.map((m) => (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  key={m.id}
                  className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center ${m.role === 'user' ? 'bg-zinc-700' : 'bg-gradient-to-tr from-blue-500 to-violet-500 shadow-md shadow-blue-900/50'}`}>
                    {m.role === 'user' ? <User size={14} className="text-white" /> : <Sparkles size={14} className="text-white" />}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-2xl p-4 shadow-sm ${
                      m.role === "user"
                        ? "bg-gradient-to-br from-blue-600 to-violet-600 text-white rounded-tr-sm ring-1 ring-white/10"
                        : "bg-zinc-800 text-white border border-white/20 rounded-tl-sm backdrop-blur-md"
                    }`}
                  >
                    <div className="text-[13.5px] leading-relaxed text-white whitespace-pre-wrap [&>p]:mb-2 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:ml-4 [&>ol]:list-decimal [&>ol]:ml-4 [&_a]:underline [&_a]:text-blue-300 [&_strong]:font-bold [&_code]:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-md [&_pre]:bg-black/50 [&_pre]:p-2 [&_pre]:rounded-md [&_pre>code]:bg-transparent [&_pre>code]:p-0">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {m.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === 'user' && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="flex gap-3 flex-row"
                >
                  <div className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center bg-gradient-to-tr from-blue-500 to-violet-500 shadow-md shadow-blue-900/50">
                    <Sparkles size={14} className="text-white" />
                  </div>
                  <div className="bg-zinc-800 border border-white/20 rounded-2xl rounded-tl-sm p-4 backdrop-blur-md flex gap-1.5 items-center h-11">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                        className="w-2 h-2 bg-blue-400 rounded-full"
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/20 bg-zinc-900">
              <form onSubmit={handleFormSubmit} className="relative flex items-center">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full bg-zinc-800 border border-white/20 rounded-2xl pl-5 pr-14 py-3.5 text-[14px] text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-transparent transition-all shadow-inner"
                />
                <button
                  type="submit"
                  disabled={!inputValue?.trim() || isLoading}
                  className="absolute right-2 p-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(37,99,235,0.7)] transition-all flex items-center justify-center cursor-pointer"
                >
                  <Send size={18} className="ml-0.5" />
                </button>
              </form>
              <div className="text-center mt-3">
                <span className="text-[10px] text-zinc-400 font-medium">Brightline AI can make mistakes. Verify critical facts.</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
