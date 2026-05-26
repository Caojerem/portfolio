import { motion } from "framer-motion";
import renaultCover from "../assets/renault/cover.jpg";
import { useState } from "react";
import Modal from "../components/Modal";
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
  const [confidentialOpen, setConfidentialOpen] = useState(false);

  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleBack = () => {
    const y = location.state?.fromScrollY;
    const section = location.state?.fromSection;

    navigate("/", {
      state: {
        restoreScrollY: y,
        scrollTo: section,
      },
    });
  };

  return (
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
            {t.renaultPage.contextCards.map((card: any) => (
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
            {t.renaultPage.approachCards.map((step: any, index: number) => (
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

          <button
            onClick={() => setConfidentialOpen(true)}
            className="mt-8 rounded-xl bg-black px-6 py-3 text-white hover:opacity-80 transition"
          >
            {t.renaultPage.confidential.button}
          </button>
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

      {/* MODAL */}
      <Modal
        open={confidentialOpen}
        onClose={() => setConfidentialOpen(false)}
        title={t.renaultPage.confidential.modalTitle}
        primaryLabel="Compris"
      >
        <p>
          {t.renaultPage.confidential.modalDesc}
        </p>
      </Modal>

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
  );
}