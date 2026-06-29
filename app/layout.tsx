import type { Metadata } from "next";
import { Raleway, Caveat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "./_components/SmoothScroll";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://your-domain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Lawctopus Law School | Contract Drafting & Freelancing",
    template: "%s | Lawctopus Law School",
  },

  description:
    "Join Lawctopus Law School's live Contract Drafting & Freelancing course. Learn contract drafting from industry experts through live sessions, practical assignments, mentorship, and real-world projects.",

  keywords: [
    "Contract Drafting Course",
    "Lawctopus Law School",
    "Legal Drafting",
    "Freelancing for Lawyers",
    "Contract Negotiation",
    "Commercial Contracts",
    "Law Course",
    "Legal Education",
    "Online Law Course",
    "Live Contract Drafting Course",
    "Corporate Law",
    "Legal Skills",
    "Law Students",
    "Lawyers",
    "Contract Law",
  ],

  authors: [
    {
      name: "Lawctopus Law School",
    },
  ],

  creator: "Lawctopus Law School",

  publisher: "Lawctopus Law School",

  applicationName: "Lawctopus Law School",

  alternates: {
    canonical: "/",
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

  openGraph: {
    title:
      "Mastering Contract Drafting & Freelancing | Lawctopus Law School",

    description:
      "Master contract drafting through live classes, expert mentors, practical assignments, freelancing sessions, and real-world legal projects.",

    url: siteUrl,

    siteName: "Lawctopus Law School",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lawctopus Law School - Contract Drafting Course",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Mastering Contract Drafting & Freelancing | Lawctopus Law School",

    description:
      "Learn Contract Drafting with India's leading legal educators through live expert sessions and practical assignments.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        raleway.variable,
        caveat.variable,
        "font-sans"
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#F8F7F4] text-black">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}