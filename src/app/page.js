const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sensorisch",
  "url": "https://www.sensorisch.com",
  "logo": "https://www.sensorisch.com/web_logo.png",
  "description": "Partner with Sensorisch, a specialist B2B formulation house engineering precision flavours and ingredients for institutional food, dairy, and beverage brands."
};

export const metadata = {
  title: "Sensorisch | Science-Led Flavour & Ingredient Solutions for Food & Beverage",
  description: "Partner with Sensorisch, a specialist B2B formulation house engineering precision flavours and ingredients for institutional food, dairy, and beverage brands.",
};

import HeroComponent from "./components/Hero";
import HeroContact from "./components/HeroContact";
import HomeHeroComponent from "./components/HomeHeroComponent";
import ApplicationExpertiseHover from "./components/home/ApplicationExpertiseHover";
import PromoSection from "./components/home/CheesePromoSection";
import ExploreCreateConfirmGrow from "./components/home/ExploreCreateConfirmGrow";
import FromBriefToScale from "./components/home/FromBriefToScale";
import QualityResponsibility from "./components/home/QualityResponsibility";
import WhyChooseSection from "./components/home/whychooseSection";
import ClientLogos from "./components/home/ClientLogos";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
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



      <WhyChooseSection />
      {/* <ClientLogos /> */}
      <PromoSection />
      <ApplicationExpertiseHover />
      <FromBriefToScale />
      <QualityResponsibility />
      <ExploreCreateConfirmGrow />
      <HeroContact
        kicker="Let's Build Together"
        title="Your next breakthrough flavour is one conversation away."
        subtitle="Wherever you are, our flavour architects are within reach. Partner with us for precision-driven, ingredient-led solutions that perform at scale."
        primary={{ label: "Start Your Project", href: "/contact" }}
        secondary={{ label: "View Our Projects", href: "/applications-solutions" }}
        imageSrc="/assets/home-banner-1.jpg"
        imageAlt="Sensorisch flavour formulation lab with botanical extracts"
      />
    </>
  );
}
