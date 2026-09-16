import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";

function FuturisticHeaderBackground() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          /* LIGHT MODE PALETTE (Amber & Emerald on crisp white) */
          --nav-bg: rgba(255, 255, 255, 0.85);
          --nav-shadow: 0 20px 40px rgba(0,0,0,0.05), 0 0 40px rgba(245, 158, 11, 0.15), inset 0 1px 0 rgba(255,255,255,1);
          --nav-border-grad: linear-gradient(135deg, rgba(245,158,11,0.8) 0%, rgba(16,185,129,0.3) 30%, rgba(255,255,255,0.8) 50%, rgba(245,158,11,0.3) 70%, rgba(16,185,129,0.8) 100%);
          --nav-border-shadow: inset 0 0 10px rgba(0,0,0,0.05);
          
          --btn-bg: rgba(0, 0, 0, 0.03);
          --btn-border: rgba(0, 0, 0, 0.08);
          --btn-text: #0f172a;
          --btn-hover-bg: rgba(245, 158, 11, 0.1);
          --btn-hover-border: rgba(245, 158, 11, 0.3);
          --btn-hover-shadow: 0 0 15px rgba(245,158,11,0.15), inset 0 1px 0 rgba(255,255,255,0.8);
          
          --kbd-bg: rgba(0, 0, 0, 0.04);
          --kbd-border: rgba(0, 0, 0, 0.1);
          --kbd-text: #64748b;
          
          --hud-glow: rgba(245, 158, 11, 0.4);
          --hud-left: #f59e0b;
          --hud-right: #10b981;
          --hud-mark: rgba(0,0,0,0.2);
          --hud-ambient: rgba(245, 158, 11, 0.05);
        }

        .dark {
          /* DARK MODE PALETTE (Blue & Purple on Obsidian) */
          --nav-bg: rgba(8, 8, 12, 0.85);
          --nav-shadow: 0 20px 40px rgba(0,0,0,0.8), 0 0 40px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255,255,255,0.15);
          --nav-border-grad: linear-gradient(135deg, rgba(59,130,246,1) 0%, rgba(168,85,247,0.4) 30%, rgba(255,255,255,0.1) 50%, rgba(59,130,246,0.4) 70%, rgba(168,85,247,1) 100%);
          --nav-border-shadow: inset 0 0 10px rgba(255,255,255,0.5);
          
          --btn-bg: rgba(255, 255, 255, 0.05);
          --btn-border: rgba(255, 255, 255, 0.1);
          --btn-text: #f8fafc;
          --btn-hover-bg: rgba(59, 130, 246, 0.15);
          --btn-hover-border: rgba(59, 130, 246, 0.5);
          --btn-hover-shadow: 0 0 15px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.2);
          
          --kbd-bg: rgba(0, 0, 0, 0.5);
          --kbd-border: rgba(255, 255, 255, 0.15);
          --kbd-text: #94a3b8;
          
          --hud-glow: rgba(59, 130, 246, 0.5);
          --hud-left: #3b82f6;
          --hud-right: #a855f7;
          --hud-mark: rgba(255,255,255,0.3);
          --hud-ambient: rgba(59, 130, 246, 0.1);
        }

        /* Transform the default navbar into a floating pill */
        #nd-nav {
          position: fixed !important;
          top: 24px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: 90% !important;
          max-width: 1000px !important;
          height: 64px !important;
          border-radius: 32px !important;
          background: var(--nav-bg) !important;
          backdrop-filter: blur(24px) saturate(150%) !important;
          box-shadow: var(--nav-shadow) !important;
          transition: all 0.3s ease !important;
          overflow: visible !important;
          border: none !important;
          z-index: 50 !important;
        }

        /* Perfect internal padding and vertical centering */
        #nd-nav > nav,
        #nd-nav > div > nav {
          height: 100% !important;
          padding: 0 clamp(12px, 4vw, 24px) !important;
          margin: 0 !important;
        }

        /* Strip all background colors from inner elements so our pill shows */
        #nd-nav > div, 
        #nd-nav > div > div {
          background: transparent !important;
          border: none !important;
          backdrop-filter: none !important;
          height: 100% !important;
        }

        /* Static Ultra-Shiny Premium Border */
        #nd-nav::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 33px;
          background: var(--nav-border-grad);
          z-index: -1;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          padding: 1.5px;
          box-shadow: var(--nav-border-shadow);
        }

        /* Search Button Premium Styling */
        #nd-nav button[data-search-full] {
          background: var(--btn-bg) !important;
          border: 1px solid var(--btn-border) !important;
          color: var(--btn-text) !important;
          border-radius: 9999px !important;
          height: 38px !important;
          padding-left: 14px !important;
          padding-right: 6px !important;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.1) !important;
          transition: all 0.2s ease !important;
        }
        #nd-nav button[data-search-full]:hover {
          background: var(--btn-hover-bg) !important;
          border-color: var(--btn-hover-border) !important;
          box-shadow: var(--btn-hover-shadow) !important;
        }
        
        /* Search Button KBD tags */
        #nd-nav button[data-search-full] kbd {
          background: var(--kbd-bg) !important;
          border: 1px solid var(--kbd-border) !important;
          color: var(--kbd-text) !important;
        }

        /* Theme Toggle & Other Buttons Premium Styling */
        #nd-nav button[data-theme-toggle],
        #nd-nav button[aria-label="Open Search"],
        #nd-nav button[aria-label="Toggle Menu"] {
          background: var(--btn-bg) !important;
          border: 1px solid var(--btn-border) !important;
          color: var(--btn-text) !important;
          border-radius: 9999px !important;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.1) !important;
          transition: all 0.2s ease !important;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #nd-nav button[data-theme-toggle]:hover,
        #nd-nav button[aria-label="Open Search"]:hover,
        #nd-nav button[aria-label="Toggle Menu"]:hover {
          background: var(--btn-hover-bg) !important;
          border-color: var(--btn-hover-border) !important;
          box-shadow: var(--btn-hover-shadow) !important;
        }
      `}} />

      {/* Cybernetic HUD framing dropping from the top screen edge */}
      <div className="fixed top-0 left-0 w-full h-32 z-30 pointer-events-none flex justify-center">
        {/* Top edge glow */}
        <div className="absolute top-0 left-0 w-full h-[1px] opacity-50" style={{ background: 'linear-gradient(to right, transparent, var(--hud-glow), transparent)' }} />
        
        {/* Architectural brackets */}
        <svg className="absolute top-0 w-full max-w-[1200px] h-32 opacity-40" viewBox="0 0 1200 128" fill="none">
          {/* Left Bracket */}
          <path d="M 100 0 L 100 30 L 130 60 L 250 60" stroke="var(--hud-left)" strokeWidth="1.5" strokeOpacity="0.5" />
          <circle cx="250" cy="60" r="3" fill="var(--hud-left)" />
          
          {/* Right Bracket */}
          <path d="M 1100 0 L 1100 30 L 1070 60 L 950 60" stroke="var(--hud-right)" strokeWidth="1.5" strokeOpacity="0.5" />
          <circle cx="950" cy="60" r="3" fill="var(--hud-right)" />

          {/* Center alignment marks */}
          <path d="M 600 0 L 600 15" stroke="var(--hud-mark)" strokeWidth="1" />
          <path d="M 580 8 L 620 8" stroke="var(--hud-mark)" strokeWidth="1" />
        </svg>

        {/* Ambient top light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] blur-[50px] rounded-full" style={{ background: 'var(--hud-ambient)' }} />
      </div>
    </>
  );
}

// The front door stands ALONE: a navbar with the record's name, search and the
// theme switch, and nothing else.
export default function Layout({ children }: any) {
  const options = baseOptions();
  return (
    <>
      <FuturisticHeaderBackground />
      <HomeLayout 
        {...options}
        nav={{
          ...options.nav,
          transparentMode: "always" // We handle background completely via CSS overrides above
        }}
      >
        {children}
      </HomeLayout>
    </>
  );
}
