import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { BIZ } from "@/lib/business";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileDock } from "@/components/site/MobileDock";
import { localBusinessJsonLd } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "optional", adjustFontFallback: true });
// Jakarta = display-font for headlines (LCP target). Use "optional" so the
// fallback paint is locked-in for the LCP — eliminates the font-swap repaint
// that was pushing mobile LCP to ~2.9s. Jakarta still loads in the background
// and applies on subsequent page views from cache.
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "optional", adjustFontFallback: true });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "optional", adjustFontFallback: true });

export const metadata: Metadata = {
  metadataBase: new URL(BIZ.url),
  title: {
    default: `${BIZ.name} — Metro Detroit Painting Company`,
    template: `%s — ${BIZ.name}`,
  },
  description:
    `${BIZ.name} provides interior, exterior, cabinet, commercial, trim, ceiling, and staining services across Metro Detroit. Free estimates — call ${BIZ.phone}.`,
  keywords: [
    "painting company Detroit",
    "interior painting Metro Detroit",
    "exterior painting Michigan",
    "cabinet painting Metro Detroit",
    "commercial painting Wayne County",
  ],
  openGraph: {
    type: "website",
    siteName: BIZ.name,
    url: BIZ.url,
    locale: "en_US",
    title: `${BIZ.name} — Metro Detroit Painting Company`,
    description:
      "Interior, exterior, cabinet, commercial, trim, ceiling, and staining services across Wayne, Oakland & Macomb counties.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${BIZ.name} — Metro Detroit painting company`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BIZ.name} — Metro Detroit painting company`,
    description: "Painting for Metro Detroit homes, businesses, rentals, cabinets, trim, and exterior surfaces.",
    images: ["/opengraph-image.png"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0E12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={`${inter.variable} ${jakarta.variable} ${mono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'if(location.protocol==="http:"&&location.hostname==="bhpaintingmetrodetroit.com"){location.replace("https://"+location.host+location.pathname+location.search+location.hash)}',
          }}
        />
      </head>
      <body className="font-sans bg-ink-950 text-ink-50 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileDock />
        <Toaster position="top-center" theme="dark" richColors />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
      </body>
    </html>
  );
}
