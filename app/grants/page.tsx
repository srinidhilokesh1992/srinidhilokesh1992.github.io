"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getInitialTheme, saveTheme, type Theme } from "../lib/theme";
import { Header } from "../components/Header";
import { Reveal } from "../components/Reveal";

const grantData = [
  {
    year: 2025,
    title: "Harnessing The Data Revolution for Fire Science (HDRFS) — Data Analytics Research Internship",
    amount: "$4,750",
    pi: "PI: Dr. Srinidhi Lokesh (UNR)",
    sponsor: "Nevada Established Program to Stimulate Competitive Research (EPSCoR)",
    role: "Wrote and revised the full proposal",
  },
  {
    year: 2024,
    title: "Development of Non-Targeted Analysis Methods for Risk Assessment of Produced Water Using Solid Phase Microextraction (SPME) and Liquid Chromatography Coupled with High-Resolution Mass Spectrometry (HRMS)",
    amount: "$550,000",
    pi: "PI: Dr. Thomas Borch (CSU)",
    sponsor: "ExxonMobil",
    role: "Co-wrote and revised the proposal",
  },
  {
    year: 2024,
    title: "Fire impacts on seed germination and seedling establishment",
    amount: "$1,150,048 (Competitive Rating)",
    pi: "PI: Dr. William Bjorn (CSU); Co-PIs: Dr. Mike Wilkins (CSU), Dr. Thomas Borch (CSU)",
    sponsor: "National Science Foundation (NSF)",
    role: "Co-wrote and revised the proposal",
  },
  {
    year: 2024,
    title: "Rapid Determination and Prediction of Physical-Chemical Properties of PFAS Impacting their Fate and Transport using Microfluidics and Machine Learning",
    amount: "CSU Share: $156,913",
    pi: "PI: Dr. Alexandridis Paschalis (UB); Co-PI: Dr. Thomas Borch (CSU)",
    sponsor: "Strategic Environmental Research and Development Program (SERDP)",
    role: "Co-wrote and revised the proposal",
  },
  {
    year: 2024,
    title: "Contribution of micro-predators to necromass production and its transformation",
    amount: "$249,949 (CSU Share: $113,099)",
    pi: "PI: Dr. Edouard Jurkevitch (Hebrew University of Jerusalem); Co-PIs: Dr. Benny Chefetz (Hebrew University of Jerusalem), Dr. Thomas Borch (CSU)",
    sponsor: "US-Israel Binational Science Foundation Research Grant (BSF)",
    role: "Co-wrote and revised the proposal",
  },
  {
    year: 2024,
    title: "Sources and Sinks of Fe in Future Hypoxic Oceans",
    amount: "$140,000",
    pi: "PI: Srinidhi Lokesh (UNR); Co-PI: Dr. Rene Boiteau (OSU, currently at UMN)",
    sponsor: "National Oceanic and Atmospheric Administration (NOAA)",
    role: "Wrote and revised the full proposal — Honorable mention, Top 15 (top 8 proposals funded)",
  },
  {
    year: 2022,
    title: "Supplementary Funding to Collaborate with European Research Council Grantee (Dr. Andrew Tanentzap, University of Cambridge)",
    amount: "$8,986",
    pi: "PI: Dr. Yu Yang (UNR)",
    sponsor: "European Research Council",
    role: "Co-wrote and revised the proposal",
  },
  {
    year: 2022,
    title: "Collaborative Research: Sustainable management of human organic pollutant exposure (HOPE) at formerly used defense sites in the changing Arctic",
    amount: "$1,568,000",
    pi: "PI: Dr. Yu Yang (UNR); Co-PIs: Dr. Frank von Hippel (UA), Dr. Jennifer Schmidt (UAA), Dr. Tobias Schwoerer (UAF), Chris Price (Qawalangin Tribe of Unalaska)",
    sponsor: "National Science Foundation (NSF)",
    role: "Drafted and revised the proposal",
  },
  {
    year: 2022,
    title: "Collaborative Research: Identification of lignin-derived ligands associating with iron",
    amount: "$450,000",
    pi: "PI: Dr. Yu Yang (UNR); Co-PI: Dr. Rene Boiteau (OSU, currently at UMN)",
    sponsor: "National Science Foundation (NSF)",
    role: "Drafted the proposal",
  },
  {
    year: 2021,
    title: "Screening survey for emerging toxics in leachate of rubberized asphalt concrete and their critical environmental processes",
    amount: "$32,125",
    pi: "PI: Elie Hajj (UNR); Co-PI: Dr. Yu Yang (UNR)",
    sponsor: "Granite Construction, Inc.",
    role: "Led weekly update meetings and wrote the final project report",
  },
];

export default function GrantsPage() {
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
  const glassCardClass = isDark ? "glass-card" : "glass-card-light";

  const groupedByYear = grantData.reduce(
    (acc, grant) => {
      const year = String(grant.year);
      if (!acc[year]) acc[year] = [];
      acc[year].push(grant);
      return acc;
    },
    {} as Record<string, typeof grantData>
  );

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className={`min-h-screen ${shellClass}`}>
      <Header theme={theme} onToggleTheme={() => setTheme(isDark ? "light" : "dark")} />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 md:pt-14">
        <section className="pb-20">
          <div className="mb-12">
            <p className={`text-[11px] uppercase tracking-[0.28em] ${softText}`}>Funding</p>
            <h1 className={`mt-3 text-4xl font-medium tracking-[-0.06em] md:text-5xl ${headingText}`}>Grants &amp; Proposals</h1>
            <p className={`mt-4 max-w-2xl text-lg ${bodyText}`}>
              A record of grant proposals I have written or co-written as PI or collaborator, spanning wildfire impacts, PFAS, and environmental biogeochemistry research.
            </p>
          </div>

          <div className="space-y-16">
            {sortedYears.map((year) => (
              <Reveal key={year}>
                <h2 className={`mb-6 border-b pb-4 text-2xl font-medium tracking-[-0.04em] ${isDark ? "border-white/10 text-white" : "border-[#171411]/10 text-[#171411]"}`}>
                  {year}
                </h2>
                <div className="space-y-4">
                  {groupedByYear[year].map((grant, idx) => (
                    <article
                      key={`${year}-${idx}`}
                      className={`${glassCardClass} rounded-[1.2rem] p-6 transition duration-300 hover:shadow-[0_22px_48px_rgba(0,0,0,0.08)]`}
                    >
                      <div className={`mb-2 text-[10px] uppercase tracking-[0.2em] ${isDark ? "text-white/55" : "text-[#171411]/55"}`}>
                        {grant.sponsor}
                      </div>
                      <h3 className={`mb-2 text-lg font-medium leading-[1.4] tracking-[-0.03em] ${headingText}`}>{grant.title}</h3>
                      <p className={`mb-1 text-sm font-semibold ${isDark ? "text-white" : "text-[#171411]"}`}>{grant.amount}</p>
                      <p className={`mb-1 text-sm ${bodyText}`}>{grant.pi}</p>
                      <p className={`text-sm ${isDark ? "text-white/60" : "text-[#171411]/65"}`}>{grant.role}</p>
                    </article>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <div className={`mt-16 rounded-[1.5rem] p-8 ${isDark ? "bg-white/5" : "bg-[#171411]/5"}`}>
            <p className={`text-center text-sm ${bodyText}`}>
              Total Proposals: <span className={`font-semibold ${headingText}`}>{grantData.length}</span>
            </p>
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
