'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";

const STACK = [
  { name: '.NET/C#', icon: '⚙️' },
  { name: 'Next.js', icon: '⏭️' },
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '🟦' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Bootstrap', icon: '🅱️' },
  { name: 'Tailwind', icon: '🌬️' },
];

export default function Page() {
  return (
    <div className="space-y-20">
      <Intro />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <TodoSection />
      <BackToTop />
    </div>
  );
}

function Intro() {
  return (
    <section id="intro" className="flex flex-col items-center text-center gap-6">
      {/* placeholder photo */}
      <Image
        src="/profile_pic.jpg"
        alt="Mikey Galvan"
        width={160}
        height={160}
        className="rounded-2xl border border-zinc-800 object-cover"
      />
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Michael Galvan</h1>
        <p className="text-lg text-zinc-300">Software Engineer</p>
        <p className="text-zinc-400 max-w-2xl md:text-4xl">
          I build clean, fast UIs with Next.js, TypeScript, Tailwind/Bootstrap, and .NET backends.
          This page will grow with live demos that talk to my C# API.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {STACK.map(s => (
            <span key={s.name} className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
              <span>{s.icon}</span> {s.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-semibold tracking-tight scroll-mt-24">{children}</h2>
  );
}

function Card({ title, subtitle, children }: { title: string; subtitle?: string; children?: React.ReactNode }) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle && <p className="text-sm text-zinc-400 mt-1">{subtitle}</p>}
      {children && <div className="mt-3 text-zinc-300">{children}</div>}
    </article>
  );
}

function Skills() {
  const groups = [
    { title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Bootstrap','Responsive UI & Component Architecture'] },
    { title: 'Backend', items: ['.NET / ASP.NET Core','C#','Entity Framework', 'Node.js', 'REST API', 'SQL'] },
    { title: 'Tools & Dev Workflow', items: ['Git','GitHub & GitLab CI/CD', 'Rider','VS Code', 'Azure','Agile','Debugging'] },
  ];
  return (
    <section aria-labelledby="skills">
      <SectionTitle id="skills">Skills</SectionTitle>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {groups.map(g => (
          <Card key={g.title} title={g.title}>
            <ul className="text-sm space-y-1">
              {g.items.map(i => (<li key={i}>• {i}</li>))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const data = [
    { title: 'Full Stack App', subtitle: 'Next.js + .NET API', desc: 'Simple full-stack example with CRUD endpoints.' },
    { title: 'The Compliance Engine', subtitle: 'Blazor + Syncfusion', desc: 'Data grids, sorting/virtualization, adapters.' },
  ];
  return (
    <section aria-labelledby="projects">
      <SectionTitle id="projects">Projects</SectionTitle>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {data.map(p => (
          <Card key={p.title} title={p.title} subtitle={p.subtitle}>{p.desc}</Card>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const jobs = [
    { company: 'Brycer', role: 'Software Engineer', period: 'July 2022 – Aug 2025', bullets: [
      'Built rich data grids/charts with Syncfusion & Blazor.',
      'Improved sorting/paging UX and adapter performance.',
    ]},
  ];
  return (
    <section aria-labelledby="experience">
      <SectionTitle id="experience">Experience</SectionTitle>
      <div className="mt-6 space-y-4">
        {jobs.map(j => (
          <Card key={j.company} title={`${j.role} · ${j.company}`} subtitle={j.period}>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {j.bullets.map(b => (<li key={b}>{b}</li>))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const schools = [
    { name: 'Loyola University Chicago', degree: 'B.S. in Computer Science', period: 'August 2018 – July 2022' },
  ];
  return (
    <section aria-labelledby="education">
      <SectionTitle id="education">Education</SectionTitle>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {schools.map(s => (
          <Card key={s.name} title={s.name} subtitle={`${s.degree} · ${s.period}`} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section aria-labelledby="contact">
      <SectionTitle id="contact">Contact</SectionTitle>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Card title="Email">
          <a className="underline" href="mailto:you@example.com">michaelgalvan.dev@gmail.com</a>
        </Card>
        <Card title="GitHub">
          <a className="underline" href="https://github.com/michaelgalvandev-stack" target="_blank">github.com/michaelgalvandev-stack</a>
        </Card>
        <Card title="Linkedin">
          <a className="underline" href="https://www.linkedin.com/in/mgalvan-dev/" target="_blank">https://www.linkedin.com/in/mgalvan-dev/</a>
        </Card>
      </div>
    </section>
  );
}

/* ===== Todo demo section (calls your .NET API) ===== */

function TodoSection() {
  return (
    <section aria-labelledby="todo" className="pb-10">
      <SectionTitle id="todo">Goals / Objectives</SectionTitle>
      <div className="mt-6">
        <Todo />
      </div>
    </section>
  );
}

function Todo() {
  const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5052';
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const load = async () => {
    try {
      setErr(null);
      setLoading(true);
      const r = await fetch(`${API}/api/todo`);
      if (!r.ok) throw new Error(`GET ${r.status}`);
      setTodos(await r.json());
    } catch (e: any) { setErr(e?.message ?? 'Failed'); }
    finally { setLoading(false); }
  };

  const add = async () => {
    const v = newTodo.trim();
    if (!v) return;
    try {
      const r = await fetch(`${API}/api/todo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(v),
      });
      if (!r.ok) throw new Error(`POST ${r.status}`);
      setTodos(prev => [...prev, v]);
      setNewTodo('');
    } catch (e: any) { setErr(e?.message ?? 'Failed'); }
  };

  const del = async (i: number) => {
    try {
      const r = await fetch(`${API}/api/todo/${i}`, { method: 'DELETE' });
      if (!r.ok) throw new Error(`DELETE ${r.status}`);
      setTodos(prev => prev.filter((_, idx) => idx !== i));
    } catch (e: any) { setErr(e?.message ?? 'Failed'); }
  };

  useEffect(() => { load(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, []);

  return (
    <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950">
      <div className="flex flex-wrap items-center gap-3">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New objective…"
          className="min-w-[220px] flex-1 rounded-xl border border-zinc-700 bg-black px-3 py-2 text-sm"
        />
        <button onClick={add} className="rounded-xl bg-white text-black px-4 py-2 text-sm hover:opacity-90">
          Add
        </button>
        <button onClick={load} className="rounded-xl border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-900">
          Refresh
        </button>
      </div>

      {loading && <p className="mt-4 text-zinc-400 text-sm">Loading…</p>}
      {err && !loading && <p className="mt-4 text-red-400 text-sm">Error: {err}</p>}

      <ul className="mt-4 space-y-2">
        {todos.map((t, i) => (
          <li key={`${t}-${i}`} className="flex items-center justify-between rounded-lg border border-zinc-800 px-3 py-2">
            <span className="text-sm">{t}</span>
            <button onClick={() => del(i)} className="text-xs text-zinc-400 hover:text-white">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BackToTop() {
  return (
    <div className="pt-6 text-right">
      <a href="#intro" className="text-sm text-zinc-400 hover:text-white underline underline-offset-4">
        Back to top ↑
      </a>
    </div>
  );
}