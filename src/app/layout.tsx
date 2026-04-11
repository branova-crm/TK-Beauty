import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ConsentManager from "@/components/ConsentManager";

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
  verification: {
    google: "T2AgaDjhWQSsX1qTw3HOQtfo5YTih6_3BkWvgPLpnsU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <ConsentManager />
        <Script 
          id="ccm19-script"
          src="https://cloud.ccm19.de/app.js?apiKey=ff7e73e38d81af3c82275cc24475dce7b5a3fcc5dd5a34fe&domain=69da519c17dba216530dcf02&lang=de_DE" 
          strategy="afterInteractive"
          referrerPolicy="origin"
        />
      </body>
    </html>
  );
}
