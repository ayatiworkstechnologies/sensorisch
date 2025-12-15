// app/portfolio/page.jsx
"use client";

import HeroComponent from "../components/Hero";
import FlavourFamiliesGrid from "../components/portfolio/FlavourFamiliesGrid";
import FinalCta from "../components/portfolio/FinalCta";
import FormatsGrid from "../components/portfolio/FormatsGrid";
import {
  DecorSection,
  DriedIngredientsSection,
  PremiumSpreadsSection,
  SystemsSection,
} from "../components/portfolio/PortfolioSections";
import NaturalColoursShowcase from "../components/portfolio/NaturalColoursShowcase";
import HeroContact from "../components/HeroContact";

export default function PortfolioPage() {
  return (
    <main className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 " />

      {/* <HeroComponent
        data={{
          eyebrow: "Our Portfolio",
          title: "Complete",
          highlight: "Flavour Solutions",
          blurb:
            "From high-impact flavours to natural colours and ready-to-use systems -discover our modular portfolio built for consistent performance across every application.",
          image: { src: "/banners/portfolio.png", alt: "Lab and product banner" },
          primary: { href: "/applications-solutions", label: "Request Full Catalogue" },
          secondary: { href: "/contact", label: "Get Samples" },
          scrollToId: "portfolio",
          enableTilt: true,
          showUnderline: true,
          showShimmer: true,
          showHalo: true,
          className: "",
          containerClassName: "section-container py-16 md:py-24",
        }}
      /> */}
      <HeroComponent
        data={{
          imageMobile: {
            src: "/banners/mob-banner.png",
            alt: "Mobile banner image",
          },
          imageDesktop: {
            src: "/banners/banner.png",
            alt: "Desktop banner image",
          },
          title: "Complete Flavour Solutions",
          subtitle:
            "From high-impact flavours to natural colours and ready-to-use systems -discover our modular portfolio built for consistent performance across every application.",
          primary: {
            label: "Request Full Catalogue",
            href: "/applications-solutions",
          },
          secondary: {
            label: "Get Samples",
            href: "/contact",
          },
          // scrollToId: "next-section",
        }}
      />
      {/* <HeroComponent
        data={{
          imageMobile: { src: "/banners/portfolio-mob.jpg", alt: "Mobile Banner" },
          imageDesktop: { src: "/banners/portfolio-web.jpg", alt: "Desktop Banner" },
      
          primary: {
            href: "/applications-solutions",
            label: "Request Full Catalogue"
          },
      
          secondary: {
            href: "/contact",
            label: "Get Samples"
          },
      
          scrollToId: "portfolio"
        }}
      /> */}
      <FlavourFamiliesGrid />
      <FormatsGrid />
      <NaturalColoursShowcase />
      <PremiumSpreadsSection />
      <DecorSection />
      <SystemsSection />
      {/* <DriedIngredientsSection /> */}
      {/* <FinalCta /> */}
      <HeroContact
        kicker="Get in touch"
        title="Explore Our Complete Portfolio"
        subtitle="From concept to completion, our comprehensive portfolio supports every stage of your product development journey."
        primary={{
          label: "Request Full Catalogue",
          href: "/applications0solutions",
        }}
        secondary={{ label: "Schedule Tasting Session", href: "/contact" }}
        imageSrc="/assets/get-in-touch.png"
        imageAlt="Glass beaker with plant"
      />
    </main>
  );
}
