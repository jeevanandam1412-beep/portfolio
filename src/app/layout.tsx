import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Santhana Krishnan G — Technical Manager & Valuation Expert Portfolio",
  description: "Portfolio of Santhana Krishnan G, Technical Manager specializing in property valuations, site inspections, vendor management, risk assessment, and banking compliance.",
  openGraph: {
    title: "Santhana Krishnan G — Technical Manager Portfolio",
    description: "Technical Manager specializing in site inspections, vendor management, internal technical audits, property valuation, and banking risk compliance.",
    siteName: "Santhana Krishnan G Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-[#020914] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
