function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-14 md:px-10">
        <header className="space-y-6">
          <p className="inline-flex rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1 text-sm font-medium text-sky-300">
            Personal Portfolio
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Halo, saya developer yang fokus bikin produk digital yang cepat dan
            enak dipakai.
          </h1>
          <p className="max-w-2xl text-base text-slate-300 md:text-lg">
            Ini starter portofolio kamu dengan Vite, React 19, TypeScript,
            Tailwind, dan Bun. Tinggal isi data project, pengalaman, serta
            kontakmu.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-lg bg-sky-500 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-sky-400"
              href="#projects"
            >
              Lihat Project
            </a>
            <a
              className="rounded-lg border border-slate-700 px-5 py-2.5 font-semibold transition hover:border-slate-500"
              href="#contact"
            >
              Kontak
            </a>
          </div>
        </header>

        <section id="projects" className="space-y-4">
          <h2 className="text-2xl font-semibold md:text-3xl">Project Unggulan</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <p className="text-sm text-sky-300">Web App</p>
              <h3 className="mt-1 text-xl font-semibold">Nama Project 1</h3>
              <p className="mt-2 text-slate-300">
                Ringkasan singkat problem yang kamu selesaikan dan impact
                project.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <p className="text-sm text-sky-300">Mobile App</p>
              <h3 className="mt-1 text-xl font-semibold">Nama Project 2</h3>
              <p className="mt-2 text-slate-300">
                Jelaskan stack, peran kamu, dan hasil akhir untuk user/client.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">Kontak</h2>
          <p className="mt-2 text-slate-300">
            Email: yourname@email.com | LinkedIn: linkedin.com/in/yourname
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
