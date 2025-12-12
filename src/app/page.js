"use client";

import HeroComponent from "./components/Hero";
import HeroContact from "./components/HeroContact";
import ApplicationExpertise from "./components/homepage/ApplicationExpertise";
import ApplicationExpertiseHover from "./components/homepage/ApplicationExpertiseHover";
import BriefToScale from "./components/homepage/BriefToScale";
import PromoSection from "./components/homepage/CheesePromoSection";
import CTAWideBanner from "./components/homepage/CTAWideBanner";
import ExploreCreateConfirmGrow from "./components/homepage/ExploreCreateConfirmGrow";
import FromBriefToScale from "./components/homepage/FromBriefToScale";
import QualityResponsibility from "./components/homepage/QualityResponsibility";
import WhyChooseSection from "./components/homepage/whychooseSection";

export default function Home() {
  return (
    <>
      {/* <HeroCompnonet
        data={{
          // eyebrow: "Flavours & Fragrances. Engineered for Impact.",
          title: "Make Everyday Products Feel",
          highlight: "Extraordinary",
          blurb:
            "Make everyday products feel extraordinary. Partner with us to create repeat-worthy taste and aroma through science-led innovation, application-ready systems, and rigorous execution that scales consistently.",

          primary: { href: "/applications-solutions", label: "Explore Solutions" },
          secondary: { href: "/contact", label: "Request Samples" },

          image: { src: "/banners/home.jpg", alt: "Lab and product banner" },

          scrollToId: "why-sensorisch",

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
    imageMobile: { src: "/banners/home-mob.jpg", alt: "Mobile Banner" },
    imageDesktop: { src: "/banners/banner.png", alt: "Desktop Banner" },

    primary: {
      href: "/contact",
      label: "Book Appointment"
    },

    secondary: {
      href: "/contact",
      label: "Contact Us"
    },

    scrollToId: "why-sensorisch"
  }}
/> */}
 <HeroComponent
        data={{
          imageMobile: {
            src: "/banners/home-mobile.jpg",
            alt: "Mobile banner image",
          },
          imageDesktop: {
            src: "/banners/banner.png",
            alt: "Desktop banner image",
          },
          title: "Make Everyday Products Feel Extraordinary",
          subtitle: "Make everyday products feel extraordinary. Partner with us to create repeat-worthy taste and aroma through science-led innovation, application-ready systems, and rigorous execution that scales consistently.",
          primary: {
            label: "Start Your Project",
            href: "/contact",
          },
          secondary: {
            label: "View Portfolio",
            href: "/portfolio",
          },
          // scrollToId: "next-section",
        }}
      />


      
      {/* <HeroSection /> */}
      <WhyChooseSection />
      <PromoSection />
      {/* <ApplicationExpertise /> */}
      <ApplicationExpertiseHover />
      <FromBriefToScale />
      {/* <BriefToScale /> */}
      <QualityResponsibility />
      <ExploreCreateConfirmGrow />
      {/* <CTAWideBanner /> */}
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
