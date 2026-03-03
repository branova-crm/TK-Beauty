import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ConsentManager from "@/components/ConsentManager";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TK BEAUTYSTUDIO | Premium Beauty Studio Nürnberg",
  description: "Exklusive Behandlungen für Ihre Schönheit: Dauerhafte Haarentfernung mit Alexandrit Laser, Microneedling & Kosmetik in Nürnberg.",
  icons: {
    icon: "/images/Favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <ConsentManager />
        <Analytics />
      </body>
    </html>
  );
}
