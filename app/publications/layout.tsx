import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description: "Peer-reviewed publications and research contributions by Dr. Srinidhi Lokesh spanning environmental engineering, water systems, and emerging contaminant analysis.",
};

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
