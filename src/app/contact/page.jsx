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
      <HeroComponent
        data={{
          imageMobile: {
            src: "/banners/contact-mob.jpg",
            alt: "Mobile banner image",
          },
          imageDesktop: {
            src: "/banners/contact-web.jpg",
            alt: "Desktop banner image",
          },
          titleColor : "text-primary",
          title: "Let's Create Something Extraordinary",
          // subtitle:
          //   "Ready to transform your products with science-led flavour solutions? Our experts are here to guide you from concept to market success.",
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
