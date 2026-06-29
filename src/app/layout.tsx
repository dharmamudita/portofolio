import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dharma Mudita | Full-Stack Developer & Creative Technologist",
  description:
    "Portfolio of Dharma Mudita — Full-Stack Web Developer, AI & ML Enthusiast, Mobile App Developer, Content Creator & Photographer based in Indonesia. Building digital experiences that inspire.",
  keywords: [
    "Dharma Mudita",
    "Full-Stack Developer",
    "Web Developer",
    "AI",
    "Machine Learning",
    "Mobile App Developer",
    "Portfolio",
    "Indonesia",
  ],
  authors: [{ name: "Dharma Mudita" }],
  openGraph: {
    title: "Dharma Mudita | Full-Stack Developer & Creative Technologist",
    description:
      "Building digital experiences that inspire. Full-Stack Developer, AI/ML Enthusiast, and Creative Technologist.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
