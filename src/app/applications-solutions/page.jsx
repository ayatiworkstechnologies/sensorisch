export const metadata = {
  title: "Senso Ranges | Application-Specific Flavour Systems - Sensorisch",
  description:
    "Explore our comprehensive flavour solutions designed for bakery, beverage, dairy, and nutraceuticals. Precision-engineered for optimal performance and scale.",
};

import BespokeSolutionsSection from "../components/applications/BespokeSolutionsSection";
import ProfileCTA from "../components/applications/CTA";
import SensoRangeHero from "../components/applications/SensoRangeHero";
import WhyChooseSenso from "../components/applications/WhyChooseSenso";
import HeroComponent from "../components/Hero";
import HeroContact from "../components/HeroContact";
import StickyFullpageSlides from "../components/StickyFullpageSlides";
const ranges = [
  {
    reverse: false,
    badge: "Bakery",
    title: "SensoBake",
    blurb:
      "Heat-stable flavour systems designed to survive baking temperatures while delivering rich, true-to-type aroma in every finished product - from artisan sourdoughs to mass-market biscuits.",
    imageSrc: "/assets/img-1.png",
    iconSrc: "/icons/bakery.png",
    benefits: [
      {
        text: "Heat-stable formulations",
        icon: "/icons/icons-1.png",
        iconType: "img",
        iconBgClass: "bg-orange-50 ring-orange-200",
      },
      {
        text: "Consistent aroma release",
        icon: "/icons/icons-2.png",
        iconType: "img",
        iconBgClass: "bg-emerald-50 ring-emerald-200",
      },
      {
        text: "Wide pH tolerance",
        icon: "/icons/icons-3.png",
        iconType: "img",
        iconBgClass: "bg-sky-50 ring-sky-200",
      },
      {
        text: "Optimal baking performance",
        icon: "/icons/icons-4.png",
        iconType: "img",
        iconBgClass: "bg-amber-50 ring-amber-200",
      },
    ],
    tags: [
      { t: "Cakes & Muffins", cls: "bg-red-50 text-red-600 ring-red-200" },
      {
        t: "Cookies & Biscuits",
        cls: "bg-blue-50 text-blue-600 ring-blue-200",
      },
      { t: "Pastries", cls: "bg-emerald-50 text-emerald-600 ring-emerald-200" },
      {
        t: "Artisan Breads",
        cls: "bg-orange-50 text-orange-600 ring-orange-200",
      },
    ],
    primaryHref: "/contact",
    primaryLabel: "Request Sample",
    secondaryHref: "/contact",
    secondaryLabel: "Technical Sheet",
  },
  {
    reverse: true,
    badge: "Confectionery",
    title: "SensoTreat",
    blurb:
      "Flavour systems engineered for controlled release in confectionery matrices - delivering playful, nostalgic profiles that linger through every bite, from first unwrap to last chew.",
    imageSrc: "/assets/img-2.png",
    iconSrc: "/icons/confectionery.png",
    benefits: [
      {
        text: "Controlled flavour release",
        icon: "/icons/icons-5.png",
        iconType: "img",
        iconBgClass: "bg-purple-50 ring-purple-200",
      },
      {
        text: "Long-lasting taste",
        icon: "/icons/icons-3.png",
        iconType: "img",
        iconBgClass: "bg-pink-50 ring-pink-200",
      },
      {
        text: "Sugar crystallization stability",
        icon: "/icons/icons-6.png",
        iconType: "img",
        iconBgClass: "bg-amber-50 ring-amber-200",
      },
      {
        text: "Texture compatibility",
        icon: "/icons/icons-7.png",
        iconType: "img",
        iconBgClass: "bg-teal-50 ring-teal-200",
      },
    ],
    tags: [
      { t: "Hard Candies", cls: "bg-amber-50 text-amber-700 ring-amber-200" },
      { t: "Gummies", cls: "bg-pink-50 text-pink-700 ring-pink-200" },
      { t: "Chocolates", cls: "bg-stone-100 text-stone-700 ring-stone-300" },
      { t: "Chewing Gum", cls: "bg-indigo-50 text-indigo-700 ring-indigo-200" },
    ],
    primaryHref: "/contact",
    primaryLabel: "Request Sample",
    secondaryHref: "/contact",
    secondaryLabel: "Technical Sheet",
  },
  {
    reverse: false,
    badge: "Dairy",
    title: "SensoCreme",
    blurb:
      "Dairy-forward flavour systems delivering authentic, creamy profiles in ice cream, yogurt, milkshakes, and specialty cheese - with heat-stable options for cooked and processed applications.",
    imageSrc: "/assets/img-3.png",
    iconSrc: "/icons/dairy.png",
    benefits: [
      {
        text: "Heat-stable options",
        icon: "/icons/icons-8.png",
        iconType: "img",
        iconBgClass: "bg-orange-50 ring-orange-200",
      },
      {
        text: "Protein compatibility",
        icon: "/icons/icons-9.png",
        iconType: "img",
        iconBgClass: "bg-blue-50 ring-blue-200",
      },
      {
        text: "Freeze-thaw stability",
        icon: "/icons/icons-4.png",
        iconType: "img",
        iconBgClass: "bg-cyan-50 ring-cyan-200",
      },
      {
        text: "Authentic dairy notes",
        icon: "/icons/icons-3.png",
        iconType: "img",
        iconBgClass: "bg-rose-50 ring-rose-200",
      },
    ],
    tags: [
      { t: "Ice Cream", cls: "bg-cyan-50 text-cyan-700 ring-cyan-200" },
      { t: "Yogurt", cls: "bg-lime-50 text-lime-700 ring-lime-200" },
      {
        t: "Milkshakes",
        cls: "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200",
      },
      {
        t: "Cheese Products",
        cls: "bg-amber-50 text-amber-700 ring-amber-200",
      },
    ],
    primaryHref: "/contact",
    primaryLabel: "Request Sample",
    secondaryHref: "/contact",
    secondaryLabel: "Technical Sheet",
  },
  {
    reverse: true,
    badge: "Beverages",
    title: "SensoSip",
    blurb:
      "Flavour architectures engineered for beverage clarity, carbonation stability, and extended shelf life - performing consistently across juices, carbonated drinks, energy beverages, and craft mocktails",
    imageSrc: "/assets/img-4.png",
    iconSrc: "/icons/beverage.png",
    benefits: [
      {
        text: "Beverage clarity",
        icon: "/icons/icons-10.png",
        iconType: "img",
        iconBgClass: "bg-sky-50 ring-sky-200",
      },
      {
        text: "Carbonation stability",
        icon: "/icons/icons-3.png",
        iconType: "img",
        iconBgClass: "bg-indigo-50 ring-indigo-200",
      },
      {
        text: "Extended shelf-life",
        icon: "/icons/icons-11.png",
        iconType: "img",
        iconBgClass: "bg-green-50 ring-green-200",
      },
      {
        text: "pH resilience",
        icon: "/icons/icons-2.png",
        iconType: "img",
        iconBgClass: "bg-teal-50 ring-teal-200",
      },
    ],
    tags: [
      { t: "Juices", cls: "bg-orange-50 text-orange-700 ring-orange-200" },
      { t: "Carbonated Drinks", cls: "bg-sky-50 text-sky-700 ring-sky-200" },
      {
        t: "Energy Drinks",
        cls: "bg-yellow-50 text-yellow-700 ring-yellow-200",
      },
      {
        t: "Mocktails",
        cls: "bg-emerald-50 text-emerald-700 ring-emerald-200",
      },
    ],
    primaryHref: "/contact",
    primaryLabel: "Request Sample",
    secondaryHref: "/contact",
    secondaryLabel: "Technical Sheet",
  },
  {
    reverse: false,
    badge: "Pharmaceuticals",
    title: "Senso+",
    blurb:
      "Precision taste-modulation systems that make pharmaceutical syrups, chewable tablets, and supplements genuinely palatable - masking bitterness and eliminating aftertaste without compromising active stability.",
    imageSrc: "/assets/img-5.png",
    iconSrc: "/icons/pharma.png",
    benefits: [
      {
        text: "Bitterness masking",
        icon: "/icons/icons-3.png",
        iconType: "img",
        iconBgClass: "bg-violet-50 ring-violet-200",
      },
      {
        text: "Aftertaste control",
        icon: "/icons/icons-12.png",
        iconType: "img",
        iconBgClass: "bg-fuchsia-50 ring-fuchsia-200",
      },
      {
        text: "Child-friendly profiles",
        icon: "/icons/icons-9.png",
        iconType: "img",
        iconBgClass: "bg-rose-50 ring-rose-200",
      },
      {
        text: "Stability in formulations",
        icon: "/icons/icons-6.png",
        iconType: "img",
        iconBgClass: "bg-sky-50 ring-sky-200",
      },
    ],
    tags: [
      {
        t: "Liquid Medicines",
        cls: "bg-indigo-50 text-indigo-700 ring-indigo-200",
      },
      {
        t: "Chewable Tablets",
        cls: "bg-amber-50 text-amber-700 ring-amber-200",
      },
      { t: "Syrups", cls: "bg-cyan-50 text-cyan-700 ring-cyan-200" },
      {
        t: "Supplements",
        cls: "bg-emerald-50 text-emerald-700 ring-emerald-200",
      },
    ],
    primaryHref: "/contact",
    primaryLabel: "Request Sample",
    secondaryHref: "/contact",
    secondaryLabel: "Technical Sheet",
  },
  {
    reverse: true,
    badge: "Nutraceuticals",
    title: "SensoActive",
    blurb:
      "Nutraceutical flavour systems that amplify the appeal of protein powders, botanical supplements, and functional foods - masking off-notes from active ingredients while keeping every formulation clean-label compliant.",
    imageSrc: "/assets/img-6.png",
    iconSrc: "/icons/nutra.png",
    benefits: [
      {
        text: "Nutrient masking",
        icon: "/icons/icons-13.png",
        iconType: "img",
        iconBgClass: "bg-emerald-50 ring-emerald-200",
      },
      {
        text: "Protein compatibility",
        icon: "/icons/icons-4.png",
        iconType: "img",
        iconBgClass: "bg-blue-50 ring-blue-200",
      },
      {
        text: "Botanical enhancement",
        icon: "/icons/icons-14.png",
        iconType: "img",
        iconBgClass: "bg-green-50 ring-green-200",
      },
      {
        text: "Mineral taste modulation",
        icon: "/icons/icons-3.png",
        iconType: "img",
        iconBgClass: "bg-slate-50 ring-slate-200",
      },
    ],
    tags: [
      { t: "Protein Powders", cls: "bg-lime-50 text-lime-700 ring-lime-200" },
      {
        t: "Vitamin Supplements",
        cls: "bg-purple-50 text-purple-700 ring-purple-200",
      },
      { t: "Functional Foods", cls: "bg-teal-50 text-teal-700 ring-teal-200" },
      {
        t: "Sports Nutrition",
        cls: "bg-orange-50 text-orange-700 ring-orange-200",
      },
    ],
    primaryHref: "/contact",
    primaryLabel: "Request Sample",
    secondaryHref: "/contact",
    secondaryLabel: "Technical Sheet",
  },
  {
    reverse: false,
    badge: "Savoury",
    title: "SensoSpice",
    blurb:
      "True-to-origin spice and herb flavour systems - oil- and water-soluble options delivering authentic heat, depth, and complexity to savoury applications from premium sauces to snack seasonings.",
    imageSrc: "/assets/img-7.png",
    iconSrc: "/icons/spice.png",
    benefits: [
      {
        text: "Authentic spice profiles",
        icon: "/icons/icons-6.png",
        iconType: "img",
        iconBgClass: "bg-amber-50 ring-amber-200",
      },
      {
        text: "Heat resistance",
        icon: "/icons/icons-13.png",
        iconType: "img",
        iconBgClass: "bg-red-50 ring-red-200",
      },
      {
        text: "Oil-soluble options",
        icon: "/icons/icons-14.png",
        iconType: "img",
        iconBgClass: "bg-orange-50 ring-orange-200",
      },
      {
        text: "Clean label friendly",
        icon: "/icons/icons-4.png",
        iconType: "img",
        iconBgClass: "bg-emerald-50 ring-emerald-200",
      },
    ],
    tags: [
      { t: "Seasonings", cls: "bg-amber-50 text-amber-700 ring-amber-200" },
      { t: "Sauces", cls: "bg-red-50 text-red-700 ring-red-200" },
      { t: "Soups", cls: "bg-orange-50 text-orange-700 ring-orange-200" },
      { t: "Snacks", cls: "bg-yellow-50 text-yellow-700 ring-yellow-200" },
    ],
    primaryHref: "/contact",
    primaryLabel: "Request Sample",
    secondaryHref: "/contact",
    secondaryLabel: "Technical Sheet",
  },
  {
    reverse: true,
    badge: "Oral & Personal Care",
    title: "SensoCare",
    blurb:
      "Oral-safe flavour and sensation systems delivering lasting cooling freshness, controlled menthol intensity, and antimicrobial compatibility - for toothpastes, mouthwashes, and premium personal-care formulations.",
    imageSrc: "/assets/img-8.png",
    iconSrc: "/icons/oralcare.png",
    benefits: [
      {
        text: "Cooling sensation",
        icon: "/icons/icons-10.png",
        iconType: "img",
        iconBgClass: "bg-sky-50 ring-sky-200",
      },
      {
        text: "Long-lasting freshness",
        icon: "/icons/icons-2.png",
        iconType: "img",
        iconBgClass: "bg-teal-50 ring-teal-200",
      },
      {
        text: "Antimicrobial compatibility",
        icon: "/icons/icons-4.png",
        iconType: "img",
        iconBgClass: "bg-cyan-50 ring-cyan-200",
      },
      {
        text: "Oral-safe formulations",
        icon: "/icons/icons-15.png",
        iconType: "img",
        iconBgClass: "bg-indigo-50 ring-indigo-200",
      },
    ],
    tags: [
      { t: "Toothpaste", cls: "bg-sky-50 text-sky-700 ring-sky-200" },
      { t: "Mouthwash", cls: "bg-teal-50 text-teal-700 ring-teal-200" },
      { t: "Oral Sprays", cls: "bg-blue-50 text-blue-700 ring-blue-200" },
      {
        t: "Personal Care",
        cls: "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200",
      },
    ],
    primaryHref: "/contact",
    primaryLabel: "Request Sample",
    secondaryHref: "/contact",
    secondaryLabel: "Technical Sheet",
  },
  {
    reverse: false,
    badge: "Natural Segment",
    title: "SensoNat",
    blurb:
      "100% nature-derived flavours and colours - extracted, distilled, and blended to meet clean-label compliance, organic certification requirements, and the taste expectations of today's conscious consumer.",
    imageSrc: "/assets/img-9.png",
    iconSrc: "/icons/natural.png",
    benefits: [
      {
        text: "100% natural origin",
        icon: "/icons/icons-4.png",
        iconType: "img",
        iconBgClass: "bg-emerald-50 ring-emerald-200",
      },
      {
        text: "Clean label compliant",
        icon: "/icons/icons-13.png",
        iconType: "img",
        iconBgClass: "bg-lime-50 ring-lime-200",
      },
      {
        text: "Sustainable sourcing",
        icon: "/icons/icons-16.png",
        iconType: "img",
        iconBgClass: "bg-green-50 ring-green-200",
      },
      {
        text: "Certification ready",
        icon: "/icons/icons-6.png",
        iconType: "img",
        iconBgClass: "bg-amber-50 ring-amber-200",
      },
    ],
    tags: [
      {
        t: "Organic Products",
        cls: "bg-green-50 text-green-700 ring-green-200",
      },
      {
        t: "Clean Label Foods",
        cls: "bg-emerald-50 text-emerald-700 ring-emerald-200",
      },
      { t: "Natural Beverages", cls: "bg-teal-50 text-teal-700 ring-teal-200" },
      { t: "Premium Ranges", cls: "bg-amber-50 text-amber-700 ring-amber-200" },
    ],
    primaryHref: "/contact",
    primaryLabel: "Request Sample",
    secondaryHref: "/contact",
    secondaryLabel: "Technical Sheet",
  },
];

export default function ApplicationSolutions() {
  return (
    <>
      <HeroComponent
        data={{
          imageMobile: {
            src: "/banners/applications-mob.jpg",
            alt: "Mobile banner image",
          },
          imageDesktop: {
            src: "/banners/applications-web.jpg",
            alt: "Desktop banner image",
          },
          title: "Nine Application Ranges. Every Category. Zero Compromise.",
          // subtitle:
          //   "Ready-to-apply systems that package our expertise into risk-reducing, time-saving solutions for faster product development and market success.",
          primary: {
            label: "Start Your Project",
            href: "/contact",
          },
          titleColor: "text-primary",
          // secondary: {
          //   label: "View Our Portfolio",
          //   href: "/portfolio",
          // },
          // scrollToId: "next-section",
        }}
      />

      <WhyChooseSenso />
      {/* <main className="bg-background text-black"> */}
      <StickyFullpageSlides fade translate heightMultiplier={1}>
        {ranges.map((r, i) => (
          <SensoRangeHero
            key={r.title + i}
            reverse={r.reverse}
            badge={r.badge}
            title={r.title}
            blurb={r.blurb}
            imageSrc={r.imageSrc}
            iconSrc={r.iconSrc}
            imageAlt={`${r.title} hero`}
            benefits={r.benefits}
            tags={r.tags}
            primaryLabel={r.primaryLabel}
            secondaryLabel={r.secondaryLabel}
          />
        ))}
      </StickyFullpageSlides>
      {/* </main> */}
      <BespokeSolutionsSection
        onPrimaryHref="/bespoke"
        onPrimaryLabel="Discuss Your Bespoke Needs"
        onProcessLabel="Our Development Process"
        onProcessHref="/bespoke"
      />
      {/* <ProfileCTA /> */}
      <HeroContact
        kicker="Get in touch"
        title="Your next product launch starts here."
        subtitle="Choose from our proven Senso ranges or partner with us for bespoke solutions tailored to your unique requirements."
        primary={{ label: "Request Samples", href: "/contact" }}
        secondary={{ label: "Schedule Consultation", href: "/contact" }}
        imageSrc="/assets/get-in-touch.png"
        imageAlt="Glass beaker with plant"
      />
    </>
  );
}
