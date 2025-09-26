import React, { useState } from "react";
import { Search, ArrowRight, UserCircle2, CalendarDays } from "lucide-react";

// ✅ Import local images
import img1 from "../assets/blog/img1.png";
import img2 from "../assets/blog/img2.png";
import img3 from "../assets/blog/img3.png";
import img4 from "../assets/blog/img4.png";
import img5 from "../assets/blog/img5.png";
import img6 from "../assets/blog/img6.png";
import img7 from "../assets/blog/img7.png";
import heroBg from "../assets/blog/hero-bg.png";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const articles = [
    {
      featured: true,
      title: "The Ultimate Guide to Navigating a Seller's Market in 2025",
      description:
        "In a competitive seller's market, buyers need every advantage they can get. This guide breaks down the essential strategies for finding and securing your dream home against all odds.",
      category: "Buying",
      date: "Sep 26, 2025",
      img: img1,
      author: "Elena Rodriguez",
      readTime: "8 min read",
    },
    {
      title: "Apartment Paint Ideas to Transform Small Spaces",
      description:
        "Transform your apartment from dull to vibrant. Discover how the right paint choices can make your space feel larger, brighter, and more stylish.",
      category: "Home Improvement",
      date: "Sep 25, 2025",
      img: img2,
      author: "Mark Chen",
      readTime: "5 min read",
    },
    {
      title: "TDS on Property Purchase: A Step-by-Step Guide 2025",
      description:
        "Buying a property is a major milestone. Understand the ins and outs of Tax Deducted at Source (TDS) with our comprehensive and easy-to-follow guide.",
      category: "Finance & Legal",
      date: "Sep 22, 2025",
      img: img3,
      author: "Priya Sharma",
      readTime: "7 min read",
    },
    {
      title: "Eco-Friendly Homes: The Future of Sustainable Living",
      description:
        "Sustainability is more than a trend; it's a lifestyle. Explore the key features of eco-friendly homes, from solar panels to sustainable materials.",
      category: "Market Trends",
      date: "Sep 20, 2025",
      img: img4,
      author: "David Lee",
      readTime: "6 min read",
    },
    {
      title: "Confident White House: Ultra Luxury Flats in Kaloor",
      description:
        "Experience a new standard of luxury at the Confident White House, where elegance and comfort meet in the heart of Kaloor.",
      category: "Luxury Properties",
      date: "Sep 18, 2025",
      img: img5,
      author: "Elena Rodriguez",
      readTime: "4 min read",
    },
    {
      title: "5 Staging Tips to Sell Your Home Faster and For More",
      description:
        "First impressions are everything in real estate. Learn five proven home staging techniques that will captivate buyers and maximize your sale price.",
      category: "Selling",
      date: "Sep 15, 2025",
      img: img6,
      author: "Mark Chen",
      readTime: "6 min read",
    },
    {
      title: "Smart Homes: How Technology is Changing Real Estate in 2025",
      description:
        "From voice assistants to AI-powered energy management, smart home technology is reshaping how we live. Discover the latest trends making homes more efficient, safe, and comfortable.",
      category: "Technology",
      date: "Sep 10, 2025",
      img: img7,
      author: "Sophia Patel",
      readTime: "9 min read",
    },
  ];

  const categories = ["All", ...new Set(articles.map((a) => a.category))];

  const filteredArticles = articles
    .filter(
      (article) =>
        activeCategory === "All" || article.category === activeCategory
    )
    .filter(
      (article) =>
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.description.toLowerCase().includes(search.toLowerCase())
    );

  const featuredArticle =
    filteredArticles.find((a) => a.featured) || filteredArticles[0];
  const otherArticles = filteredArticles.filter(
    (a) => a.title !== featuredArticle?.title
  );

  const ArticleCard = ({ article }) => (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="overflow-hidden">
        <img
          src={article.img}
          alt={article.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full self-start mb-3">
          {article.category}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex-grow">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{article.description}</p>
        {/* ✅ Info Row */}
        <div className="flex items-center justify-between text-gray-500 text-sm mt-auto">
          <div className="flex items-center">
            <CalendarDays size={16} className="mr-1" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center">
            <UserCircle2 size={18} className="mr-1" />
            <span>
              {article.author} • {article.readTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="bg-slate-50 font-sans">
      {/* Hero Section */}
      <div className="relative pt-24 pb-32">
        <img
          src={heroBg}
          alt="Luxury modern home background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Blogs
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
            Your expert source for market trends, buying & selling guides,
            technology, and luxury property news.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          {/* Filters and Search Card */}
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 mb-12">
            <div className="flex justify-center flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                    activeCategory === category
                      ? "bg-orange-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Articles Section */}
          {filteredArticles.length > 0 ? (
            <div className="space-y-16">
              {/* Featured Article Section */}
              {featuredArticle && (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                     Featured Article
                  </h2>
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-2xl transition-shadow duration-300 grid md:grid-cols-2 items-center">
                    <div className="overflow-hidden h-64 md:h-full">
                      <img
                        src={featuredArticle.img}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-8 md:p-12">
                      <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full self-start mb-4">
                        Featured
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-gray-600 mb-6">
                        {featuredArticle.description}
                      </p>
                      {/* ✅ Info Row */}
                      <div className="flex items-center justify-between text-gray-500 text-sm mb-6">
                        <div className="flex items-center">
                          <CalendarDays size={16} className="mr-1" />
                          <span>{featuredArticle.date}</span>
                        </div>
                        <div className="flex items-center">
                          <UserCircle2 size={20} className="mr-2" />
                          <span>
                            {featuredArticle.author} • {featuredArticle.readTime}
                          </span>
                        </div>
                      </div>
                      {/* <a
                        href="#"
                        className="inline-flex items-center text-orange-600 font-bold group-hover:text-orange-700 transition-colors"
                      >
                      
                        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                      </a> */}
                    </div>
                  </div>
                </>
              )}

              {/* All Articles Section */}
              {otherArticles.length > 0 && (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8 text-center">
                    All Articles
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherArticles.map((article) => (
                      <ArticleCard key={article.title} article={article} />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="text-center bg-white rounded-xl shadow-lg p-16">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                No Articles Found
              </h3>
              <p className="text-gray-500">
                Please try a different category or search term.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
