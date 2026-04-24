import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// GSC verification loaded from env
const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  ...(gscVerification && { verification: { google: gscVerification } }),
  metadataBase: new URL("https://socialmediatools.one"),
  title: {
    default: "Social Media Tools - Free Online Tools for Social Media | SocialMediaTools.one",
    template: "%s | SocialMediaTools.one",
  },
  description:
    "Free online social media tools: hashtag generator, caption generator, Instagram bio generator, YouTube tag generator, Twitter character counter, LinkedIn formatter, and image resizer.",
  keywords: [
    "social media tools",
    "hashtag generator",
    "caption generator",
    "instagram bio generator",
    "youtube tag generator",
    "twitter character counter",
    "linkedin post formatter",
    "social media image resizer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://socialmediatools.one",
    siteName: "SocialMediaTools.one",
    title: "Social Media Tools - Free Online Tools for Social Media",
    description:
      "Free online social media tools: hashtag generator, caption generator, Instagram bio generator, YouTube tag generator, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Tools - Free Online Tools for Social Media",
    description:
      "Free online social media tools: hashtag generator, caption generator, Instagram bio generator, YouTube tag generator, and more.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://socialmediatools.one" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme:dark)").matches)){d.classList.add("dark")}else{d.classList.remove("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--color-bg-primary)", color: "var(--color-text-primary)" }}>
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
