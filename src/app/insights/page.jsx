export const metadata = {
  title: "Insights | Flavour Trends, R&D News & Industry Analysis - Sensorisch",
  description:
    "Stay ahead with the latest food and beverage formulation trends, insights, and company updates from the flavour architecture team at Sensorisch.",
};

import HeroComponent from "@/app/components/Hero";
import HeroContact from "@/app/components/HeroContact";

import NewsTrends from "@/app/components/insights/NewsTrends";

export default function Insights() {
  return (
    <>
      <HeroComponent
        data={{
          imageMobile: {
            src: "/banners/insights-mob.png",
            alt: "Mobile banner image",
          },
          imageDesktop: {
            src: "/banners/insights-web.png",
            alt: "Desktop banner image",
          },
          title: "The Intelligence Behind Better Products",
          // subtitle:
          //   "From high-impact flavours to natural colours and ready-to-use systems -discover our modular portfolio built for consistent performance across every application.",
          primary: {
            label: "Download Product Catalogue",
            href: "/applications-solutions",
          },
          // secondary: {
          //   label: "Request Samples",
          //   href: "/contact",
          // },
          titleColor: "text-primary",
          // scrollToId: "next-section",
        }}
      />
      <NewsTrends />

      <HeroContact
        kicker="Get in touch"
        title="Ready to put these insights to work?"
        subtitle="Let’s collaborate on your next breakthrough. Our team is ready to help you translate trends into successful products."
        primary={{ label: "Start Your Project", href: "/contact" }}
        // secondary={{ label: "View Our Portfolio", href: "/portfolio" }}
        imageSrc="/assets/get-in-touch.png"
        imageAlt="Glass beaker with plant"
      />
    </>
  );
}
