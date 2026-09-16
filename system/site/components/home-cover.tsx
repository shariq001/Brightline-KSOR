import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import type { ReactElement } from "react";

import { RecordStack } from "@/components/record-stack";
import type { RecordEntry } from "@/lib/source";

export function HomeCover({
  foot,
  mark,
  name,
  title,
  purpose,
  documents,
  firstUrl,
  lead,
  behind,
}: {
  mark: StaticImageData;
  name: string;
  title: string;
  purpose: string | null;
  documents: number;
  firstUrl: string;
  lead: RecordEntry;
  behind: readonly RecordEntry[];
  foot?: ReactElement;
}): ReactElement {
  return (
    <section className="relative flex min-h-[calc(100dvh-3.5rem)] flex-col bg-white dark:bg-[#050505] text-slate-900 dark:text-white overflow-hidden font-sans transition-colors duration-500">
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&display=swap');
        
        @keyframes pulse-ring { 0% { transform: scale(0.9); opacity: 0.8; } 100% { transform: scale(1.6); opacity: 0; } }
        
        .fancy-font { font-family: 'Cinzel', serif; }
        
        /* SVG Path Animation */
        .svg-path { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: draw 4s linear infinite; }
        @keyframes draw { to { stroke-dashoffset: 0; } }

        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />

      {/* --- MINIMAL AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-slate-50 dark:bg-[#030303] transition-colors duration-500" />
        
        {/* Deep, subtle ambient glows (Amber/Emerald in light mode, Blue/Purple in dark) */}
        <div className="absolute -top-[30%] -left-[10%] w-[120vw] lg:w-[80vw] h-[120vw] lg:h-[80vw] rounded-full bg-amber-500/10 dark:bg-blue-600/5 blur-[150px] transition-colors duration-500" />
        <div className="absolute top-[20%] -right-[20%] w-[100vw] lg:w-[70vw] h-[100vw] lg:h-[70vw] rounded-full bg-emerald-500/10 dark:bg-purple-600/5 blur-[150px] transition-colors duration-500" />
        <div className="absolute -bottom-[30%] left-[10%] w-[120vw] lg:w-[90vw] h-[120vw] lg:h-[90vw] rounded-full bg-amber-400/10 dark:bg-indigo-600/5 blur-[150px] transition-colors duration-500" />
        
        {/* Optional: incredibly subtle static dot pattern for texture, not a moving grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="relative flex flex-1 items-center justify-center pt-24 pb-12 sm:pt-32 sm:pb-20 z-10 w-full overflow-x-hidden">
        <div className="mx-auto grid w-full max-w-[1400px] items-center gap-12 sm:gap-16 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1.2fr] lg:gap-12 xl:gap-24">
          
          {/* --- LEFT COLUMN: BRAND & SYSTEM INFO --- */}
          <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left z-20">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl bg-white/60 dark:bg-black/50 border border-slate-200 dark:border-blue-500/30 shadow-[0_0_30px_rgba(245,158,11,0.1)] dark:shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-xl mb-6 sm:mb-8 group transition-colors duration-500">
              <div className="relative flex items-center justify-center p-1 sm:p-1.5">
                <div className="absolute inset-0 bg-amber-500 dark:bg-blue-500 rounded-full blur-[6px] sm:blur-[8px] animate-pulse transition-colors duration-500" />
                <Image src={mark} alt="" width={16} height={16} priority className="relative rounded-full z-10 ring-2 ring-white dark:ring-black sm:w-[18px] sm:h-[18px]" />
              </div>
              <p className="font-mono text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-amber-600 dark:text-blue-400 uppercase font-semibold transition-colors duration-500 whitespace-nowrap">
                Core Engine <span className="text-slate-300 dark:text-zinc-600 mx-1.5 sm:mx-2">|</span> <span className="text-slate-900 dark:text-white transition-colors duration-500">{name}</span>
              </p>
            </div>

            {/* Fancy Font applied here */}
            <h1 className="fancy-font w-full max-w-4xl text-[clamp(2.5rem,8vw,4.5rem)] lg:text-[clamp(3.5rem,4.5vw,6.5rem)] leading-[1.05] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-amber-700 to-amber-500 dark:from-white dark:via-blue-50 dark:to-blue-200 drop-shadow-sm dark:drop-shadow-xl transition-colors duration-500">
              {title}
            </h1>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4 border-l-2 border-amber-500/30 dark:border-blue-500/30 pl-4 sm:pl-6 relative transition-colors duration-500 text-left w-full">
              <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-amber-500 dark:bg-blue-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] dark:shadow-[0_0_10px_#3b82f6] transition-colors duration-500" />
              <div className="absolute -left-[5px] bottom-0 w-2 h-2 rounded-full bg-emerald-500 dark:bg-purple-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] dark:shadow-[0_0_10px_#a855f7] transition-colors duration-500" />
              
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-slate-600 dark:text-zinc-300 font-light transition-colors duration-500">
                {purpose}
              </p>
              <p className="text-[10px] sm:text-sm font-mono text-emerald-600 dark:text-blue-400/80 transition-colors duration-500">
                // SYSTEM_STATUS: ONLINE & VERIFIED
              </p>
            </div>

            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <Link
                href={firstUrl}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 sm:gap-4 rounded-full bg-gradient-to-b from-amber-500 to-amber-600 dark:from-blue-600 dark:to-blue-800 text-white px-8 py-4 sm:px-10 sm:py-5 text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-500 shadow-[0_0_30px_rgba(245,158,11,0.3)] dark:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] dark:hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] hover:-translate-y-1 overflow-hidden border border-white/20"
              >
                {/* Glowing sweep effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  INITIATE ACCESS
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </span>
                
                {/* Inner glass highlight */}
                <div className="absolute inset-0 rounded-full border-t border-white/40 pointer-events-none" />
              </Link>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CURVED SVG ARCHITECTURE ANIMATION --- */}
          <div className="relative w-full flex items-center justify-center h-[350px] sm:h-[450px] md:h-[600px] lg:h-[500px] xl:h-[650px] z-10 overflow-visible">
            
            <div className="absolute w-[650px] h-[650px] scale-[0.5] sm:scale-[0.7] md:scale-[0.9] lg:scale-[0.7] xl:scale-100 origin-center transition-transform duration-500 flex items-center justify-center pointer-events-none">
              {/* SVG Canvas for Curved Connectors */}
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 650 650">
                <defs>
                  <linearGradient id="grad-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.8"/>
                  </linearGradient>
                  <linearGradient id="grad-purple" x1="100%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8"/>
                  </linearGradient>
                  <linearGradient id="grad-orange" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.8"/>
                  </linearGradient>
                  <linearGradient id="grad-blue" x1="50%" y1="50%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2"/>
                  </linearGradient>
                  <linearGradient id="grad-light-amber" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8"/>
                  </linearGradient>
                  <linearGradient id="grad-light-blue" x1="50%" y1="50%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2"/>
                  </linearGradient>
                </defs>

                {/* LIGHT MODE PATHS (Shown when html does not have .dark) */}
                <g className="dark:hidden">
                  <path d="M 160 160 C 250 160, 200 325, 325 325" fill="none" stroke="url(#grad-emerald)" strokeWidth="3" className="svg-path" />
                  <path d="M 160 480 C 250 480, 250 325, 325 325" fill="none" stroke="url(#grad-light-amber)" strokeWidth="3" className="svg-path" style={{ animationDelay: '1s' }} />
                  <path d="M 500 200 C 400 200, 420 325, 325 325" fill="none" stroke="url(#grad-orange)" strokeWidth="3" className="svg-path" style={{ animationDelay: '0.5s' }} />
                  <path d="M 325 325 C 400 400, 380 500, 480 500" fill="none" stroke="url(#grad-light-blue)" strokeWidth="4" className="svg-path" style={{ animationDelay: '1.5s', animationDirection: 'reverse' }} />
                </g>

                {/* DARK MODE PATHS */}
                <g className="hidden dark:block">
                  <path d="M 160 160 C 250 160, 200 325, 325 325" fill="none" stroke="url(#grad-emerald)" strokeWidth="3" className="svg-path" />
                  <path d="M 160 480 C 250 480, 250 325, 325 325" fill="none" stroke="url(#grad-purple)" strokeWidth="3" className="svg-path" style={{ animationDelay: '1s' }} />
                  <path d="M 500 200 C 400 200, 420 325, 325 325" fill="none" stroke="url(#grad-orange)" strokeWidth="3" className="svg-path" style={{ animationDelay: '0.5s' }} />
                  <path d="M 325 325 C 400 400, 380 500, 480 500" fill="none" stroke="url(#grad-blue)" strokeWidth="4" className="svg-path" style={{ animationDelay: '1.5s', animationDirection: 'reverse' }} />
                </g>
                
                {/* Glowing animated dots along paths using circle + animateMotion */}
                <circle r="4" fill="#10b981" filter="drop-shadow(0 0 6px #10b981)">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 160 160 C 250 160, 200 325, 325 325" />
                </circle>
                {/* Light mode amber / Dark mode purple dot */}
                <circle r="4" className="fill-amber-500 dark:fill-purple-500 filter drop-shadow-[0_0_6px_#f59e0b] dark:drop-shadow-[0_0_6px_#a855f7]">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M 160 480 C 250 480, 250 325, 325 325" />
                </circle>
                <circle r="4" fill="#f97316" filter="drop-shadow(0 0 6px #f97316)">
                  <animateMotion dur="2.5s" repeatCount="indefinite" path="M 500 200 C 400 200, 420 325, 325 325" />
                </circle>
                {/* Light mode sky blue / Dark mode blue dot */}
                <circle r="5" className="fill-sky-500 dark:fill-blue-500 filter drop-shadow-[0_0_8px_#0ea5e9] dark:drop-shadow-[0_0_8px_#3b82f6]">
                  <animateMotion dur="2s" repeatCount="indefinite" path="M 325 325 C 400 400, 380 500, 480 500" />
                </circle>
              </svg>

              {/* The Central Brain (Database Stack) */}
              <div className="absolute z-30" style={{ left: '325px', top: '325px', transform: 'translate(-50%, -50%)' }}>
                <div className="absolute inset-0 rounded-full border border-amber-500/50 dark:border-blue-500/50" style={{ animation: 'pulse-ring 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
                <div className="relative w-36 h-36 rounded-full bg-white dark:bg-black border border-amber-400/50 dark:border-blue-500/50 shadow-[0_0_50px_rgba(245,158,11,0.3)] dark:shadow-[0_0_50px_rgba(59,130,246,0.5)] flex flex-col items-center justify-center transition-colors duration-500">
                  <div className="flex flex-col gap-1.5 mb-2">
                    <div className="w-14 h-4 rounded-[50%] border-2 border-amber-400 dark:border-blue-400 bg-gradient-to-b from-amber-100 to-white dark:from-blue-500/40 dark:to-black shadow-[0_0_15px_rgba(245,158,11,0.4)] dark:shadow-[0_0_15px_#3b82f6] transition-colors duration-500" />
                    <div className="w-14 h-4 rounded-[50%] border-2 border-emerald-400 dark:border-purple-400 bg-gradient-to-b from-emerald-100 to-white dark:from-purple-500/40 dark:to-black shadow-[0_0_15px_rgba(16,185,129,0.4)] dark:shadow-[0_0_15px_#a855f7] transition-colors duration-500" />
                    <div className="w-14 h-4 rounded-[50%] border-2 border-amber-400 dark:border-blue-400 bg-gradient-to-b from-amber-100 to-white dark:from-blue-500/40 dark:to-black shadow-[0_0_15px_rgba(245,158,11,0.4)] dark:shadow-[0_0_15px_#3b82f6] transition-colors duration-500" />
                  </div>
                  <span className="font-bold text-sm tracking-widest text-slate-800 dark:text-white mt-1 transition-colors duration-500">KSoR</span>
                  <span className="text-[9px] font-mono text-amber-600 dark:text-blue-400 text-center transition-colors duration-500">CORE DB</span>
                </div>
              </div>

              {/* Source Nodes */}
              <div className="absolute z-20 pointer-events-auto" style={{ left: '160px', top: '160px', transform: 'translate(-50%, -50%)' }}>
                <div className="w-32 p-3 rounded-xl bg-white dark:bg-black border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-3 shadow-sm dark:shadow-none transition-colors duration-500">
                  <div className="w-8 h-8 shrink-0 rounded-lg bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center border border-emerald-200 dark:border-emerald-500/50 text-emerald-600 dark:text-emerald-400 transition-colors duration-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div className="flex flex-col"><span className="text-xs font-bold text-slate-800 dark:text-white transition-colors duration-500">Policies</span><span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-mono transition-colors duration-500">Governed</span></div>
                </div>
              </div>

              <div className="absolute z-20 pointer-events-auto" style={{ left: '160px', top: '480px', transform: 'translate(-50%, -50%)' }}>
                <div className="w-36 p-3 rounded-xl bg-white dark:bg-black border border-amber-300 dark:border-purple-500/30 flex items-center gap-3 shadow-sm dark:shadow-none transition-colors duration-500">
                  <div className="w-8 h-8 shrink-0 rounded-lg bg-amber-100 dark:bg-purple-500/20 flex items-center justify-center border border-amber-200 dark:border-purple-500/50 text-amber-600 dark:text-purple-400 transition-colors duration-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>
                  <div className="flex flex-col"><span className="text-xs font-bold text-slate-800 dark:text-white transition-colors duration-500">API Specs</span><span className="text-[9px] text-amber-600 dark:text-purple-400 font-mono transition-colors duration-500">Live Sync</span></div>
                </div>
              </div>

              <div className="absolute z-20 pointer-events-auto" style={{ left: '500px', top: '200px', transform: 'translate(-50%, -50%)' }}>
                <div className="w-40 p-3 rounded-xl bg-white dark:bg-black border border-orange-300 dark:border-orange-500/30 flex items-center gap-3 shadow-sm dark:shadow-none transition-colors duration-500">
                  <div className="w-8 h-8 shrink-0 rounded-lg bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center border border-orange-200 dark:border-orange-500/50 text-orange-600 dark:text-orange-400 transition-colors duration-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                  </div>
                  <div className="flex flex-col"><span className="text-xs font-bold text-slate-800 dark:text-white transition-colors duration-500">Product Specs</span><span className="text-[9px] text-orange-600 dark:text-orange-400 font-mono transition-colors duration-500">{documents} Loaded</span></div>
                </div>
              </div>

              <div className="absolute z-20 pointer-events-auto" style={{ left: '480px', top: '500px', transform: 'translate(-50%, -50%)' }}>
                <div className="relative w-48 p-4 rounded-2xl bg-white dark:bg-black border border-sky-300 dark:border-blue-400/50 flex flex-col items-center gap-2 shadow-[0_0_30px_rgba(14,165,233,0.15)] dark:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-colors duration-500">
                  <div className="absolute -top-3 px-2 py-0.5 rounded text-[10px] font-bold bg-sky-500 dark:bg-blue-500 text-white tracking-widest uppercase shadow-[0_0_10px_rgba(14,165,233,0.5)] dark:shadow-[0_0_10px_#3b82f6] transition-colors duration-500">Live Output</div>
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-sky-100 dark:bg-blue-500/20 flex items-center justify-center border-2 border-sky-300 dark:border-blue-400 text-sky-600 dark:text-blue-400 transition-colors duration-500">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div className="flex flex-col"><span className="text-sm font-bold text-slate-800 dark:text-white transition-colors duration-500">AI Agents</span><span className="text-[10px] text-sky-600 dark:text-blue-300 font-mono transition-colors duration-500">Consuming Stream</span></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {foot === undefined ? null : (
        <div className="relative mt-auto border-t border-slate-200 dark:border-blue-900/30 bg-slate-50 dark:bg-[#030303] z-20 transition-colors duration-500">
          {/* Top glowing line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 dark:via-blue-500/50 to-transparent" />
          
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 py-4 sm:py-6 flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 text-center lg:text-left">
            
            <div className="flex items-center gap-3 sm:gap-4 opacity-80 hover:opacity-100 transition-opacity">
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 shadow-inner">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] sm:text-xs font-bold text-slate-800 dark:text-white tracking-widest uppercase">System Status</span>
                <span className="text-[9px] sm:text-[10px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                  RAG PIPELINE ACTIVE
                </span>
              </div>
            </div>

            <div className="text-xs sm:text-sm font-mono text-slate-500 dark:text-zinc-400 opacity-80 hover:opacity-100 transition-opacity break-all px-2 lg:max-w-[40%]">
              {foot}
            </div>
            
            <div className="flex items-center justify-center gap-3 sm:gap-4 opacity-80 hover:opacity-100 transition-opacity mt-2 lg:mt-0">
              <div className="hidden lg:block h-px w-16 bg-slate-300 dark:bg-zinc-700" />
              <span className="text-[9px] sm:text-[10px] tracking-widest text-slate-400 dark:text-zinc-500 uppercase font-bold flex items-center gap-1.5 sm:gap-2">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                V 2.0.4 — Secure
              </span>
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
}
