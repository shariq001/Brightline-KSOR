import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

import { SignIn } from "@/components/sign-in";

/**
 * Shared layout configurations: navbar, footer, github link
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      transparentMode: "top",
      title: (
        <div className="max-w-[60vw] truncate text-xl font-bold tracking-widest sm:max-w-none text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-500 dark:drop-shadow-md transition-colors duration-500 flex items-center">
          {/* Desktop Title */}
          <span className="hidden sm:inline fancy-font">Brightline KSOR</span>
          {/* Mobile Title */}
          <span className="inline sm:hidden font-serif italic text-2xl tracking-[0.3em] font-black drop-shadow-lg">KSOR</span>
        </div>
      ),
    },
    // `secondary` puts it at the navbar's trailing edge, beside the theme
    // toggle. SignIn renders null when no issuer is configured, so a record
    // that does not offer sign-in shows nothing rather than an empty slot.
    links: [{ type: "custom", secondary: true, children: <SignIn /> }],
  };
}
