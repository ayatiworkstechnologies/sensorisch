"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const TABS = ["View All", "News", "Trends"];
const SORTS = ["Newest", "Oldest"];
const PAGE_SIZE = 6;

const POSTS = [
  {
    id: 1,
    category: "News",
    title: "Green Chemistry Solutions for a Sustainable Future",
    image: "/assets/news-1.png",
    excerpt:
      "Advancing eco-friendly chemical processes through innovation and responsibility.",
    href: "#",
    date: "2025-02-12",
  },
  {
    id: 2,
    category: "Trends",
    title: "Flavours Shaping Consumer Preferences in 2025",
    image: "/assets/news-2.png",
    excerpt:
      "Understanding evolving taste profiles and ingredient-driven demand.",
    href: "#",
    date: "2025-01-28",
  },
  {
    id: 3,
    category: "News",
    title: "New R&D Breakthroughs in Natural Colour Extraction",
    image: "/assets/news-3.png",
    excerpt:
      "Improving stability and vibrancy using sustainable sourcing methods.",
    href: "#",
    date: "2024-12-10",
  },
  {
    id: 4,
    category: "Trends",
    title: "Clean-Label Ingredients Gaining Momentum",
    image: "/assets/news-2.png",
    excerpt:
      "Why transparency and simplicity are redefining product formulations.",
    href: "#",
    date: "2024-11-18",
  },
  {
    id: 5,
    category: "News",
    title: "Advancing Food Safety with Precision Testing",
    image: "/assets/news-3.png",
    excerpt:
      "How modern lab techniques improve compliance and quality assurance.",
    href: "#",
    date: "2024-10-05",
  },
  {
    id: 6,
    category: "Trends",
    title: "The Rise of Functional Ingredients in Nutrition",
    image: "/assets/news-1.png",
    excerpt: "Ingredients that deliver health benefits beyond basic nutrition.",
    href: "#",
    date: "2024-09-12",
  },
  {
    id: 7,
    category: "News",
    title: "Advancing Food Safety with Precision Testing",
    image: "/assets/news-1.png",
    excerpt:
      "How modern lab techniques improve compliance and quality assurance.",
    href: "#",
    date: "2024-10-05",
  },
  {
    id: 8,
    category: "Trends",
    title: "The Rise of Functional Ingredients in Nutrition",
    image: "/assets/news-2.png",
    excerpt: "Ingredients that deliver health benefits beyond basic nutrition.",
    href: "/news/functional-ingredients",
    date: "2024-09-12",
  },
];

export default function NewsTrends() {
  const [activeTab, setActiveTab] = useState("View All");
  const [sortBy, setSortBy] = useState("Newest");
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(1);

  const processedPosts = useMemo(() => {
    let data =
      activeTab === "View All"
        ? POSTS
        : POSTS.filter((p) => p.category === activeTab);

    data = [...data].sort((a, b) => {
      const da = new Date(a.date);
      const db = new Date(b.date);
      return sortBy === "Newest" ? db - da : da - db;
    });

    return data;
  }, [activeTab, sortBy]);

  const totalPages = Math.ceil(processedPosts.length / PAGE_SIZE);

  const paginatedPosts = processedPosts.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="mb-2">
          <ol className="flex items-center gap-1 text-lg font-secondary text-gray-400">
            <li>
              <Link href="/" className="hover:text-primary  transition">
                Home
              </Link>
            </li>

            <li className="opacity-60">/</li>

            <li className="text-gray-600 fon font-medium">News & Trends</li>
          </ol>
        </nav>

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="section-title font-extrabold text-priamry">
            News & Trends
          </h1>
          <div className="mt-2 flex justify-center">
            <span className="w-12 h-0.5 bg-primary" />
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          {/* CATEGORY */}
          <div className="flex gap-6 text-sm font-medium">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setPage(1);
                }}
                className={`relative pb-1 font-secondary text-lg transition ${
                  activeTab === tab
                    ? "text-primary after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* FILTER DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className=" text-gray-600 hover:text-primary font-secondary text-lg flex items-center gap-1"
            >
              Show Filters <span className="text-base">▼</span>
            </button>

            {showFilters && (
              <div className="absolute right-0 mt-2 w-40 font-secondary text-lg rounded-md border bg-white p-2 z-20">
                {SORTS.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSortBy(s);
                      setPage(1);
                      setShowFilters(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded hover:bg-gray-100 ${
                      sortBy === s
                        ? "text-primary font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedPosts.map((post) => (
            <article
              key={post.id}
              className="border border-gray-200 rounded-lg overflow-hidden transition"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center font-secondary gap-3 text-xs text-gray-500">
                  <span className="uppercase text-black font-semibold">
                    {post.category}
                  </span>
                  <span>|</span>
                  <time>{new Date(post.date).toLocaleDateString()}</time>
                </div>

                <h3 className="mt-2 text-xl mt-4 font-bold text-gray-900 leading-snug">
                  {post.title}
                </h3>

                <p className="mt-2 text-lg font-secondary text-gray-600">
                  {post.excerpt}
                </p>

                <Link
                  href={post.href}
                  className="group inline-flex items-center gap-1 mt-4 text-xl font-secondary font-semibold text-black hover:underline"
                >
                  Read more
                  <FiChevronRight
                    className="ml-1 mt-1 text-primary transition-transform duration-200 group-hover:translate-x-1"
                    size={20}
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center font-secondary items-center gap-2 text-lg">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-3 py-1 border rounded disabled:opacity-40"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1 rounded border ${
                  page === i + 1
                    ? "bg-primary text-white border-primary"
                    : "border-gray-300 hover:border-primary"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-3 py-1 border rounded disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
