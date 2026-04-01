import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import SplashLoader from "./components/SplashLoader";
import AnimatedCursor from "./components/AnimatedCursor";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sensorisch | Science-Led Flavour & Ingredient Solutions for Food & Beverage",
  description: "Sensorisch is a specialist B2B formulation house - flavour and ingredient architects dedicated exclusively to the institutional food and beverage sector. Our precision-engineered ingredients serve the bakery, confectionery, beverage, dairy, hospitality and emerging nutraceutical industries, with an unwavering focus on performance, stability and clean-label integrity. At the intersection of rigorous science and sensory delight, we craft flavours that don’t just taste good, they perform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Favicons for all platforms */}
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                <Toaster position="top-right" />

          <SplashLoader ms={3000} />
        {/* <AnimatedCursor /> */}
        <Header />
        <ScrollButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
