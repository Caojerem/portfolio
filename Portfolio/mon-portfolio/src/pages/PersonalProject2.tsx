import SwipeSteps from "../components/SwipeSteps";
import MobileCoverArtwork from "../components/MobileCoverArtwork";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
//import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";

import cover from "../assets/personal/quiz/cover.png";
import grid from "../assets/personal/quiz/grid.png";
import question from "../assets/personal/quiz/question.png";

import flowSystem from "../assets/personal/quiz/quiz-flow-system.png";
import flowInteraction from "../assets/personal/quiz/quiz-flow-interaction.png";
import flowStates from "../assets/personal/quiz/quiz-flow-states.png";
import ProjectDropdown from "../components/ProjectDropdown";

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700">
      {children}
    </span>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      {eyebrow ? (
        <p className="text-sm font-medium tracking-wide text-gray-500">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
        {title}
      </h2>

      <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="rounded-2xl overflow-hidden border bg-white">
      <img src={src} alt={alt} className="w-full h-auto" />

      {caption ? (
        <figcaption className="px-4 py-3 text-sm text-gray-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function Callout({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border bg-gray-50 p-6">
      <p className="text-xs font-semibold tracking-wide text-gray-500">
        {label}
      </p>

      <p className="mt-2 text-lg font-semibold text-gray-900">
        {title}
      </p>

      <div className="mt-3 text-gray-700">
        {children}
      </div>
    </div>
  );
}

export default function PersonalProject2() {
  const navigate = useNavigate();
  const location = useLocation();

  const { t, lang } = useLanguage();

  const page = t.quizProjectPage;

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
      label: page.hero.title,
      content: (
        <div className="relative min-h-[calc(100svh-10.5rem)] overflow-hidden rounded-[28px] bg-gray-900">
          <MobileCoverArtwork src={cover} variant="quiz" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <p className="text-xs font-semibold tracking-[0.14em] text-white/75">{page.hero.kicker}</p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.05] tracking-tight">{page.hero.title}</h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85">{page.hero.desc}</p>
          </div>
        </div>
      ),
    },
    { label: page.sections.context.title, content: (
      <div><p className="text-xs font-semibold text-gray-500">{page.sections.context.eyebrow}</p><h2 className="mt-2 text-3xl font-semibold">{page.sections.context.title}</h2><p className="mt-4 text-gray-600">{page.sections.context.desc}</p><div className="mt-6 space-y-3">{page.sections.context.callouts.map((c)=><Callout key={c.title} label={c.label} title={c.title}><p>{c.desc}</p></Callout>)}</div></div>
    )},
    { label: page.sections.format.title, content: (
      <div><p className="text-xs font-semibold text-gray-500">{page.sections.format.eyebrow}</p><h2 className="mt-2 text-3xl font-semibold">{page.sections.format.title}</h2><p className="mt-4 text-gray-600">{page.sections.format.desc}</p><ul className="mt-5 space-y-2 text-gray-700">{page.sections.format.bullets.map((b:string)=><li key={b}>• {b}</li>)}</ul><div className="mt-6"><Callout label={page.sections.format.callout.label} title={page.sections.format.callout.title}><p>{page.sections.format.callout.desc}</p></Callout></div></div>
    )},
    { label: page.sections.system.title, content: (
      <div><p className="text-xs font-semibold text-gray-500">{page.sections.system.eyebrow}</p><h2 className="mt-2 text-3xl font-semibold">{page.sections.system.title}</h2><p className="mt-4 text-gray-600">{page.sections.system.desc}</p><div className="mt-6"><Figure src={flowSystem} alt="System architecture" caption={page.sections.system.figureCaption}/></div></div>
    )},
    { label: page.sections.flow.title, content: (
      <div><p className="text-xs font-semibold text-gray-500">{page.sections.flow.eyebrow}</p><h2 className="mt-2 text-3xl font-semibold">{page.sections.flow.title}</h2><p className="mt-4 text-gray-600">{page.sections.flow.desc}</p><div className="mt-6"><Figure src={flowInteraction} alt="Interaction flow" caption={page.sections.flow.figureCaption}/></div></div>
    )},
    { label: page.sections.states.title, content: (
      <div><p className="text-xs font-semibold text-gray-500">{page.sections.states.eyebrow}</p><h2 className="mt-2 text-3xl font-semibold">{page.sections.states.title}</h2><p className="mt-4 text-gray-600">{page.sections.states.desc}</p><div className="mt-6"><Figure src={flowStates} alt="UI states" caption={page.sections.states.figureCaption}/></div></div>
    )},
    { label: page.sections.screens.title, content: (
      <div><p className="text-xs font-semibold text-gray-500">{page.sections.screens.eyebrow}</p><h2 className="mt-2 text-3xl font-semibold">{page.sections.screens.title}</h2><div className="mt-6 space-y-4"><Figure src={grid} alt="Grid screen" caption={page.sections.screens.figures.grid}/><Figure src={question} alt="Question screen" caption={page.sections.screens.figures.question}/></div><div className="mt-5"><Callout label={page.sections.screens.bonus.label} title={page.sections.screens.bonus.title}><ul className="mt-2 space-y-1">{page.sections.screens.bonus.items.map((i:string)=><li key={i}>• {i}</li>)}</ul></Callout></div></div>
    )},
    { label: page.sections.result.title, content: (
      <div><p className="text-xs font-semibold text-gray-500">{page.sections.result.eyebrow}</p><h2 className="mt-2 text-3xl font-semibold">{page.sections.result.title}</h2><ul className="mt-6 space-y-3 text-gray-700">{page.sections.result.bullets.map((b:string)=><li key={b}>• {b}</li>)}</ul><div className="mt-6"><Callout label={page.sections.result.callout.label} title={page.sections.result.callout.title}><ul className="mt-2 space-y-1">{page.sections.result.callout.items.map((i:string)=><li key={i}>• {i}</li>)}</ul></Callout></div></div>
    )},
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
        <header className="sticky top-[var(--site-header-height,69px)] z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
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
          <SwipeSteps currentStep={mobileStep} totalSteps={mobileSteps.length} onStepChange={goMobileStep}>
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
</SwipeSteps>
        </main>

        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-gray-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3 [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))]">
            <button
              onClick={goMobilePrevious}
              className="inline-flex min-h-11 min-w-12 items-center justify-center rounded-xl border border-gray-300 bg-white text-2xl font-bold text-gray-900 shadow-sm transition active:bg-gray-100"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => {
                if (mobileStep < mobileSteps.length - 1) {
                  goMobileStep(mobileStep + 1);
                } else {
                  navigate(`/${lang}/project-3`);
                }
              }}
              className="inline-flex min-h-11 min-w-12 items-center justify-center rounded-xl border border-gray-300 bg-white text-2xl font-bold text-gray-900 shadow-sm transition active:bg-gray-100"
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

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-gray-500">
              {page.hero.kicker}
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              {page.hero.title}
            </h1>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              {page.hero.desc}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {page.hero.tags.map((tag: string) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">
                  {page.hero.cards.objective.label}
                </p>

                <p className="mt-1 font-medium">
                  {page.hero.cards.objective.value}
                </p>
              </div>

              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">
                  {page.hero.cards.format.label}
                </p>

                <p className="mt-1 font-medium">
                  {page.hero.cards.format.value}
                </p>
              </div>

              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">
                  {page.hero.cards.deliverables.label}
                </p>

                <p className="mt-1 font-medium">
                  {page.hero.cards.deliverables.value}
                </p>
              </div>
            </div>

            <br />

            <Callout
              label={page.hero.note.label}
              title={page.hero.note.title}
            >
              <p className="text-sm">
                {page.hero.note.desc}
              </p>
            </Callout>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border shadow-sm">
              <img
                src={cover}
                alt="Quiz prototype"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* TOC */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-20">
              <p className="text-xs font-semibold tracking-wide text-gray-500">
                {page.toc.title}
              </p>

              <nav className="mt-4 space-y-2">
                <a
                  href="#context"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {page.toc.items.context}
                </a>

                <a
                  href="#format"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {page.toc.items.format}
                </a>

                <a
                  href="#system"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {page.toc.items.system}
                </a>

                <a
                  href="#flow"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {page.toc.items.flow}
                </a>

                <a
                  href="#states"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {page.toc.items.states}
                </a>

                <a
                  href="#screens"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {page.toc.items.screens}
                </a>

                <a
                  href="#result"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {page.toc.items.result}
                </a>
              </nav>
            </div>
          </aside>

          {/* Body */}
          <div className="lg:col-span-9 space-y-16">
            {/* CONTEXT */}
            <Section
              id="context"
              eyebrow={page.sections.context.eyebrow}
              title={page.sections.context.title}
            >
              <p>{page.sections.context.desc}</p>

              <div className="grid md:grid-cols-3 gap-4">
                {page.sections.context.callouts.map(
                  (item, index: number) => (
                    <Callout
                      key={index}
                      label={item.label}
                      title={item.title}
                    >
                      <p>{item.desc}</p>
                    </Callout>
                  )
                )}
              </div>
            </Section>

            {/* FORMAT */}
            <Section
              id="format"
              eyebrow={page.sections.format.eyebrow}
              title={page.sections.format.title}
            >
              <p>{page.sections.format.desc}</p>

              <ul className="list-disc pl-5 space-y-2">
                {page.sections.format.bullets.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <Callout
                label={page.sections.format.callout.label}
                title={page.sections.format.callout.title}
              >
                <p>{page.sections.format.callout.desc}</p>
              </Callout>
            </Section>

            {/* SYSTEM */}
            <Section
              id="system"
              eyebrow={page.sections.system.eyebrow}
              title={page.sections.system.title}
            >
              <p>{page.sections.system.desc}</p>

              <Figure
                src={flowSystem}
                alt="System architecture"
                caption={page.sections.system.figureCaption}
              />
            </Section>

            {/* FLOW */}
            <Section
              id="flow"
              eyebrow={page.sections.flow.eyebrow}
              title={page.sections.flow.title}
            >
              <p>{page.sections.flow.desc}</p>

              <Figure
                src={flowInteraction}
                alt="Interaction flow"
                caption={page.sections.flow.figureCaption}
              />
            </Section>

            {/* STATES */}
            <Section
              id="states"
              eyebrow={page.sections.states.eyebrow}
              title={page.sections.states.title}
            >
              <p>{page.sections.states.desc}</p>

              <Figure
                src={flowStates}
                alt="UI states"
                caption={page.sections.states.figureCaption}
              />
            </Section>

            {/* SCREENS */}
            <Section
              id="screens"
              eyebrow={page.sections.screens.eyebrow}
              title={page.sections.screens.title}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Figure
                  src={grid}
                  alt="Grid screen"
                  caption={page.sections.screens.figures.grid}
                />

                <Figure
                  src={question}
                  alt="Question screen"
                  caption={page.sections.screens.figures.question}
                />
              </div>

              <Callout
                label={page.sections.screens.bonus.label}
                title={page.sections.screens.bonus.title}
              >
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  {page.sections.screens.bonus.items.map(
                    (item: string) => (
                      <li key={item}>{item}</li>
                    )
                  )}
                </ul>
              </Callout>

              <Callout
                label={page.sections.screens.feedback.label}
                title={page.sections.screens.feedback.title}
              >
                <p className="text-sm">
                  {page.sections.screens.feedback.desc}
                </p>
              </Callout>
            </Section>

            {/* RESULT */}
            <Section
              id="result"
              eyebrow={page.sections.result.eyebrow}
              title={page.sections.result.title}
            >
              <ul className="list-disc pl-5 space-y-2">
                {page.sections.result.bullets.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <Callout
                label={page.sections.result.callout.label}
                title={page.sections.result.callout.title}
              >
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  {page.sections.result.callout.items.map(
                    (item: string) => (
                      <li key={item}>{item}</li>
                    )
                  )}
                </ul>
              </Callout>
            </Section>
          </div>
        </div>
        <br />
        <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <button
            onClick={() => {
              navigate(`/${lang}`, {
                state: {
                  scrollTo: "projets-perso",
                },
              });
            }}
            className="rounded-2xl border border-gray-300 px-6 py-4 hover:bg-gray-50 transition text-center"
          >
            {t.caseStudyCta.back}
          </button>

          <a
            href={`/${lang}/project-3`}
            className="rounded-2xl bg-black text-white px-6 py-4 hover:opacity-80 transition text-center"
          >
            {t.caseStudyCta.next}
          </a>
        </div>
      </section>
      </main>
    </div>
      </div>
    </>
  );
}