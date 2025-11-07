// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  title: "Michael Galvan — Portfolio",
  description: "Dev portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-black text-zinc-50 antialiased">
        {/* Sticky header */}
          <BackgroundGlow />  {/* 👈 add this */}
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/70 backdrop-blur">
          <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
            <a href="#intro" className="font-semibold tracking-tight">Michael Galvan</a>
            <nav className="hidden sm:flex items-center gap-5 text-sm text-zinc-300">
              <a href="#skills" className="hover:text-white">Skills</a>
              <a href="#projects" className="hover:text-white">Projects</a>
              <a href="#experience" className="hover:text-white">Experience</a>
              <a href="#education" className="hover:text-white">Education</a>
              <a href="#contact" className="hover:text-white">Contact</a>
              <a href="#todo" className="hover:text-white">Todo</a>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-6 py-10 scroll-smooth">{children}</main>

        <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-zinc-400">
          © {new Date().getFullYear()} Michael Galvan. Built with Next.js + Tailwind + .NET.
        </footer>
      </body>
    </html>
  );
}


function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* blue glow */}
      <div className="absolute left-1/2 top-[-10%] h-[65vh] w-[65vh] -translate-x-1/2 rounded-full 
                      bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.45),transparent_60%)]
                      blur-3xl animate-[float_22s_ease-in-out_infinite]" />
      {/* violet glow */}
      <div className="absolute right-[10%] top-[25%] h-[55vh] w-[55vh] rounded-full
                      bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_60%)]
                      blur-3xl animate-[float_26s_ease-in-out_infinite] [animation-delay:4s]" />
      {/* teal glow */}
      <div className="absolute left-[8%] bottom-[-10%] h-[60vh] w-[60vh] rounded-full
                      bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.14),transparent_60%)]
                      blur-3xl animate-[float_28s_ease-in-out_infinite] [animation-delay:8s]" />

      {/* soft vignette so content stays legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
    </div>
  );
}