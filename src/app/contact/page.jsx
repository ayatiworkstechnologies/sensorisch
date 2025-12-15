"use client";

import ContactPage from "../components/contactpage/ContactPage";
import FAQSection from "../components/contactpage/FAQSection";
import FormSection from "../components/contactpage/FormSection";
import LocationsPanel from "../components/contactpage/LocationsPanel";
import MethodsSection from "../components/contactpage/MethodsSection";
import HeroComponent from "../components/Hero";

export default function ContactUs() {
  return (
    <>
      {/* <HeroCompnonet
        data={{
          eyebrow: "Contact Us",
          title: "Let's Create Something ",
          highlight: "Extraordinary",
          blurb:
            "Ready to transform your products with science-led flavour solutions? Our experts are here to guide you from concept to market success.",
          image: { src: "/banners/contact.png", alt: "Lab and product banner" },
         

          scrollToId: "contact",

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
                  src: "/banners/mob-banner.png",
                  alt: "Mobile banner image",
                },
                imageDesktop: {
                  src: "/banners/banner.png",
                  alt: "Desktop banner image",
                },
                title: "Let's Create Something Extraordinary",
                subtitle:
                  "Ready to transform your products with science-led flavour solutions? Our experts are here to guide you from concept to market success.",
                // primary: {
                //   label: "Request Full Catalogue",
                //   href: "/applications-solutions",
                // },
                // secondary: {
                //   label: "Get Samples",
                //   href: "/contact",
                // },
                // scrollToId: "next-section",
              }}
            />

      {/* <HeroComponent
        data={{
          imageMobile: { src: "/banners/contact-mob.jpg", alt: "Mobile Banner" },
          imageDesktop: { src: "/banners/contact-web.jpg", alt: "Desktop Banner" },
      
          // primary: {
          //   href: "/contact",
          //   label: "Explore Solutions"
          // },
      
          // secondary: {
          //   href: "/contact",
          //   label: "Request Samples"
          // },
      
          scrollToId: "contact"
        }}
      /> */}
      {/* <ContactPage /> */}
      <MethodsSection />
      <FormSection />
      <LocationsPanel />
      <FAQSection />
    </>
  );
}
