"use client";

import HeroComponent from "./components/Hero";
import HeroContact from "./components/HeroContact";
import HomeHeroComponent from "./components/HomeHeroComponent";
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

      <HomeHeroComponent
        data={{
          video: {
            src: "/hero.mp4",
            poster: "/images/social-poster.jpg",
          },
          title: "Where Science",
          title1: "Meets Senses.",
          // subtitle: "Make everyday products feel extraordinary. Partner with us to create repeat-worthy taste and aroma through science-led innovation, application-ready systems, and rigorous execution that scales consistently.",
          primary: {
            label: "About Us",
            href: "/about",
          },
          secondary: {
            label: "Contact Us",
            href: "/contact",
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
