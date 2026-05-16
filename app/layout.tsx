import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, DM_Mono } from "next/font/google";
import { siteConfig, socialLinks } from "@/lib/data";
import CursorProvider from "@/components/layout/CursorProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | Abhishek Agnihotri`,
  },
  description: siteConfig.description,
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Freelance Frontend Developer India",
    "Abhishek Agnihotri",
    "Web Developer",
    "JavaScript Developer",
  ],
  authors: [{ name: "Abhishek Agnihotri" }],
  creator: "Abhishek Agnihotri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhishek Agnihotri",
  jobTitle: "Frontend Developer",
  url: siteConfig.url,
  email: socialLinks.email,
  sameAs: [socialLinks.linkedin, socialLinks.github, socialLinks.twitter],
  knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "Frontend Development", "Web Development"],
  worksFor: { "@type": "Organization", name: "Freelance" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-text-primary font-body antialiased">
        <CursorProvider>
          <Navbar />
          {children}
          <Footer />
        </CursorProvider>
      </body>
    </html>
  );
}
