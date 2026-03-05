import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://eliftechnologies.co.za"),
  title: {
    default: "Elif Technologies | Web & Directory Solutions",
    template: "%s | Elif Technologies",
  },
  description:
    "Websites, business directories, and online visibility solutions for growing businesses in South Africa.",

  keywords: [
    "web development South Africa",
    "business directories",
    "website design Johannesburg",
    "SEO setup services",
    "small business websites",
    "directory listings South Africa",
  ],

  authors: [{ name: "Elif Technologies" }],
  creator: "Elif Technologies",
  publisher: "Elif Technologies",

  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://eliftechnologies.co.za",
    title: "Elif Technologies | Web & Directory Solutions",
    description:
      "Professional websites and directory visibility solutions to help businesses grow online.",
    siteName: "Elif Technologies",
     images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Elif Technologies",
    },
  ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Elif Technologies | Web & Directory Solutions",
    description:
      "Professional websites and directory visibility solutions for growing businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}