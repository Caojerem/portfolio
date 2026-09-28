import MobileCoverArtwork from "../components/MobileCoverArtwork";
import { AnimatePresence, motion } from "framer-motion";
import renaultCover from "../assets/renault/cover.jpg";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import ProjectDropdown from "../components/ProjectDropdown";
import { useLocation, useNavigate } from "react-router-dom";


function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700 bg-white">
      {children}
    </span>
  );
}

function SectionTitle({
  kicker,
  title,
  desc,
}: {
  kicker?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-3xl">
      {kicker && (
        <p className="text-xs font-semibold tracking-wide text-gray-500">
          {kicker}
        </p>
      )}

      <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h2>

      {desc && (
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          {desc}
        </p>
      )}
    </div>
  );
}

export default function RenaultCaseStudy() {
  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleBack = () => {
    const y = location.state?.fromScrollY;
    const section = location.state?.fromSection;

    navigate(`/${lang}`, {
      state: {
        restoreScrollY: y,
        scrollTo: section,
      },
    });
  };


  const [mobileStep, setMobileStep] = useState(0);

  const mobileSteps = [
    {
      label: t.renaultPage.hero.title,
      content: (
        <div className="relative min-h-[calc(100svh-10.5rem)] overflow-hidden rounded-[28px] bg-gray-900">
          <MobileCoverArtwork src={renaultCover} variant="renault" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <p className="text-xs font-semibold tracking-[0.14em] text-white/75">{t.renaultPage.hero.kicker}</p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.05] tracking-tight">{t.renaultPage.hero.title}</h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85">{t.renaultPage.hero.desc}</p>
          </div>
        </div>
      ),
    },
    {
      label: "Contexte",
      content: (
        <div>
          <p className="text-xs font-semibold tracking-wide text-gray-500">CONTEXTE</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">{t.renaultPage.hero.title}</h2>
          <p className="mt-4 leading-relaxed text-gray-600">{t.renaultPage.intro}</p>
          <div className="mt-6 space-y-3">{t.renaultPage.contextCards.map((card) => (
            <div key={card.label} className="rounded-2xl border bg-gray-50 p-5">
              <p className="text-xs text-gray-500">{card.label}</p><p className="mt-1 font-medium">{card.value}</p>
            </div>
          ))}</div>
        </div>
      ),
    },
    {
      label: t.renaultPage.responsibilitiesTitle,
      content: (
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">{t.renaultPage.responsibilitiesTitle}</h2>
          <div className="mt-6 space-y-3">{t.renaultPage.responsibilities.map((item: string) => (
            <div key={item} className="rounded-2xl border p-5 text-gray-700">{item}</div>
          ))}</div>
        </div>
      ),
    },
    {
      label: t.renaultPage.approachTitle,
      content: (
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">{t.renaultPage.approachTitle}</h2>
          <div className="mt-6 space-y-3">{t.renaultPage.approachCards.map((step, index: number) => (
            <div key={step.title} className="rounded-2xl border bg-gray-50 p-5">
              <p className="text-xs font-semibold text-gray-500">0{index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.desc}</p>
            </div>
          ))}</div>
        </div>
      ),
    },
    {
      label: t.renaultPage.confidential.title,
      content: (
        <div>
          <p className="text-xs font-semibold tracking-wide text-gray-500">{t.renaultPage.confidential.kicker}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">{t.renaultPage.confidential.title}</h2>
          <p className="mt-4 leading-relaxed text-gray-600">{t.renaultPage.confidential.desc}</p>
          <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              {lang === "fr"
                ? "Pour des raisons de confidentialité, je ne peux pas présenter ce projet publiquement. Je peux cependant le présenter plus en détail lors d’un entretien si vous êtes intéressé."
                : "For confidentiality reasons, I cannot present this project publicly. I can, however, present it in more detail during an interview if you are interested."}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">{t.renaultPage.skills.map((skill: string) => <Pill key={skill}>{skill}</Pill>)}</div>
        </div>
      ),
    },
  ];

  const goMobileStep = (index: number) => {
    setMobileStep(Math.max(0, Math.min(index, mobileSteps.length - 1)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goMobilePrevious = () => {
    if (mobileStep === 0) {
      handleBack();
      return;
    }
    goMobileStep(mobileStep - 1);
  };
  return (
<>

      <div className="lg:hidden min-h-screen bg-white text-gray-900 pb-20">
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex min-h-14 items-center justify-between px-4">
            <button
              onClick={handleBack}
              className="inline-flex min-h-11 items-center gap-1 rounded-xl px-2 text-sm text-gray-600 transition active:bg-gray-100"
            >
              ← <span>{t.common.back}</span>
            </button>
            <span className="text-xs font-medium tracking-wide text-gray-500">
              {mobileStep + 1} / {mobileSteps.length}
            </span>
          </div>

          <div className="flex gap-1.5 px-4 pb-3">
            {mobileSteps.map((step, index) => (
              <button
                key={step.label}
                onClick={() => goMobileStep(index)}
                aria-label={step.label}
                className={`h-1 flex-1 rounded-full transition ${
                  index <= mobileStep ? "bg-gray-900" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </header>

        <main className="px-5 py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileStep}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.22 }}
              className="mx-auto max-w-xl"
            >
              {mobileSteps[mobileStep].content}
            </motion.div>
          </AnimatePresence>
        </main>

        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-gray-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3 [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))]">
            <button
              onClick={goMobilePrevious}
              className="inline-flex min-h-10 min-w-10 items-center justify-start text-xl font-light text-gray-700 transition active:opacity-50"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => {
                if (mobileStep < mobileSteps.length - 1) {
                  goMobileStep(mobileStep + 1);
                } else {
                  navigate(`/${lang}/carbon-calculator`);
                }
              }}
              className="inline-flex min-h-10 min-w-10 items-center justify-end text-xl font-light text-gray-700 transition active:opacity-50"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
    <div className="bg-white text-gray-900">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="text-sm text-gray-500 hover:text-black"
          >
            ← {t.common.back}
          </button>

          <ProjectDropdown />
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7"
          >
            <p className="text-sm font-medium text-gray-500">
              {t.renaultPage.hero.kicker}
            </p>

            <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight">
              {t.renaultPage.hero.title}
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl">
              {t.renaultPage.hero.desc}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {t.renaultPage.heroSkills.map((skill: string) => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border shadow-sm bg-gray-50">
              <img
                src={renaultCover}
                alt="Renault"
                className="w-full h-[340px] object-contain p-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="rounded-[32px] border bg-gray-50 p-8 md:p-10">
          <SectionTitle
            kicker="CONTEXTE"
            title={t.renaultPage.hero.title}
            desc={t.renaultPage.intro}
          />
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {t.renaultPage.contextCards.map((card) => (
              <div
                key={card.label}
                className="rounded-2xl border bg-white p-5"
              >
                <p className="text-xs text-gray-500">
                  {card.label}
                </p>

                <p className="mt-1 font-medium">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionTitle
          title={t.renaultPage.responsibilitiesTitle}
        />

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {t.renaultPage.responsibilities.map((item: string) => (
            <motion.div
              key={item}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl border bg-white p-6 shadow-sm"
            >
              <p className="text-gray-700 leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-gray-50 border-y">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <SectionTitle
            title={t.renaultPage.approachTitle}
          />

          <div className="mt-14 grid md:grid-cols-4 gap-6">
            {t.renaultPage.approachCards.map((step, index: number) => (
              <div
                key={step.title}
                className="rounded-3xl border bg-white p-6"
              >
                <p className="text-xs font-semibold text-gray-500">
                  0{index + 1}
                </p>

                <h3 className="mt-3 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIDENTIAL */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-3xl border bg-gray-50 p-8 md:p-12">
          <p className="text-sm font-medium tracking-wide text-gray-500">
            {t.renaultPage.confidential.kicker}
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            {t.renaultPage.confidential.title}
          </h2>

          <p className="mt-6 max-w-3xl text-gray-600 leading-relaxed">
            {t.renaultPage.confidential.desc}
          </p>
          <div className="mt-8 max-w-3xl rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-gray-700 leading-relaxed">
              {lang === "fr"
                ? "Pour des raisons de confidentialité, je ne peux pas présenter ce projet publiquement. Je peux cependant le présenter plus en détail lors d’un entretien si vous êtes intéressé."
                : "For confidentiality reasons, I cannot present this project publicly. I can, however, present it in more detail during an interview if you are interested."}
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <SectionTitle
          kicker={t.renaultPage.skillsSection.kicker}
          title={t.renaultPage.skillsSection.title}
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {t.renaultPage.skills.map((skill: string) => (
            <Pill key={skill}>{skill}</Pill>
          ))}
        </div>
      </section>
{/* NEXT / BACK CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <button
            onClick={() => {
              navigate(`/${lang}`, {
                state: {
                  scrollTo: "projets",
                },
              });
            }}
            className="rounded-2xl border border-gray-300 px-6 py-4 hover:bg-gray-50 transition text-center"
          >
            {t.caseStudyCta.back}
          </button>

          <a
            href={`/${lang}/carbon-calculator`}
            className="rounded-2xl bg-black text-white px-6 py-4 hover:opacity-80 transition text-center"
          >
            {t.caseStudyCta.next}
          </a>
        </div>
      </section>
    </div>
      </div>
    </>
  );
}