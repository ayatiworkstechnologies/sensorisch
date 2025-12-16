"use client";

import BespokeApplications from "../components/bespoke/BespokeApplications";
import BespokeProcessSection from "../components/bespoke/BespokeProcessSection";
import CompetitiveEdgeSection from "../components/bespoke/CompetitiveEdgeSection";
import CTA from "../components/bespoke/cta";
import PartnerSection from "../components/bespoke/PartnerSection";
import QualityComplianceSection from "../components/bespoke/QualityComplianceSection";
import HeroComponent from "../components/Hero";
import HeroCompnonet from "../components/Hero";
import HeroContact from "../components/HeroContact";

export default function bespoke() {
  return (
    <>
      {/* <HeroCompnonet
        data={{
          eyebrow: "Bespoke Solutions",
          title: "Tailored to Your ",
          highlight: "Unique Needs",
          blurb:
            "At Sensorisch, we know that every brand has a unique identity, and so should its flavours. Our bespoke solutions are designed to deliver exactly what your product requires from taste profile to technical format.",
          image: { src: "/banners/Bespoke.png", alt: "Lab and product banner" },
          primary: {
            href: "/applications-solutions",
            label: "Start Your Project",
          },
          secondary: { href: "/portfolio", label: "View Our Portfolio" },

          scrollToId: "bespoke",

          // toggles
          enableTilt: true,
          showUnderline: true,
          showShimmer: true,
          showHalo: true,

          // layout
          className: "bg-background",
          containerClassName: "section-container py-16 md:py-24",
        }}
      /> */}
      {/* <HeroComponent
              data={{
                imageMobile: { src: "/banners/bespoke-mob.jpg", alt: "Mobile Banner" },
                imageDesktop: { src: "/banners/bespoke-web.jpg", alt: "Desktop Banner" },
            
                primary: {
                  href: "/applications-solutions",
                  label: "Start Your Project"
                },
            
                secondary: {
                  href: "/portfolio",
                  label: "View Our Portfolio"
                },
            
                scrollToId: "bespoke"
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
          title: "Tailored to Your Unique Needs",
          subtitle:
            "At Sensorisch, we know that every brand has a unique identity, and so should its flavours. Our bespoke solutions are designed to deliver exactly what your product requires from taste profile to technical format.",
          primary: {
            label: "Start Your Project",
            href: "/applications-solutions",
          },
          secondary: {
            label: "View Our Portfolio",
            href: "/portfolio",
          },
          // scrollToId: "next-section",
        }}
      />
      <PartnerSection />
      <BespokeProcessSection />
      <BespokeApplications />
      <CompetitiveEdgeSection />
      <QualityComplianceSection />
      {/* <CTA /> */}
      <HeroContact
        kicker="Get in touch"
        title="Ready to Create Your Signature Flavour?"
        subtitle="Partner with Sensorisch for bespoke flavour solutions that differentiate your brand and delight your customers. Let's build something extraordinary together."
        primary={{
          label: "Start Your Custom Project",
          href: "/applications-solutions",
        }}
        secondary={{ label: "Explore Our Capabilities", href: "/contact" }}
        imageSrc="/assets/get-in-touch.png"
        imageAlt="Glass beaker with plant"
      />
    </>
  );
}
