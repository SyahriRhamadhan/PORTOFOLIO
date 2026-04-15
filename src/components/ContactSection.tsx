import { Lightbulb, Mail, MapPin, Send } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa6'
import { personalInfo } from '../data/portfolioData'

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-32 space-y-10 pb-14">
      <div className="text-center">
        <h2 className="text-6xl font-extrabold md:text-7xl">
          Let&apos;s <span className="text-fuchsia-500">Build</span>{' '}
          <span className="text-sky-500">Something</span>{' '}
          <span className="text-emerald-500">Amazing</span>
        </h2>
        <p className="mx-auto mt-3 max-w-4xl text-2xl leading-relaxed text-slate-600">
          Have a project in mind? Want to collaborate? Drop me a message and let&apos;s create
          something impactful together.
        </p>
        <div className="mx-auto mt-4 h-2 w-28 bg-emerald-400" />
      </div>

      <div className="grid gap-8 xl:grid-cols-[1fr_1fr]">
        <div className="space-y-6">
          <h3 className="text-5xl font-black">Get In Touch</h3>
          <p className="max-w-3xl text-2xl leading-relaxed text-slate-600">
            I&apos;m always excited to work on new products and collaborate with amazing people.
            Let&apos;s start a conversation.
          </p>

          <div className="space-y-4">
            <article className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center border-[3px] border-black bg-fuchsia-400 shadow-[3px_3px_0_0_#000]">
                <Mail className="h-7 w-7" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-500">Email</p>
                <p className="text-3xl font-black">{personalInfo.email}</p>
              </div>
            </article>

            <article className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center border-[3px] border-black bg-sky-400 shadow-[3px_3px_0_0_#000]">
                <MapPin className="h-7 w-7" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-500">Location</p>
                <p className="text-3xl font-black">{personalInfo.location}</p>
              </div>
            </article>

            <article className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center border-[3px] border-black bg-emerald-400 shadow-[3px_3px_0_0_#000]">
                <FaLinkedinIn className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-500">LinkedIn</p>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl font-black underline"
                >
                  Connect with me
                </a>
              </div>
            </article>
          </div>

          <div className="border-[4px] border-black bg-fuchsia-400 p-5 shadow-[4px_4px_0_0_#000]">
            <p className="inline-flex items-center gap-2 text-4xl font-black">
              <Lightbulb className="h-8 w-8 text-yellow-300" />
              Quick Response!
            </p>
            <p className="mt-2 text-xl font-semibold">I typically respond within 24 hours.</p>
          </div>
        </div>

        <div className="border-[4px] border-black bg-zinc-100 p-6 shadow-[6px_6px_0_0_#000] md:p-8">
          <h3 className="text-5xl font-black">Send a Message</h3>
          <form className="mt-6 space-y-5">
            <label className="block">
              <span className="mb-2 block text-lg font-bold">Your Name *</span>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border-2 border-black bg-zinc-100 px-4 py-3 text-xl outline-none focus:ring-4 focus:ring-sky-300"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-lg font-bold">Your Email *</span>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border-2 border-black bg-zinc-100 px-4 py-3 text-xl outline-none focus:ring-4 focus:ring-sky-300"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-lg font-bold">Your Message *</span>
              <textarea
                placeholder="Tell me about your project or just say hello!"
                rows={6}
                className="w-full resize-y border-2 border-black bg-zinc-100 px-4 py-3 text-xl outline-none focus:ring-4 focus:ring-sky-300"
              />
            </label>
            <div className="group relative">
              <button
                type="button"
                disabled
                className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 border-[3px] border-black bg-sky-500 px-5 py-3 text-2xl font-black text-white opacity-90 shadow-[4px_4px_0_0_#000]"
              >
                <Send className="h-6 w-6" />
                Send Message
              </button>
              <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap border-2 border-black bg-zinc-900 px-2 py-1 text-sm font-bold text-zinc-100 opacity-0 shadow-[3px_3px_0_0_#000] transition group-hover:opacity-100">
                On Progress
              </span>
            </div>
          </form>
        </div>
      </div>

    </section>
  )
}
