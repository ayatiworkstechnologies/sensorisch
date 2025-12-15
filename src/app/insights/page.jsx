"use client";

import HeroComponent from "../components/Hero";
import HeroCompnonet from "../components/Hero";
import HeroContact from "../components/HeroContact";
import CTA from "../components/Insights/FinalCta";
import IndustryResources from "../components/Insights/IndustryResources";
import InsightsExplorer from "../components/Insights/InsightsExplorer";
import LatestInsights from "../components/Insights/LatestInsights";
import NewsTrends from "../components/Insights/NewsTrends";
import PressUpdates from "../components/Insights/PressUpdates";

export default function Insights() {
  return (
    <>
      {/* <HeroCompnonet
        data={{
          eyebrow: "News & Trends",
          title: "Industry ",
          highlight: "Insights & Updates",
          blurb:
            "Stay ahead of flavour and fragrance trends with our expert insights, industry analysis, and company updates from the Sensorisch team.",
          image: { src: "/banners/Insights.png", alt: "Lab and product banner" },
          scrollToId: "insights",

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
          imageMobile: { src: "/banners/insights-mob.jpg", alt: "Mobile Banner" },
          imageDesktop: { src: "/banners/insights-web.jpg", alt: "Desktop Banner" },
      
          primary: {
            href: "/applications-solutions",
            label: "Request Full Catalogue"
          },
      
          secondary: {
            href: "/contact",
            label: "Request Samples"
          },
      
          scrollToId: "insights"
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
          title: "Industry Insights & Updates",
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
      <NewsTrends />
      {/* <InsightsExplorer /> */}
      {/* <LatestInsights /> */}
      {/* <PressUpdates /> */}
      {/* <IndustryResources /> */}
      {/* <CTA /> */}
      <HeroContact
        kicker="Get in touch"
        title="Expert guidance, just a message away"
        subtitle="No matter your location, our experts are within reach. Get in touch for sustainable, ingredient-driven solutions."
        primary={{ label: "Start Your Project", href: "/contact" }}
        secondary={{ label: "View Our Portfolio", href: "/portfolio" }}
        imageSrc="/assets/get-in-touch.png"
        imageAlt="Glass beaker with plant"
      />
    </>
  );
}
