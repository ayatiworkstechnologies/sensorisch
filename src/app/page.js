export const metadata = {
  title: "Sensorisch | Science-Led Flavour & Ingredient Solutions for Food & Beverage",
  description: "Sensorisch is a specialist B2B formulation house - flavour and ingredient architects dedicated exclusively to the institutional food and beverage sector. Our precision-engineered ingredients serve the bakery, confectionery, beverage, dairy, hospitality and emerging nutraceutical industries, with an unwavering focus on performance, stability and clean-label integrity.",
};

import HeroComponent from "./components/Hero";
import HeroContact from "./components/HeroContact";
import HomeHeroComponent from "./components/HomeHeroComponent";
import ApplicationExpertise from "./components/home/ApplicationExpertise";
import ApplicationExpertiseHover from "./components/home/ApplicationExpertiseHover";
import BriefToScale from "./components/home/BriefToScale";
import PromoSection from "./components/home/CheesePromoSection";
import CTAWideBanner from "./components/home/CTAWideBanner";
import ExploreCreateConfirmGrow from "./components/home/ExploreCreateConfirmGrow";
import FromBriefToScale from "./components/home/FromBriefToScale";
import QualityResponsibility from "./components/home/QualityResponsibility";
import WhyChooseSection from "./components/home/whychooseSection";

export default function Home() {
  return (
    <>

      <HomeHeroComponent
        data={{
          video: {
            src: "/hero.mp4",
            poster: "/images/social-poster.jpg",
          },
          title: "Where Science Meets Senses - Precision Flavours Engineered for Performance. ",
          // subtitle: "Precision Flavours Engineered for Performance",
          primary: {
            label: "Start a Project",
            href: "/contact",
          },
          secondary: {
            label: "Explore Our Solutions",
            href: "/applications-solutions",
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
        kicker="Let's Build Together"
        title="Your next breakthrough flavour is one conversation away."
        subtitle="Wherever you are, our flavour architects are within reach. Partner with us for precision-driven, ingredient-led solutions that perform at scale."
        primary={{ label: "Start Your Project", href: "/contact" }}
        secondary={{ label: "View Our Projects", href: "/applications-solutions" }}
        imageSrc="/assets/get-in-touch.png"
        imageAlt="Sensorisch flavour formulation lab with botanical extracts"
      />
    </>
  );
}
