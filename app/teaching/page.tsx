"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getInitialTheme, saveTheme, type Theme } from "../lib/theme";
import { BookIcon, FilterIcon, FlaskIcon, LayersIcon } from "../lib/icons";
import { Header } from "../components/Header";

const teachingAreas = [
  {
    title: "Environmental Engineering & Water Systems",
    description: "Teaching the foundations of water quality, contaminant transport, and resilient system design for wildland-urban interface and climate-stressed watersheds.",
    Icon: LayersIcon,
  },
  {
    title: "Water Quality & Treatment",
    description: "Exploring treatment strategies for disinfection byproduct precursors, emerging contaminants, and wildfire-affected source waters.",
    Icon: FilterIcon,
  },
  {
    title: "Analytical Chemistry & Mass Spectrometry",
    description: "Instruction in high-resolution mass spectrometry, analytical method development, and interpretation of environmental data for research and practice.",
    Icon: FlaskIcon,
  },
  {
    title: "Research Methods & Mentorship",
    description: "Guiding students through experimental design, data analysis, scientific writing, and interdisciplinary problem-solving in environmental research.",
    Icon: BookIcon,
  },
];

const teachingExperience = [
  {
    period: "Spring 2025 & Fall 2025",
    role: "Teaching Instructor of Record",
    institution: "University of Nevada, Reno",
    course: "CEE 204 — Natural and Engineered Environmental Systems",
    level: "Undergraduate",
    enrollment: "n = 24 (Spring 2025), n = 80 (Fall 2025)",
    description: "Fundamental concepts related to natural and engineered environmental systems for the control of water and air pollution and the treatment of water, wastewater, hazardous wastes and solid wastes.",
  },
  {
    period: "Fall 2022 & Fall 2024",
    role: "Teaching Instructor of Record",
    institution: "University of Nevada, Reno",
    course: "CEE 417/617 — Environmental Quality Analysis",
    level: "Graduate / Undergraduate",
    enrollment: "n = 13 (Fall 2022), n = 16 (Fall 2024)",
    description: "Analytical chemistry and microbiology techniques applied to environmental quality assessment of water and soil systems for environmental engineering practice, including data collection, data analysis, and technical presentation.",
  },
  {
    period: "Summer 2022",
    role: "RET Site Mentor",
    institution: "University of Nevada, Reno",
    course: "Next-Generation Clean Energy Sources and Storage",
    level: "K-12 Educator Training",
    description: "Mentored two middle school teachers from the Washoe County School District in environmental engineering laboratory practices and helped develop curriculum for a middle school science class.",
  },
  {
    period: "Summer 2021",
    role: "GradFIT Module Developer",
    institution: "University of Nevada, Reno",
    course: "MATLAB-Based Statistical Analysis Workshop",
    level: "Graduate",
    description: "Co-developed and led a workshop for first-generation college students and students from historically underrepresented backgrounds joining the UNR GradFIT Module (NSF Innovations in Graduate Education Project).",
  },
  {
    period: "Fall 2019 & Fall 2020",
    role: "Teaching Assistant",
    institution: "University of Nevada, Reno",
    course: "CEE 417/617 — Environmental Quality Analysis",
    level: "Graduate / Undergraduate",
    description: "Co-taught the laboratory course and developed a video module series to facilitate the learning process of laboratory experiments during the COVID-19 pandemic.",
  },
  {
    period: "Spring 2018",
    role: "Teaching Assistant",
    institution: "New York University",
    course: "CE-GY 8283 — Risk Analysis",
    level: "Graduate",
    description: "Held office hours, graded assignments, and managed online Q&A.",
  },
];

const courseThemes = [
  "Environmental chemistry and contaminant fate",
  "Water quality, treatment, and process design",
  "Emerging contaminants and wildfire-impacted waters",
  "Mass spectrometry and analytical method development",
  "Redox chemistry and pollutant transformation",
  "Research design, data analysis, and scientific communication",
];

export default function TeachingPage() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    saveTheme(theme);
  }, [theme]);

  const isDark = theme === "dark";
  const shellClass = isDark ? "bg-[#0e1217] text-[#f0ede8]" : "bg-[#f5f1eb] text-[#171412]";
  const softText = isDark ? "text-white/50" : "text-[#171411]/60";
  const headingText = isDark ? "text-white" : "text-[#171411]";
  const bodyText = isDark ? "text-white/72" : "text-[#171411]/78";
  const glassPanelClass = isDark ? "glass-panel" : "glass-panel-light";
  const glassCardClass = isDark ? "glass-card" : "glass-card-light";

  return (
    <div className={`min-h-screen ${shellClass}`}>
      <Header theme={theme} onToggleTheme={() => setTheme(isDark ? "light" : "dark")} />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 md:pt-14">
        <section className="pb-20">
          <div className="mb-12">
            <p className={`text-[11px] uppercase tracking-[0.28em] ${softText}`}>Teaching</p>
            <h1 className={`mt-3 text-4xl font-medium tracking-[-0.06em] md:text-5xl ${headingText}`}>Teaching grounded in environmental engineering, analytical chemistry, and water systems research.</h1>
            <p className={`mt-4 max-w-3xl text-lg ${bodyText}`}>
              My teaching is informed by my PhD in Environmental Engineering at the University of Nevada, Reno, postdoctoral research at Colorado State University, and applied work on wildfire-impacted water quality, emerging contaminants, and treatment technologies. I bring a research-driven approach to the classroom that connects theory, data, and real-world environmental challenges.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {teachingAreas.map((area) => (
              <article key={area.title} className={`${glassCardClass} rounded-[1.7rem] p-6`}>
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full shadow-sm ${isDark ? "bg-[#171411] text-[#f6f1ea]" : "bg-[#171411] text-[#f6f1ea]"}`}>
                  <area.Icon className="h-5 w-5" />
                </div>
                <h2 className={`mb-3 text-2xl font-medium tracking-[-0.05em] ${headingText}`}>{area.title}</h2>
                <p className={isDark ? "text-white/70" : "text-[#171411]/72"}>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="mb-10">
            <p className={`text-[11px] uppercase tracking-[0.28em] ${softText}`}>Teaching Experience</p>
            <h2 className={`mt-3 text-3xl font-medium tracking-[-0.06em] md:text-4xl ${headingText}`}>Courses taught, instructional roles, and curriculum development.</h2>
          </div>

          <div className="space-y-4">
            {teachingExperience.map((item) => (
              <article
                key={`${item.period}-${item.course}`}
                className={`${glassCardClass} rounded-[1.2rem] p-6 transition duration-300 hover:shadow-[0_22px_48px_rgba(0,0,0,0.08)]`}
              >
                <div className={`mb-2 text-[10px] uppercase tracking-[0.2em] ${isDark ? "text-white/55" : "text-[#171411]/55"}`}>
                  {item.period} / {item.level}
                </div>
                <h3 className={`mb-1 text-lg font-medium leading-[1.4] tracking-[-0.03em] ${headingText}`}>{item.course}</h3>
                <p className={`mb-2 text-sm ${bodyText}`}>{item.role}, {item.institution}</p>
                {item.enrollment && <p className={`mb-3 text-sm ${isDark ? "text-white/60" : "text-[#171411]/65"}`}>{item.enrollment}</p>}
                <p className={isDark ? "text-white/70" : "text-[#171411]/72"}>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className={`${glassPanelClass} rounded-[2rem] p-8`}>
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className={`text-[11px] uppercase tracking-[0.28em] ${softText}`}>Teaching philosophy</p>
                <h2 className={`mt-3 text-3xl font-medium tracking-[-0.06em] md:text-4xl ${headingText}`}>
                  Building rigorous thinkers who can connect environmental chemistry, engineering, and public impact.
                </h2>
                <p className={`mt-5 text-lg leading-8 ${bodyText}`}>
                  My teaching integrates the analytical methods and environmental systems thinking developed through my doctoral and postdoctoral work. I emphasize evidence-based analysis, experimental design, and the practical challenge of translating laboratory findings into effective water quality and remediation strategies.
                </p>
              </div>

              <div className={`rounded-[1.5rem] border border-dashed p-5 ${isDark ? "border-white/15" : "border-[#171411]/15"}`}>
                <div className={`mb-4 text-[10px] uppercase tracking-[0.22em] ${isDark ? "text-white/55" : "text-[#171411]/55"}`}>Course themes</div>
                <ul className="space-y-3">
                  {courseThemes.map((topic) => (
                    <li key={topic} className={`flex items-start gap-3 text-base ${bodyText}`}>
                      <span className={`mt-1 inline-block h-2 w-2 rounded-full ${isDark ? "bg-[#dfeaf0]" : "bg-[#171411]"}`} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={`border-t py-8 ${isDark ? "border-white/10 bg-[#0d1116]/80 text-white/60" : "border-[#171411]/10 bg-[#f7f2ec]/90 text-[#171411]/65"}`}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm md:flex-row">
          <p>(c) 2026 Dr. Srinidhi Lokesh</p>
          <div className="flex gap-5 text-[10px] uppercase tracking-[0.2em]">
            <Link href="/#about" className={isDark ? "hover:text-white" : "hover:text-[#171411]"}>About</Link>
            <Link href="/publications" className={isDark ? "hover:text-white" : "hover:text-[#171411]"}>Publications</Link>
            <Link href="/#contact" className={isDark ? "hover:text-white" : "hover:text-[#171411]"}>Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
