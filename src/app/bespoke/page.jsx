export const metadata = {
  title:
    "Bespoke Flavour Development | Custom Ingredient Solutions — Sensorisch",
  description:
    "Partner with Sensorisch for custom flavour and ingredient architectures. We co-innovate scalable, precision-engineered solutions tailored to your unique product requirements.",
};

import BespokeApplications from "../components/bespoke/BespokeApplications";
import BespokeProcessSection from "../components/bespoke/BespokeProcessSection";
import CompetitiveEdgeSection from "../components/bespoke/CompetitiveEdgeSection";
import CTA from "../components/bespoke/cta";
import PartnerSection from "../components/bespoke/PartnerSection";
import QualityComplianceSection from "../components/bespoke/QualityComplianceSection";
import HeroComponent from "../components/Hero";
import HeroContact from "../components/HeroContact";

export default function bespoke() {
  return (
    <>
      <HeroComponent
        data={{
          imageMobile: {
            src: "/banners/bespoke-mob.png",
            alt: "Mobile banner image",
          },
          imageDesktop: {
            src: "/banners/bespoke-web.png",
            alt: "Desktop banner image",
          },
          title: "Your Flavour. Your Brand. Exclusively Yours.",
          // subtitle:
          //   "At Sensorisch, we know that every brand has a unique identity, and so should its flavours. Our bespoke solutions are designed to deliver exactly what your product requires from taste profile to technical format.",
          primary: {
            label: "Tell Us About Your Brief",
            href: "/contact",
          },
          titleColor: "text-primary",
          // secondary: {
          //   label: "View Our Portfolio",
          //   href: "/portfolio",
          // },
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
        title="Let's build a flavour your customers won't forget."
        subtitle="Bespoke development with Sensorisch means exclusive formulations, full IP ownership, and a dedicated R&D team working solely on your brief. Every flavour we build is tested, validated, and ready to scale."
        primary={{
          label: "Start Your Custom Project",
          href: "/contact",
        }}
        secondary={{
          label: "Explore Our Capabilities",
          href: "/applications-solutions",
        }}
        imageSrc="/assets/get-in-touch.png"
        imageAlt="Glass beaker with plant"
      />
    </>
  );
}
