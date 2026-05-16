import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans, DM_Mono, Oxanium } from "next/font/google";
import { siteConfig, socialLinks } from "@/lib/data";
import CursorProvider from "@/components/layout/CursorProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundWrapper from "@/components/ui/BackgroundWrapper";
import PageLoader from "@/components/ui/PageLoader";
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

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | Abhishek Agnihotri`,
  },
  description: siteConfig.description,
  keywords: [
    "Abhishek Agnihotri",
    "Software Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "AI Integration Developer",
    "Freelance Software Developer",
    "Freelance Developer India",
    "Web Developer India",
    "Full Stack Developer",
    "JavaScript Developer",
    "OpenAI API Developer",
    "Prompt Engineering",
    "Frontend Developer",
    "Portfolio",
  ],
  authors: [{ name: "Abhishek Agnihotri", url: siteConfig.url }],
  creator: "Abhishek Agnihotri",
  publisher: "Abhishek Agnihotri",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Abhishek Agnihotri — Software Developer | React & Next.js",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@Abhishe86339503",
    images: [`${siteConfig.url}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/* ── Structured data: Person + WebSite ── */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: "Abhishek Agnihotri",
  jobTitle: "Software Developer",
  url: siteConfig.url,
  email: socialLinks.email,
  image: `${siteConfig.url}/assets/heroImage.png`,
  description: siteConfig.description,
  sameAs: [socialLinks.linkedin, socialLinks.github, socialLinks.twitter],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "AI Integration",
    "OpenAI API",
    "Prompt Engineering",
    "GraphQL",
    "Tailwind CSS",
    "Web Development",
    "Software Development",
  ],
  worksFor: { "@type": "Organization", name: "Freelance" },
  address: { "@type": "PostalAddress", addressCountry: "IN" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: "Abhishek Agnihotri — Software Developer Portfolio",
  url: siteConfig.url,
  description: siteConfig.description,
  author: { "@id": `${siteConfig.url}/#person` },
  inLanguage: "en-US",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} ${dmMono.variable} ${oxanium.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-background text-text-primary font-body antialiased">
        <PageLoader />
        <BackgroundWrapper />
        <CursorProvider>
          <div className="relative z-10">
            <Navbar />
            {children}
            <Footer />
          </div>
        </CursorProvider>
      </body>
    </html>
  );
}
