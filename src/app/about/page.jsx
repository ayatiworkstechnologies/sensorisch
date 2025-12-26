"use client";

import AboutSensorisch from "../components/aboutpage/AboutSensorisch";
import CapabilitiesSection from "../components/aboutpage/CapabilitiesSection";
import CompanyProfileCTA from "../components/aboutpage/CompanyProfileCTA";
import SetsUsApartAndMarkets from "../components/aboutpage/SetsUsApartAndMarkets";
import ValuesSection from "../components/aboutpage/ValuesSection";
import VisionMission from "../components/aboutpage/VisionMission";
import HeroComponent from "../components/Hero";
import HeroContact from "../components/HeroContact";

export default function AboutUS() {
  return (
    <>
      {/* <HeroCompnonet
        data={{
          eyebrow: "About Sensorisch",
          title: "Science - Led Innovation Meets",
          highlight: "Culinary Craft",
          blurb:
            "We blend rigorous R&D with culinary artistry to create end-to-end taste and aroma experiences that make everyday products extraordinary.",
          image: { src: "/banners/about.jpg", alt: "Lab and product banner" },

          scrollToId: "our-story",

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
          title: "Science - Led Innovation Meets Culinary Craft",
          // subtitle:
          //   "We blend rigorous R&D with culinary artistry to create end-to-end taste and aroma experiences that make everyday products extraordinary.",
          primary: {
            label: "Start Your Project",
            href: "/contact",
          },
          titleColor : "text-primary",
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
      {/* <HeroSection /> */}
      <AboutSensorisch />
      <VisionMission />
      <ValuesSection />
      <CapabilitiesSection />
      <SetsUsApartAndMarkets />
      {/* <CompanyProfileCTA /> */}
      <HeroContact
        kicker="Get in touch"
        title="Company Profile"
        subtitle="Download our comprehensive company profile to learn more about our capabilities, processes, and how we can support your product development goals."
        // primary={{ label: "Start Your Project", href: "/contact" }}
        // secondary={{ label: "View Our Portfolio", href: "/portfolio" }}
        imageSrc="/assets/get-in-touch.png"
        imageAlt="Glass beaker with plant"
      />
    </>
  );
}
