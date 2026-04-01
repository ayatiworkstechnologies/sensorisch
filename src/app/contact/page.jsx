export const metadata = {
  title: "Contact Sensorisch | Start a Flavour Project or Request Samples",
  description:
    "Get in touch with our flavour experts. Partner with us for precision-driven, ingredient-led formulation solutions that perform at scale.",
};

import ContactPage from "../components/contact/ContactPage";
import FAQSection from "../components/contact/FAQSection";
import FormSection from "../components/contact/FormSection";
import LocationsPanel from "../components/contact/LocationsPanel";
import MethodsSection from "../components/contact/MethodsSection";
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
          titleColor: "text-primary",
          title: "Your Brief. Our Science. Extraordinary Results.",
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
      <MethodsSection />
      <FormSection />
      <LocationsPanel />
      <FAQSection />
    </>
  );
}
