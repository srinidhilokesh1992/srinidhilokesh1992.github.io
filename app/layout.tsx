import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: {
    default: "Dr. Srinidhi Lokesh",
    template: "%s | Dr. Srinidhi Lokesh",
  },
  description: "Environmental engineering researcher focused on water systems and emerging contaminants",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
