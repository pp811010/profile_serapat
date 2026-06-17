import type { Metadata } from "next";
import { Bodoni_Moda, Italiana, Roboto } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italiana",
});

export const metadata: Metadata = {
  title: "Serapat Ratanapachai Portfolio",
  description: "Full-Stack Developer Portfolio",
  icons: { icon: '/logo.png' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${roboto.variable} ${italiana.variable}`}>
      <body className="font-sans antialiased bg-white">
        <LenisProvider>
          <header>
            <Navbar />
         </header>
          {children}
          <Footer />
          <footer>
          <Footer />
        </footer>
        </LenisProvider>
      </body>
    </html>
  );
}