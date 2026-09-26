import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import CommandPalette from "@/components/ui/CommandPalette";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#06080E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nexora — We build what your business needs next",
  description:
    "Nexora is a full-service technology partner helping businesses build, automate and scale with custom software, AI, automation, data and cloud technology.",
  keywords: [
    "technology partner",
    "software engineering",
    "enterprise AI",
    "workflow automation",
    "custom CRM",
    "mobile app development",
    "cloud infrastructure",
    "Nexora"
  ],
  authors: [{ name: "Nexora" }],
  openGraph: {
    title: "Nexora — Full-Service Technology & AI Solutions",
    description:
      "We build what your business needs next. Custom software, AI, workflow automation, and cloud platforms.",
    url: "https://nexora.agency",
    siteName: "NEXORA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora — Full-Service Technology & AI Solutions",
    description:
      "We build what your business needs next. Software · AI · Automation · Data · Cloud",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#06080E] text-slate-100 antialiased selection:bg-blue-600/30 selection:text-white">
        <CustomCursor />
        <CommandPalette />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
