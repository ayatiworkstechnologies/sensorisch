const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sensorisch",
  "url": "https://www.sensorisch.com/about",
  "logo": "https://www.sensorisch.com/web_logo.png",
  "description": "Sensorisch is a B2B flavour and ingredient formulation house with R&D labs in India and GCC, specialising in scalable food and beverage solutions."
};

export const metadata = {
  title:
    "About Sensorisch | Science-Led Flavour Formulation House, India & GCC",
  description:
    "Sensorisch is a B2B flavour and ingredient formulation house with R&D labs in India and GCC, specialising in scalable food and beverage solutions.",
};

import AboutSensorisch from "../components/about/AboutSensorisch";
import CapabilitiesSection from "../components/about/CapabilitiesSection";
import SetsUsApartAndMarkets from "../components/about/SetsUsApartAndMarkets";
import ValuesSection from "../components/about/ValuesSection";
import VisionMission from "../components/about/VisionMission";
import HeroComponent from "../components/Hero";
import HeroContact from "../components/HeroContact";
import TestimonialSection from "../components/about/TestimonialSection";

export default function AboutUS() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <HeroComponent
        data={{
          imageMobile: {
            src: "/banners/about-mob.jpg",
            alt: "Mobile banner image",
          },
          imageDesktop: {
            src: "/banners/about-web.jpg",
            alt: "Desktop banner image",
          },
          title:
            "Science-Led Innovation. Culinary Craft. Market-Ready Results.",
          // subtitle:
          //   "We blend rigorous R&D with culinary artistry to create end-to-end taste and aroma experiences that make everyday products extraordinary.",
          primary: {
            label: "Start Your Project",
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
      {/* <HeroComponent
        data={{
          imageMobile: { src: "/banners/about-mob.jpg", alt: "Mobile Banner" },
          imageDesktop: { src: "/banners/about-web.jpg", alt: "Desktop Banner" },
      
          // primary: {
          //   href: "/appointment",
          //   label: "Book Appointment"
          // },
      
          // secondary: {
          //   href: "/contact",
          //   label: "Contact Us"
          // },
      
          scrollToId: "our-story"
        }}
      /> */}

      <AboutSensorisch />
      <VisionMission />
      <ValuesSection />
      <CapabilitiesSection />
      <SetsUsApartAndMarkets />
      <TestimonialSection />
      {/* <CompanyProfileCTA /> */}
      <HeroContact
        kicker="Partner With Us"
        title="Ready to bring your next flavour to life?"
        // subtitle="Wherever you are, our flavour architects are within reach. Partner with us for precision-driven, ingredient-led solutions that perform at scale."
        primary={{ label: "Start Your Project", href: "/contact" }}
        // secondary={{ label: "View Our Portfolio", href: "/portfolio" }}
        imageSrc="/assets/get-in-touch.png"
        imageAlt="Food scientist examining flavour extract in Sensorisch R&D lab"
      />
    </>
  );
}
