import { groupedSkills } from '../data/portfolioData'

export function SkillsSection() {
  const tonePalette = [
    'bg-sky-300',
    'bg-slate-800 text-white',
    'bg-blue-400 text-white',
    'bg-emerald-600 text-white',
    'bg-slate-800 text-emerald-300',
    'bg-emerald-500 text-white',
    'bg-slate-600 text-black',
    'bg-green-200',
    'bg-sky-200',
    'bg-blue-400',
    'bg-yellow-300',
    'bg-violet-300',
    'bg-red-800 text-white',
    'bg-orange-400',
    'bg-orange-500 text-white',
    'bg-sky-400 text-white',
    'bg-indigo-500 text-white',
    'bg-teal-600 text-white',
  ]

  return (
    <section id="skills" className="scroll-mt-32 space-y-8 pb-10">
      <h2 className="text-center text-6xl font-extrabold text-sky-500 md:text-7xl">Skills</h2>
      <div className="mx-auto h-2 w-28 bg-emerald-400" />

      <div className="space-y-8 border-[4px] border-black bg-zinc-100 p-5 shadow-[6px_6px_0_0_#000] md:p-8">
        {Object.entries(groupedSkills).map(([groupName, items], groupIndex) => (
          <article
            key={groupName}
            className="space-y-5 pb-8 border-b-[3px] border-black last:border-b-0 last:pb-0"
          >
            <h3 className="text-3xl font-extrabold md:text-4xl">{groupName}</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
              {items.map((skill, itemIndex) => {
                const tone = tonePalette[(groupIndex * 7 + itemIndex) % tonePalette.length]
                return (
                  <article
                    key={`${groupName}-${skill}`}
                    className={`flex min-h-24 items-center justify-center border-[4px] border-black px-2 py-3 text-center text-sm font-black leading-tight shadow-[5px_5px_0_0_#000] md:text-base ${tone}`}
                  >
                    {skill}
                  </article>
                )
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
