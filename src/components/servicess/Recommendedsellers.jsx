import { useRef, useEffect, useState } from "react";
import React from "react";
import { Heart, ChevronRight } from "lucide-react";

import img1 from '../../assets/servicess/vm-logo.png';
import img2 from '../../assets/servicess/ms-initials-yellow.jpg';
import img3 from '../../assets/servicess/empire-logo-black.jpg';
import img4 from '../../assets/servicess/dj-initials.jpg';
import img5 from '../../assets/servicess/m-initial-yellow.jpg';
import img6 from '../../assets/servicess/ab.jpg';

const sellers = [
  {
    id: 1,
    name: "VM Prosperity Group",
    avatar: img1,
    badge: "HOUSING EXPERT PRO",
    locations: ["Nanded"],
    experience: "16 years",
    properties: "17",
  },
  {
    id: 2,
    name: "Mandar Shantaram Marne",
    avatar: img2,
    badge: "HOUSING EXPERT PRO",
    locations: ["Anand Nagar, Sinhagad Road", "Vadgaon Budruk"],
    experience: "10 years",
    properties: "30",
  },
  {
    id: 3,
    name: "The empire",
    avatar: img3,
    badge: "HOUSING EXPERT PRO",
    locations: ["Ambegaon Budruk", "Dhayari"],
    experience: "0 years",
    properties: "38",
  },
  {
    id: 4,
    name: "Deepak Jagasia",
    avatar: img4,
    badge: "HOUSING EXPERT",
    locations: ["Worli", "Lower Parel"],
    experience: "22 years",
    properties: "121",
  },
  {
    id: 5,
    name: "mahesh.chugh",
    avatar: img5,
    badge: "HOUSING EXPERT",
    locations: ["Mundhwa", "Bavdhan"],
    experience: "0.5 years",
    properties: "39",
  },
  {
    id: 6,
    name: "Akash Bhore",
    avatar: img6,
    badge: "HOUSING EXPERT",
    locations: ["Magarpatta City", "Viman Nagar"],
    experience: "0.5 years",
    properties: "8",
  },
];

export default function RecommendedSellers() {
  const scrollRef = useRef(null);
  const [showArrow, setShowArrow] = useState(false);

  const checkOverflow = () => {
    const container = scrollRef.current;
    if (container) {
      setShowArrow(container.scrollWidth > container.clientWidth);
    }
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Recommended Sellers</h2>
        <p className="text-gray-600">Top brokers and agents</p>
      </div>

      <div className="relative">
        {/* Scrollable Seller Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar pb-2"
        >
          {sellers.map((seller) => (
            <div
              key={seller.id}
              className="min-w-[280px] flex-shrink-0 bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              {/* Top: Avatar + Badge + Heart */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={seller.avatar}
                    alt={seller.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{seller.name}</h3>
                    <span
                      className={`inline-block px-2 py-1 text-xs font-medium text-white rounded mt-1 ${
                        seller.badge.includes("PRO") ? "bg-orange-500" : "bg-orange-400"
                      }`}
                    >
                      {seller.badge}
                    </span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500 transition">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Locations */}
              <div className="mb-4 flex flex-wrap gap-2">
                {seller.locations.map((loc, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                  >
                    {loc}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex justify-between text-sm text-gray-600">
                <span>
                  <span className="font-semibold text-gray-900">{seller.experience}</span>{" "}
                  Experience
                </span>
                <span>
                  <span className="font-semibold text-gray-900">{seller.properties}</span>{" "}
                  Properties
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Right Button */}
        {showArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white border border-gray-200 rounded-full p-2 shadow hover:shadow-md transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        )}
      </div>
    </div>
  );
}
