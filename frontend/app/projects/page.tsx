export default function ProjectsPage() {
  const projects = [
    {
      title: "Todo App Demo",
      desc: "A simple full-stack example using Next.js + .NET API.",
      link: "/demos/todo",
    },
    {
      title: "Portfolio Website",
      desc: "This site! Built with Next.js 14, Tailwind, and clean UI patterns.",
      link: "/",
    },
    {
      title: "Future Project",
      desc: "More work coming soon — stay tuned 👀",
      link: "#",
    },
  ];

  return (
    <main className="space-y-10">
      <header>
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-zinc-400 mt-2">
          A growing collection of the things I build, learn, and experiment with.
        </p>
      </header>

      <section className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            className="group rounded-xl border border-zinc-800 p-6 hover:bg-zinc-900 transition-colors"
          >
            <h2 className="text-xl font-semibold group-hover:text-white">
              {project.title}
            </h2>
            <p className="text-zinc-400 mt-2 text-sm">{project.desc}</p>
          </a>
        ))}
      </section>
    </main>
  );
}