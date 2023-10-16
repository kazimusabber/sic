"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "@/scss/theme.scss";
import { Inter, Manrope } from "next/font/google";

export const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.variable}>
        <Navbar />
        <main className={manrope.variable}>{children}</main>
        <Footer className={manrope.variable} />
      </body>
    </html>
  );
}
