import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Pure Finest Inc.",
  description:
    "Pure Finest Inc. is a company dedicated to providing high-quality products and services to its customers.",
  icons: [
    {
      sizes: "64x64 32x",
      type: "image/x-icon",
      url: "/favicon.ico",
      rel: "icon",
    },
    {
      url: "https://pure-finest-kappa.vercel.app/cta.jpg",
      type: "image/png",
      rel: "apple-touch-icon",
    },
  ],
  applicationName: "Pure Finest Inc",
  authors: [{ name: "Olayinka Ayodele", url: "https://olayinka.codes" }],
  generator: "Next.js",
  keywords: [
    "Pure Finest Inc",
    "High-Quality Products",
    "Customer Service",
    "Premium Services",
    "Quality Assurance",
    "Trusted Company",
    "Reliable Products",
    "Professional Services",
    "Customer Satisfaction",
    "Innovative Solutions",
    "Expert Team",
    "Industry Leader",
    "Top Quality",
    "Excellence",
    "Commitment to Quality",
    "Customer Focused",
    "Pure Finest",
    "Finest Products",
    "Finest Services",
    "Pure Quality",
    "Pure Excellence",
    "Pure Commitment",
    "Pure Innovation",
  ],
  referrer: "origin",
  creator: "Olayinka Ayodele",
  publisher: "Vercel",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    nosnippet: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      notranslate: false,
    },
  },
  openGraph: {
    type: "website",
    url: "https://pure-finest-kappa.vercel.app/",
    title: "Pure Finest Inc.",
    description: "Pure Finest Inc. is a company dedicated to providing high-quality products and services to its customers.",
    siteName: "Pure Finest Inc.",
    images: [
      {
        url: "https://pure-finest-kappa.vercel.app/cta.jpg",
        width: 1200,
        height: 630,
        alt: "Pure Finest Inc.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@theactualdev",
    creator: "@theactualdev",
    title: "Pure Finest Inc.",
    description: "Pure Finest Inc. is a company dedicated to providing high-quality products and services to its customers.",
    images: "https://pure-finest-kappa.vercel.app/cta.jpg",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
