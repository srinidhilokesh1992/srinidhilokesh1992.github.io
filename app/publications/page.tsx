"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getInitialTheme, saveTheme, type Theme } from "../lib/theme";
import { Header } from "../components/Header";

function renderAuthors(authors: string, isDark: boolean) {
  const highlightClass = isDark
    ? "font-semibold text-[#11161d] bg-[#dfeaf0] rounded px-1.5 py-0.5"
    : "font-semibold";

  return authors.split(/(\*?Lokesh,?\s*S\.?)/g).map((part, index) =>
    part.includes("Lokesh") ? (
      <strong key={index} className={highlightClass}>
        {part}
      </strong>
    ) : (
      <span key={index}>{part}</span>
    )
  );
}

const publicationData = [
  {
    year: 2026,
    title: "Wildfire Temperature and Oxygen Availability Alter Disinfection Byproduct Precursors in Laboratory and Weathered Forest Soils",
    authors: "Hickenbottom, K., Lokesh, S., Pagilla, K., & Hanigan, D.",
    venue: "ACS ES&T Water",
    volume: "6(7)",
    pages: "4448-4459",
    doi: "10.1021/acsestwater.6c00306",
  },
  {
    year: 2026,
    title: "Enrichment of Disinfection Byproduct Precursors in Fire-Affected Soils from the 2025 Eaton Fire in Los Angeles, California",
    authors: "Lokesh, S., Borch, T., VanderRoest, J., Fettrow, S., & Hanigan, D.",
    venue: "ACS ES&T Water",
    volume: "6(7)",
    pages: "4254-4266",
    doi: "10.1021/acsestwater.6c00081",
  },
  {
    year: "Submitted / In Preparation",
    title: "Assessing Emissions from Wildland-Urban Interface Fires: Targeted PAH Contaminants from Structural Materials",
    authors: "Lokesh, S., Ridgway, K., Helfrich, A., Cast, L., L'Orange, C., Jathar, S., & Borch, T.",
    venue: "In Review, ES&T",
    volume: "-",
    pages: "-",
  },
  {
    year: "Submitted / In Preparation",
    title: "Emissions of Per- and Polyfluoroalkyl Substances (PFAS) from Household Material Combustion: Implications for Risk Assessment of Urban Fires",
    authors: "Lokesh, S., Ridgway, K., Helfrich, A., Cast, L., L'Orange, C., Jathar, S., & Borch, T.",
    venue: "Under Revision, ES&T",
    volume: "-",
    pages: "-",
  },
  {
    year: "Submitted / In Preparation",
    title: "Phase-Resolved Emissions of PFAS from Household Material Combustion: Insights into Partitioning and Combustion Dynamics",
    authors: "Lokesh, S., Ridgway, K., Helfrich, A., Cast, L., L'Orange, C., Jathar, S., & Borch, T.",
    venue: "In Preparation, lab work completed",
    volume: "-",
    pages: "-",
  },
  {
    year: "Submitted / In Preparation",
    title: "Non-Target analysis of PAH released from burning structural materials using 21T FT-ICR-MS",
    authors: "Lokesh, S., Ridgway, K., Helfrich, A., Cast, L., L'Orange, C., Jathar, S., & Borch, T.",
    venue: "In Preparation, lab work complete",
    volume: "-",
    pages: "-",
  },
  {
    year: "Submitted / In Preparation",
    title: "Microbial lignin degradation generates iron-binding ligands mediating soil carbon-mineral stabilization",
    authors: "Shahriar, A., Lokesh, S., Timilsina, A., Numan, T., Schramm, T., Stincone, P., Nyarko, L., Dewey, C., Petras, D., & Boiteau, R.",
    venue: "In Review, Nature Communications",
    volume: "-",
    pages: "-",
  },
  {
    year: "Submitted / In Preparation",
    title: "Identification of priority organofluorine compounds at Arctic formerly used defense sites",
    authors: "Radakovich A, Timilsina A, Lokesh S, Shahriar A, Demitrack ZE, Li Y, Albee N, Contreras E, Schwoerer T, Schmidt J, Li L, Tanentzap A, Hippel FV, Yang Y.",
    venue: "In Review, ES&T",
    volume: "-",
    pages: "-",
  },
  {
    year: 2026,
    title: "Decoupled mobilization of organic carbon and nitrogen in aged wildfire ashes",
    authors: "Numan, T., Shahriar, A., Lokesh, S., Timilsina, A., Basyal, S., Raeofy, Y., Zhao, Q., Richardson, J.A., Poulson, S.R., Samburova, V., & Yang, Y.",
    venue: "Chemosphere",
    volume: "405",
    pages: "144960",
    doi: "10.1016/j.chemosphere.2026.144960",
  },
  {
    year: 2026,
    title: "Unveiling Redox-Active Quinones in Pyrogenic Carbon by Nontargeted Metabolomics and Dual Chemical Tagging",
    authors: "Timilsina, A., Lokesh, S., Shahriar, A., Basyal, S., Stincone, P., Schramm, T., Berndt, A., Dewey, C., Boiteau, R., Petras, D., & Yang, Y.",
    venue: "Environmental Science & Technology",
    volume: "60(20)",
    pages: "14589-14600",
    doi: "10.1021/acs.est.6c01199",
  },
  {
    year: 2026,
    title: "Combustion Temperature and Molecular Weight Fractionation Provide Insights into Soil-Derived Wildfire-impacted Disinfection Byproduct Precursors",
    authors: "Hickenbottom, K., Hanson, B., Lokesh, S., Pagilla, K., Rosario-Ortiz, F., & Hanigan, D.",
    venue: "ACS ES&T Water",
    volume: "6(5)",
    pages: "2815-2826",
    doi: "10.1021/acsestwater.5c01310",
  },
  {
    year: 2026,
    title: "Recent improvements in understanding the impacts of wildfire on disinfection byproduct formation potential",
    authors: "Lokesh, S., Jathan, Y., Marchand, E.A., & Hanigan, D.",
    venue: "Current Opinion in Environmental Science & Health",
    volume: "49",
    pages: "100700",
    doi: "10.1016/j.coesh.2025.100700",
  },
  {
    year: 2026,
    title: "Mobility of Nitrogen in Ashes and Soils Impacted by Wildfires in northern California and Nevada",
    authors: "Numan, T., Shahriar, A., Lokesh, S., Timilsina, A., Basyal, S., Raeofy, Y., Poulson, S.R., Samburova, V., & Yang, Y.",
    venue: "Environ. Sci.: Processes Impacts",
    volume: "28(1)",
    pages: "196-203",
    doi: "10.1039/d5em00533g",
  },
  {
    year: 2025,
    title: "Post-Wildfire Mobilization of Organic Carbon",
    authors: "Numan, T., Lokesh, S., Shahriar, A., Timilsina, A., Lard, M.L., Clark, J., Raeofy, Y., Zhao, Q., Poulson, S.R., Verburg, P.S., Richardson, J.A., Cook, R.L., Samburova, V., & Yang, Y.",
    venue: "Soil Systems",
    volume: "9(1)",
    pages: "11",
    doi: "10.3390/soilsystems9010011",
  },
  {
    year: 2024,
    title: "Identifying Quinones in complex Aqueous Environmental Media (Biochar Extracts) through Tagging with Cysteine and Cysteine-Contained Peptides and High-Resolution Mass Spectrometry Analysis",
    authors: "Timilsina, A., Lokesh, S., Shahriar, A., Numan, T., Schramm, T., Stincone, P., Nyarko, L.K., Dewey, C., Boiteau, C., Petras, D., & Yang, Y.",
    venue: "Environmental Science & Technology",
    volume: "58(37)",
    pages: "16432-16443",
    doi: "10.1021/acs.est.4c04049",
  },
  {
    year: 2024,
    title: "High-Resolution Tandem Mass Spectrometry-Based Analysis of Model Lignin-Iron Complexes: Novel Pipeline and Complex Structures",
    authors: "Shahriar, A., Lokesh, S., Timilsina, A., Numan, T., Schramm, T., Stincone, P., Nyarko, L., Dewey, C., Petras, D., Boiteau, R., & Yang, Y.",
    venue: "Environmental Science & Technology",
    volume: "58 (34)",
    pages: "15090-15099",
    doi: "10.1021/acs.est.4c03608",
  },
  {
    year: 2023,
    title: "Critical Role of Semiquinones in Reductive Dehalogenation",
    authors: "Lokesh, S., Lard, M.L., Cook, R.L, & Yang Y.",
    venue: "Environmental Science & Technology",
    volume: "54",
    pages: "14218-14225",
    doi: "10.1021/acs.est.3c03981",
  },
  {
    year: 2023,
    title: "Investigation of 6PPD-quinone in rubberized asphalt concrete mixtures",
    authors: "Lokesh, S., Arunthavabalan, S., Hajj, E.Y., Hitti, E., & Yang, Y.",
    venue: "ACS Environmental Au",
    volume: "3(6)",
    pages: "336-341",
    doi: "10.1021/acsenvironau.3c00023",
  },
  {
    year: 2023,
    title: "Quantification of quinones in environmental media by chemical tagging with cysteine-containing peptides coupled to size exclusionary separation",
    authors: "*Timilsina, A., *Lokesh, S., Shahriar, A., Numan, T., & Yang, Y.",
    venue: "Analytical Chemistry",
    volume: "95(34)",
    pages: "12575-12579",
    doi: "10.1021/acs.analchem.3c01224",
  },
  {
    year: 2022,
    title: "Biochar-mediated abiotic and biotic degradation of halogenated organic contaminants-a review",
    authors: "Dorner, M., Lokesh, S., Yang, Y., & Behrens, S.",
    venue: "Science of the Total Environment",
    volume: "852",
    pages: "158381",
    doi: "10.1016/j.scitotenv.2022.158381",
  },
  {
    year: 2020,
    title: "Anaerobic dehalogenation by reduced aqueous biochars",
    authors: "Lokesh, S., Juhee, K., Zhou, Y.W., Wu, D.P., Pan, B., Wang, X.L., Behrens, S., Huang, C.H., & Yang, Y.",
    venue: "Environmental Science & Technology",
    volume: "54",
    pages: "15142-15150",
    doi: "10.1021/acs.est.0c05940",
  },
];

export default function PublicationsPage() {
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

  const groupedByYear = publicationData.reduce(
    (acc, pub) => {
      const year = String(pub.year);
      if (!acc[year]) acc[year] = [];
      acc[year].push(pub);
      return acc;
    },
    {} as Record<string, typeof publicationData>
  );

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => {
    if (a === "Submitted / In Preparation") return 1;
    if (b === "Submitted / In Preparation") return -1;
    return Number(b) - Number(a);
  });

  return (
    <div className={`min-h-screen ${shellClass}`}>
      <Header theme={theme} onToggleTheme={() => setTheme(isDark ? "light" : "dark")} />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 md:pt-14">
        <section className="pb-20">
          <div className="mb-12">
            <p className={`text-[11px] uppercase tracking-[0.28em] ${softText}`}>Research Output</p>
            <h1 className={`mt-3 text-4xl font-medium tracking-[-0.06em] md:text-5xl ${headingText}`}>Publications & Research</h1>
            <p className={`mt-4 max-w-2xl text-lg ${bodyText}`}>
              A comprehensive list of peer-reviewed publications and research contributions spanning environmental engineering, water systems, and emerging contaminant analysis.
            </p>
          </div>

          <div className="space-y-16">
            {sortedYears.map((year) => (
              <div key={year}>
                <h2 className={`mb-6 border-b pb-4 text-2xl font-medium tracking-[-0.04em] ${isDark ? "border-white/10 text-white" : "border-[#171411]/10 text-[#171411]"}`}>
                  {year}
                </h2>
                <div className="space-y-4">
                  {groupedByYear[year].map((pub, idx) => (
                    <article
                      key={`${year}-${idx}`}
                      className={`${glassCardClass} rounded-[1.2rem] p-6 transition duration-300 hover:shadow-[0_22px_48px_rgba(0,0,0,0.08)]`}
                    >
                      <div className={`mb-2 text-[10px] uppercase tracking-[0.2em] ${isDark ? "text-white/55" : "text-[#171411]/55"}`}>
                        {pub.venue}
                        {pub.volume && pub.volume !== "-" ? ` / Vol. ${pub.volume}` : ""}
                      </div>
                      <h3 className={`mb-3 text-lg font-medium leading-[1.4] tracking-[-0.03em] ${headingText}`}>
                        {pub.doi ? (
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-1 underline-offset-2 transition hover:opacity-70"
                          >
                            {pub.title}
                          </a>
                        ) : (
                          pub.title
                        )}
                      </h3>
                      <p className={`mb-2 text-sm ${bodyText}`}>{renderAuthors(pub.authors, isDark)}</p>
                      {pub.authors.includes("*") && (
                        <p className={`mb-2 text-xs italic ${isDark ? "text-white/50" : "text-[#171411]/50"}`}>* Co-first authors</p>
                      )}
                      {pub.pages && pub.pages !== "-" && <p className={`text-sm ${isDark ? "text-white/60" : "text-[#171411]/65"}`}>pp. {pub.pages}</p>}
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-16 rounded-[1.5rem] p-8 ${isDark ? "bg-white/5" : "bg-[#171411]/5"}`}>
            <p className={`text-center text-sm ${bodyText}`}>
              Total Publications: <span className={`font-semibold ${headingText}`}>{publicationData.length}</span>
            </p>
          </div>
        </section>
      </main>

      <footer className={`border-t py-8 ${isDark ? "border-white/10 bg-[#0d1116]/80 text-white/60" : "border-[#171411]/10 bg-[#f7f2ec]/90 text-[#171411]/65"}`}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm md:flex-row">
          <p>(c) 2026 Dr. Srinidhi Lokesh</p>
          <div className="flex gap-5 text-[10px] uppercase tracking-[0.2em]">
            <Link href="/#about" className={isDark ? "hover:text-white" : "hover:text-[#171411]"}>About</Link>
            <Link href="/#research-thrust" className={isDark ? "hover:text-white" : "hover:text-[#171411]"}>Research Thrust</Link>
            <Link href="/#contact" className={isDark ? "hover:text-white" : "hover:text-[#171411]"}>Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
