"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getInitialTheme, saveTheme, type Theme } from "./lib/theme";
import { AwardIcon, DropletIcon, FlaskIcon, ParticleIcon, WaveformIcon } from "./lib/icons";
import { Header } from "./components/Header";
import { Reveal } from "./components/Reveal";

const stats = [
  { label: "Publications", value: "15" },
  { label: "Years active", value: "10+" },
  { label: "Funding secured", value: "$2.73M" },
];

const services = [
  {
    title: "Emerging Contaminants",
    description: "Advanced characterization and transformation pathways for PFAS, halogenated organics, and other persistent pollutants.",
    Icon: FlaskIcon,
  },
  {
    title: "Mass Spectrometry",
    description: "High-resolution analytical methods including targeted and non-targeted approaches for environmental analysis.",
    Icon: WaveformIcon,
  },
  {
    title: "Water Treatment",
    description: "Development of strategies and technologies for treating wildfire-impacted water systems and emerging contaminants.",
    Icon: DropletIcon,
  },
  {
    title: "Black Carbon",
    description: "Investigation of redox-active species and their roles in pollutant degradation and environmental remediation.",
    Icon: ParticleIcon,
  },
];

const researchThrustItems = [
  { name: "Post-Fire Disinfection Byproduct Precursors", type: "UNR, 2025-Present", description: "Tracking DBP precursor and PFAS formation in fire-affected soils and drinking water sources, including a field study of the 2025 Eaton Fire in Los Angeles.", accent: "#d8c4a8" },
  { name: "Structural & WUI Fire Emissions", type: "CSU, 2023-2025", description: "Quantifying PAH and PFAS emissions from controlled burns of structural and household materials using ultra-high-resolution mass spectrometry.", accent: "#8e7a68" },
  { name: "Redox-Mediated Pollutant Degradation", type: "UNR PhD, 2019-2023", description: "Reductive dehalogenation of persistent pollutants, including 6PPD-quinone from rubberized asphalt, via semiquinone moieties in aqueous biochar.", accent: "#c9bfb3" },
];

const publicationList = [
  { title: "Anaerobic dehalogenation by reduced aqueous biochars", venue: "Environmental Science & Technology", year: "2020", doi: "10.1021/acs.est.0c05940" },
  { title: "Critical Role of Semiquinones in Reductive Dehalogenation", venue: "Environmental Science & Technology", year: "2023", doi: "10.1021/acs.est.3c03981" },
  { title: "Investigation of 6PPD-quinone in rubberized asphalt concrete mixtures", venue: "ACS Environmental Au", year: "2023", doi: "10.1021/acsenvironau.3c00023" },
  { title: "Enrichment of Disinfection Byproduct Precursors in Fire-Affected Soils from the 2025 Eaton Fire in Los Angeles, California", venue: "ACS ES&T Water", year: "2026", doi: "10.1021/acsestwater.6c00081" },
];

const honors = [
  { year: "2025", title: "Poster Competition, Honorable Mention", org: "Gordon Research Conference" },
  { year: "2025", title: "Featured Journal Cover Article", org: "Soil Systems, Vol. 9" },
  { year: "2023", title: "Featured Journal Cover Article", org: "Environmental Science & Technology, Vol. 57" },
  { year: "2023", title: "Student Poster Competition, 2nd Place", org: "Nevada Water Environment Association" },
  { year: "2022", title: "Student Travel Grant", org: "University of Nevada, Reno" },
  { year: "2021", title: "ACS ENVR Certificate of Merit", org: "American Chemical Society" },
  { year: "2016", title: "Graduate Scholarship", org: "New York University" },
];

const workExperience = [
  { period: "2025 - Present", title: "Research Scientist", detail: "Investigating leaching behavior of DBP precursors from wildland-urban interface fire residues and their transport into water systems at University of Nevada Reno." },
  { period: "2023 - 2025", title: "Postdoctoral Scholar", detail: "Developed and optimized extraction methods for chemical analysis of emissions from burning structural materials at Colorado State University." },
  { period: "2019 - 2023", title: "PhD in Environmental Engineering", detail: "Explored redox-mediated degradation of pollutants by aqueous-phase biochar at University of Nevada Reno." },
];

export default function Home() {
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
  const footerClass = isDark ? "border-white/10 bg-[#0d1116]/80 text-white/60" : "border-[#171411]/10 bg-[#f7f2ec]/90 text-[#171411]/65";

  return (
    <div className={`min-h-screen ${shellClass}`}>
      <Header theme={theme} onToggleTheme={() => setTheme(isDark ? "light" : "dark")} />

      <main id="home" className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 md:pt-14">
        <Reveal className="relative overflow-hidden pb-20">
          <div className={`absolute inset-x-12 top-8 -z-10 h-72 rounded-[3rem] blur-3xl ${isDark ? "bg-[radial-gradient(circle_at_center,_rgba(29,47,62,0.12),_transparent_65%)]" : "bg-[radial-gradient(circle_at_center,_rgba(129,143,156,0.14),_transparent_65%)]"}`} />

          <div className="grid items-center gap-10 md:grid-cols-[1.08fr_0.92fr] md:gap-12 lg:gap-16">
            <div className="space-y-8 py-4">
              <div className={`${glassPanelClass} inline-flex items-center rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] ${isDark ? "text-white/75" : "text-[#171411]/75"}`}>
                Environmental Engineer / Researcher / Teacher
              </div>

              <div className="space-y-5">
                <p className={`text-[11px] font-medium uppercase tracking-[0.34em] ${softText}`}>Hello, I am</p>
                <h1 className={`max-w-xl text-5xl font-medium leading-[0.9] tracking-[-0.08em] md:text-6xl lg:text-[5.3rem] ${headingText}`}>
                  Dr. Srinidhi Lokesh
                </h1>
                <h2 className={`max-w-xl text-2xl font-medium leading-[1.15] tracking-[-0.04em] md:text-3xl ${isDark ? "text-white/75" : "text-[#171411]/75"}`}>
                  Research Scientist in Water Systems & Emerging Contaminants
                </h2>
                <p className={`max-w-lg text-base leading-8 ${isDark ? "text-white/70" : "text-[#171411]/75"}`}>
                  I advance the discovery and transformation of emerging contaminants to strengthen the resilience of water and infrastructure systems affected by wildfires. My research focuses on redox-mediated degradation pathways, advanced analytical methods, and treatment technologies for climate-driven disturbances.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a href="#research-thrust" className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] font-medium uppercase tracking-[0.24em] transition duration-300 hover:-translate-y-0.5 ${isDark ? "bg-[#dfeaf0] text-[#11161d] hover:bg-white hover:shadow-[0_20px_40px_rgba(223,234,240,0.18)]" : "bg-[#171411] text-[#f6f1ea] hover:bg-[#2a2420] hover:shadow-[0_20px_40px_rgba(23,20,17,0.12)]"}`}>
                  View work
                </a>
                <a href="#contact" className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-[11px] font-medium uppercase tracking-[0.24em] transition duration-300 hover:-translate-y-0.5 ${isDark ? "border-white/15 bg-white/5 text-white hover:border-white/25 hover:bg-white/10" : "border-[#171411]/15 bg-white/70 text-[#171411] hover:border-[#171411]/25 hover:bg-white"}`}>
                  Contact
                </a>
              </div>

              <dl className="grid max-w-xl grid-cols-3 gap-3 pt-2">
                {stats.map((stat) => (
                  <div key={stat.label} className={`${glassCardClass} rounded-[1.35rem] p-4`}>
                    <dt className={`text-[10px] uppercase tracking-[0.2em] ${isDark ? "text-white/55" : "text-[#171411]/55"}`}>{stat.label}</dt>
                    <dd className={`mt-3 text-2xl font-medium tracking-[-0.06em] ${headingText}`}>{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className={`absolute inset-x-10 bottom-2 top-8 -z-10 rounded-[2.8rem] blur-3xl ${isDark ? "bg-[radial-gradient(circle_at_center,_rgba(29,47,62,0.14),_transparent_60%)]" : "bg-[radial-gradient(circle_at_center,_rgba(116,131,142,0.16),_transparent_60%)]"}`} />

              <div className={`${glassPanelClass} overflow-hidden rounded-[2rem] p-3 shadow-[0_30px_80px_rgba(18,15,13,0.08)]`}>
                <div className={`overflow-hidden rounded-[1.4rem] ${isDark ? "bg-[#e8dfd3] ring-1 ring-[#171411]/5" : "bg-[#ece5df] ring-1 ring-[#171411]/10"}`}>
                  <Image
                    src="/Profile_picture.png"
                    alt="Portrait of Dr. Srinidhi Lokesh"
                    width={900}
                    height={1100}
                    priority
                    className="h-[430px] w-full object-cover object-center md:h-[520px]"
                  />
                </div>

              </div>
            </div>
          </div>
        </Reveal>

        <Reveal id="about" className="py-20">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
            <div>
              <p className={`mb-3 text-[11px] uppercase tracking-[0.28em] ${softText}`}>About</p>
              <h3 className={`max-w-sm text-3xl font-medium tracking-[-0.06em] md:text-4xl ${headingText}`}>
                Advancing water system resilience through emerging contaminant research.
              </h3>
            </div>

            <div className={`space-y-5 text-lg leading-8 ${bodyText}`}>
              <p>
                As an environmental engineer, my research advances the discovery, characterization, and transformation of emerging contaminants to strengthen the resilience of water and infrastructure systems affected by wildfires. I focus on redox-mediated degradation pathways of persistent pollutants, including PFAS and halogenated organics.
              </p>
              <p>
                My current work integrates combustion experiments with post-fire field studies to identify and track disinfection byproduct precursors and other emissions across complex environmental matrices. Ultimately, my goal is to inform mitigation strategies and support robust treatment technologies for climate-driven disturbances.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal id="services" className="pb-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className={`text-[11px] uppercase tracking-[0.28em] ${softText}`}>Research areas</p>
              <h3 className={`mt-3 text-3xl font-medium tracking-[-0.06em] md:text-4xl ${headingText}`}>Research and expertise across water systems and analytical methods.</h3>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className={`${glassCardClass} rounded-[1.7rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(0,0,0,0.08)]`}>
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full shadow-sm ${isDark ? "bg-[#171411] text-[#f6f1ea]" : "bg-[#171411] text-[#f6f1ea]"}`}>
                  <service.Icon className="h-5 w-5" />
                </div>
                <h4 className={`mb-3 text-2xl font-medium tracking-[-0.05em] ${headingText}`}>{service.title}</h4>
                <p className={isDark ? "text-white/70" : "text-[#171411]/72"}>{service.description}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal id="teaching" className="pb-20">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className={`text-[11px] uppercase tracking-[0.28em] ${softText}`}>Teaching</p>
              <h3 className={`mt-3 text-3xl font-medium tracking-[-0.06em] md:text-4xl ${headingText}`}>Teaching informed by research in environmental engineering and water quality.</h3>
            </div>
            <a
              href="/teaching"
              className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] font-medium uppercase tracking-[0.24em] transition duration-300 whitespace-nowrap hover:-translate-y-0.5 ${isDark ? "bg-[#dfeaf0] text-[#11161d] hover:bg-white" : "bg-[#171411] text-[#f6f1ea] hover:bg-[#2a2420]"}`}
            >
              View Teaching
            </a>
          </div>

          <div className={`${glassPanelClass} rounded-[2rem] p-8`}>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-5">
                <p className={`text-lg leading-8 ${bodyText}`}>
                  My teaching is shaped by my academic and research trajectory in environmental engineering, analytical chemistry, and applied water systems work. I draw on my PhD training at the University of Nevada, Reno and postdoctoral research at Colorado State University to connect fundamental concepts with current challenges in water treatment and contaminant management.
                </p>
                <p className={`text-lg leading-8 ${bodyText}`}>
                  I teach and mentor with a focus on environmental chemistry, emerging contaminant analysis, water quality, and rigorous scientific inquiry. My goal is to help students build analytical confidence while understanding how environmental research informs resilient engineering solutions for real-world systems.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className={`${glassCardClass} rounded-[1.5rem] p-5`}>
                  <div className={`text-[10px] uppercase tracking-[0.2em] ${isDark ? "text-white/55" : "text-[#171411]/55"}`}>Focus</div>
                  <h4 className={`mt-3 text-xl font-medium tracking-[-0.04em] ${headingText}`}>Environmental Engineering</h4>
                </div>
                <div className={`${glassCardClass} rounded-[1.5rem] p-5`}>
                  <div className={`text-[10px] uppercase tracking-[0.2em] ${isDark ? "text-white/55" : "text-[#171411]/55"}`}>Systems</div>
                  <h4 className={`mt-3 text-xl font-medium tracking-[-0.04em] ${headingText}`}>Water Quality & Treatment</h4>
                </div>
                <div className={`${glassCardClass} rounded-[1.5rem] p-5`}>
                  <div className={`text-[10px] uppercase tracking-[0.2em] ${isDark ? "text-white/55" : "text-[#171411]/55"}`}>Methods</div>
                  <h4 className={`mt-3 text-xl font-medium tracking-[-0.04em] ${headingText}`}>Analytical Chemistry</h4>
                </div>
                <div className={`${glassCardClass} rounded-[1.5rem] p-5`}>
                  <div className={`text-[10px] uppercase tracking-[0.2em] ${isDark ? "text-white/55" : "text-[#171411]/55"}`}>Mentorship</div>
                  <h4 className={`mt-3 text-xl font-medium tracking-[-0.04em] ${headingText}`}>Research Design</h4>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal id="research-thrust" className="pb-20">
          <div className="mb-10">
            <p className={`text-[11px] uppercase tracking-[0.28em] ${softText}`}>Research Thrust</p>
            <h3 className={`mt-3 text-3xl font-medium tracking-[-0.06em] md:text-4xl ${headingText}`}>Selected work and research themes.</h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {researchThrustItems.map((item) => (
              <article key={item.name} className="glass-card overflow-hidden rounded-[1.8rem] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(0,0,0,0.08)]">
                <div className="h-56 border-b border-[#171411]/10" style={{ background: `linear-gradient(135deg, ${item.accent}, rgba(255,255,255,0.75))` }} />
                <div className="p-6">
                  <div className="mb-3 text-[10px] uppercase tracking-[0.24em] text-white/55">{item.type}</div>
                  <h4 className="mb-3 text-2xl font-medium tracking-[-0.05em] text-white">{item.name}</h4>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="pb-20">
          <div className={`${glassPanelClass} rounded-[2rem] p-8 shadow-[0_18px_40px_rgba(0,0,0,0.03)]`}>
            <div className="mb-8">
              <p className={`text-[11px] uppercase tracking-[0.28em] ${softText}`}>Work Experience</p>
              <h3 className={`mt-3 text-3xl font-medium tracking-[-0.06em] md:text-4xl ${headingText}`}>Research and practice built for real-world complexity.</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {workExperience.map((item) => (
                <div key={item.title} className={`${glassCardClass} rounded-[1.5rem] p-5`}>
                  <div className={`mb-3 text-[10px] uppercase tracking-[0.22em] ${isDark ? "text-white/55" : "text-[#171411]/55"}`}>{item.period}</div>
                  <h4 className={`mb-3 text-xl font-medium tracking-[-0.04em] ${headingText}`}>{item.title}</h4>
                  <p className={isDark ? "text-white/70" : "text-[#171411]/72"}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal id="honors" className="pb-20">
          <div className="mb-10">
            <p className={`text-[11px] uppercase tracking-[0.28em] ${softText}`}>Honors & Awards</p>
            <h3 className={`mt-3 text-3xl font-medium tracking-[-0.06em] md:text-4xl ${headingText}`}>Recognition from research, teaching, and professional service.</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {honors.map((honor) => (
              <div key={`${honor.year}-${honor.title}`} className={`${glassCardClass} flex gap-4 rounded-[1.5rem] p-5`}>
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${isDark ? "bg-[#171411] text-[#f6f1ea]" : "bg-[#171411] text-[#f6f1ea]"}`}>
                  <AwardIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className={`text-[10px] uppercase tracking-[0.2em] ${isDark ? "text-white/55" : "text-[#171411]/55"}`}>{honor.year}</div>
                  <h4 className={`mt-1 text-base font-medium tracking-[-0.03em] ${headingText}`}>{honor.title}</h4>
                  <p className={`mt-1 text-sm ${isDark ? "text-white/65" : "text-[#171411]/70"}`}>{honor.org}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="pb-20">
          <div className={`rounded-[2rem] p-8 shadow-[0_18px_40px_rgba(0,0,0,0.03)] ${isDark ? "bg-white/5 border border-white/10" : "bg-[#171411]/5 border border-[#171411]/10"}`}>
            <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className={`text-[11px] uppercase tracking-[0.28em] ${softText}`}>Publications</p>
                <h3 className={`mt-3 text-3xl font-medium tracking-[-0.06em] md:text-4xl ${headingText}`}>Selected Publications</h3>
                <p className={`mt-2 max-w-lg text-base ${bodyText}`}>
                  Explore my complete publication record with 15 peer-reviewed articles spanning water systems, emerging contaminants, and environmental engineering.
                </p>
              </div>
              <a
                href="/publications"
                className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] font-medium uppercase tracking-[0.24em] transition duration-300 whitespace-nowrap hover:-translate-y-0.5 ${isDark ? "bg-[#dfeaf0] text-[#11161d] hover:bg-white" : "bg-[#171411] text-[#f6f1ea] hover:bg-[#2a2420]"}`}
              >
                View All Publications
              </a>
            </div>

            <div className="space-y-3">
              {publicationList.map((pub) => (
                <article key={pub.title} className={`flex flex-col justify-between gap-3 rounded-[1rem] p-3 md:flex-row md:items-start md:gap-4`}>
                  <div className="flex-1">
                    <div className={`text-[10px] uppercase tracking-[0.2em] ${isDark ? "text-white/55" : "text-[#171411]/55"}`}>{pub.year}</div>
                    <h4 className={`mt-1 text-base font-medium tracking-[-0.03em] ${headingText}`}>
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-1 underline-offset-2 transition hover:opacity-70"
                      >
                        {pub.title}
                      </a>
                    </h4>
                  </div>
                  <div className={`text-sm ${isDark ? "text-white/70" : "text-[#171411]/72"}`}>{pub.venue}</div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal id="contact" className="pb-10">
          <div className={`rounded-[2rem] p-8 shadow-[0_32px_80px_rgba(0,0,0,0.22)] ring-1 backdrop-blur-md ${isDark ? "bg-[linear-gradient(135deg,rgba(15,18,22,0.96),rgba(28,35,42,0.94))] text-[#f6f1ea] ring-white/10" : "bg-[linear-gradient(135deg,rgba(238,243,247,0.96),rgba(255,255,255,0.95))] text-[#171411] ring-[#171411]/10"}`}>
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className={`text-[11px] uppercase tracking-[0.28em] ${isDark ? "text-white/60" : "text-[#171411]/60"}`}>Contact</p>
                <h3 className={`mt-3 text-3xl font-medium tracking-[-0.06em] ${isDark ? "text-white" : "text-[#171411]"}`}>Interested in collaborating or learning more about my research? Let&apos;s connect.</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="mailto:slokesh@unr.edu" className={`rounded-full px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] transition duration-300 hover:-translate-y-0.5 ${isDark ? "bg-[#f6f1ea] text-[#171411] hover:bg-white" : "bg-[#171411] text-[#f6f1ea] hover:bg-[#2a2420]"}`}>
                  Email me
                </a>
                <a href="https://scholar.google.com/citations?user=RKNBZc0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className={`rounded-full border px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] transition duration-300 hover:-translate-y-0.5 ${isDark ? "border-white/15 text-white hover:bg-white/5" : "border-[#171411]/15 text-[#171411] hover:bg-[#171411]/5"}`}>
                  Google Scholar
                </a>
                <a href="https://orcid.org/0009-0001-1537-4166" target="_blank" rel="noopener noreferrer" className={`rounded-full border px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] transition duration-300 hover:-translate-y-0.5 ${isDark ? "border-white/15 text-white hover:bg-white/5" : "border-[#171411]/15 text-[#171411] hover:bg-[#171411]/5"}`}>
                  ORCID
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={`rounded-full border px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] transition duration-300 hover:-translate-y-0.5 ${isDark ? "border-white/15 text-white hover:bg-white/5" : "border-[#171411]/15 text-[#171411] hover:bg-[#171411]/5"}`}>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </main>

      <footer className={`border-t py-8 ${footerClass}`}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm md:flex-row">
          <p>(c) 2026 Dr. Srinidhi Lokesh</p>
          <div className="flex gap-5 text-[10px] uppercase tracking-[0.2em]">
            <a href="#about" className={isDark ? "hover:text-white" : "hover:text-[#171411]"}>About</a>
            <a href="#research-thrust" className={isDark ? "hover:text-white" : "hover:text-[#171411]"}>Research Thrust</a>
            <a href="#contact" className={isDark ? "hover:text-white" : "hover:text-[#171411]"}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
