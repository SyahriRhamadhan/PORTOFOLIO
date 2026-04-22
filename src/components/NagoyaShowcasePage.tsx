import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import {
  aiScope,
  aiScopeId,
  erpScope,
  erpScopeId,
  relevantProjects,
  textCopy,
  type NagoyaLanguage,
} from "../data/nagoyaShowcaseData";

const buttonMotion = {
  whileHover: { y: -2, x: -1, scale: 1.01 },
  whileTap: { y: 0, x: 0, scale: 0.98 },
  transition: { type: "spring", stiffness: 320, damping: 20 },
} as const;

export function NagoyaShowcasePage() {
  const [language, setLanguage] = useState<NagoyaLanguage>("en");
  const [featureModal, setFeatureModal] = useState<{
    name: string;
    imageUrl: string;
    features: string[];
    roleCount: number;
    roles: string[];
  } | null>(null);

  useEffect(() => {
    if (!featureModal) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFeatureModal(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [featureModal]);

  const content = textCopy[language];
  const activeErpScope = language === "id" ? erpScopeId : erpScope;
  const activeAiScope = language === "id" ? aiScopeId : aiScope;

  return (
    <div className="min-h-screen bg-zinc-100 px-5 py-10 text-zinc-900 md:px-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <header
          id="nagoya-hill"
          className="scroll-mt-32 space-y-4 border-4 border-black bg-white p-6 shadow-[6px_6px_0_0_#000]"
        >
          <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-black uppercase tracking-wide text-zinc-600">
              {content.langLabel}
            </p>
            <div className="flex gap-2">
              <motion.button
                type="button"
                onClick={() => setLanguage("en")}
                {...buttonMotion}
                className={`border-2 border-black px-3 py-1 text-xs font-black uppercase ${language === "en" ? "bg-sky-300" : "bg-zinc-100"}`}
              >
                EN
              </motion.button>
              <motion.button
                type="button"
                onClick={() => setLanguage("id")}
                {...buttonMotion}
                className={`border-2 border-black px-3 py-1 text-xs font-black uppercase ${language === "id" ? "bg-emerald-300" : "bg-zinc-100"}`}
              >
                ID
              </motion.button>
            </div>
          </div>
          <p className="inline-block border-2 border-black bg-emerald-300 px-3 py-1 text-xs font-extrabold uppercase tracking-wide">
            {content.highlight}
          </p>
          <h1 className="text-3xl font-black leading-tight md:text-4xl">
            {content.title}
          </h1>
          <p className="text-base leading-relaxed text-zinc-700 md:text-lg">
            {content.summary}
          </p>
          <p className="text-sm font-semibold text-zinc-600">{content.share}</p>
        </header>

        <section id="nagoya-erp-scope" className="scroll-mt-32 space-y-4">
          <h2 className="text-2xl font-black md:text-3xl">
            {content.erpTitle}
          </h2>
          <p className="border-l-4 border-black bg-zinc-100 p-3 text-sm font-semibold leading-relaxed text-zinc-700 md:text-base">
            {content.erpDisclaimer}
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {activeErpScope.map((item) => (
              <div
                key={item.title}
                className="space-y-2 border-4 border-black bg-yellow-200 p-4 text-sm font-semibold md:text-base"
              >
                <p>{item.title}</p>
                <p className="border-l-4 border-black bg-white/70 p-2 text-xs leading-relaxed text-zinc-700 md:text-sm">
                  {item.assumption}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="nagoya-ai-scope" className="scroll-mt-32 space-y-4">
          <h2 className="text-2xl font-black md:text-3xl">{content.aiTitle}</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {activeAiScope.map((item) => (
              <div
                key={item}
                className="border-4 border-black bg-sky-200 p-4 text-sm font-semibold md:text-base"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section
          id="nagoya-project-evidence"
          className="scroll-mt-32 space-y-6"
        >
          <h2 className="text-2xl font-black md:text-3xl">
            {content.projectTitle}
          </h2>
          <div className="grid gap-6">
            {relevantProjects.map((project) => {
              const domain =
                language === "id" && project.domainId
                  ? project.domainId
                  : project.domain;
              const modules =
                language === "id" && project.modulesId
                  ? project.modulesId
                  : project.modules;
              const features =
                language === "id" && project.mainFeaturesId
                  ? project.mainFeaturesId
                  : project.mainFeatures;
              const relevance =
                language === "id" && project.relevanceId
                  ? project.relevanceId
                  : project.relevance;

              return (
                <article
                  key={project.name}
                  className="border-4 border-black bg-white p-5 shadow-[5px_5px_0_0_#000] md:p-6"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-black">{project.name}</h3>
                    <span className="border-2 border-black bg-zinc-900 px-3 py-1 text-xs font-bold uppercase tracking-wide text-zinc-100">
                      {domain}
                    </span>
                  </div>
                  <p className="mb-3 text-sm font-semibold text-zinc-600 md:text-base">
                    {project.stack}
                  </p>
                  <p className="mb-3 inline-block border-2 border-black bg-fuchsia-200 px-3 py-1 text-xs font-black uppercase tracking-wide">
                    {content.totalRoles}: {project.roleCount}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {modules.map((module) => (
                      <span
                        key={module}
                        className="border-2 border-black bg-zinc-100 px-3 py-1 text-xs font-bold md:text-sm"
                      >
                        {module}
                      </span>
                    ))}
                  </div>
                  <div className="mb-4">
                    <motion.button
                      type="button"
                      onClick={() =>
                        setFeatureModal({
                          name: project.name,
                          imageUrl: project.previewImage,
                          features: [...features],
                          roleCount: project.roleCount,
                          roles: [...project.roles],
                        })
                      }
                      {...buttonMotion}
                      className="border-[3px] border-black bg-sky-300 px-4 py-2 text-sm font-black shadow-[3px_3px_0_0_#000] md:text-base"
                    >
                      {content.mainFeatures}
                    </motion.button>
                  </div>
                  <p className="border-l-4 border-black bg-emerald-100 p-3 text-sm font-semibold leading-relaxed md:text-base">
                    <span className="font-black">{content.relevance}:</span>{" "}
                    {relevance}
                  </p>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      {featureModal ? (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 p-2 md:p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${featureModal.name} main features`}
          onClick={() => setFeatureModal(null)}
        >
          <div
            className="relative mx-auto my-2 w-full max-w-[calc(100vw-0.75rem)] border-[4px] border-black bg-zinc-100 p-3 shadow-[6px_6px_0_0_#000] md:my-4 md:max-w-5xl md:p-4 md:shadow-[8px_8px_0_0_#000]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-lg font-black leading-tight md:text-2xl">
                {featureModal.name} - {content.modalTitle}
              </h3>
              <motion.button
                type="button"
                onClick={() => setFeatureModal(null)}
                {...buttonMotion}
                className="flex h-10 w-10 items-center justify-center border-[3px] border-black bg-zinc-900 text-white shadow-[2px_2px_0_0_#000] md:h-11 md:w-11 md:shadow-[3px_3px_0_0_#000]"
                aria-label={content.closeModal}
              >
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </motion.button>
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_1.1fr]">
              <div className="flex max-h-[54vh] items-center justify-center overflow-auto border-[3px] border-black bg-white p-2">
                <img
                  src={featureModal.imageUrl}
                  alt={featureModal.name}
                  width={1600}
                  height={900}
                  decoding="async"
                  className="max-h-[48vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="border-[3px] border-black bg-zinc-50 p-3">
                <p className="mb-3 text-sm font-black uppercase tracking-wide text-zinc-700">
                  {content.featureHighlights}
                </p>
                <ul className="space-y-2">
                  {featureModal.features.map((feature) => (
                    <li
                      key={feature}
                      className="border-2 border-black bg-white p-2 text-sm font-semibold leading-relaxed md:text-base"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <p className="mb-2 text-sm font-black uppercase tracking-wide text-zinc-700">
                    {content.roles} ({featureModal.roleCount})
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featureModal.roles.map((role) => (
                      <span
                        key={role}
                        className="border-2 border-black bg-yellow-200 px-3 py-1 text-xs font-bold md:text-sm"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
