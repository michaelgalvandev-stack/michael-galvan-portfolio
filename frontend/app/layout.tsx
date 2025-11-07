// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mikey Galvan — Portfolio',
  description: 'Frontend developer specializing in .NET, React/Next.js, Bootstrap, and Node.js.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-zinc-50 text-zinc-900 antialiased dark:bg-black dark:text-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="mb-10 flex items-center justify-between">
      <a href="/" className="text-lg font-semibold tracking-tight">Mikey Galvan</a>
      <nav className="flex gap-6 text-sm">
        <a className="hover:underline" href="/projects">Projects</a>
        <a className="hover:underline" href="/about">About</a>
        <a className="hover:underline" href="/contact">Contact</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800">
      <p>© {new Date().getFullYear()} Mikey Galvan. Built with Next.js & Tailwind.</p>
    </footer>
  );
}
