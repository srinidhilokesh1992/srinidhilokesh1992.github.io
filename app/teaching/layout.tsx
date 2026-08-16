import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teaching",
  description: "Courses, instructional roles, and teaching philosophy of Dr. Srinidhi Lokesh in environmental engineering and analytical chemistry.",
};

export default function TeachingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
