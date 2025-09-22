import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image1 from '../../assets/servicess/Image_4.avif';
import Image2 from '../../assets/servicess/Image_5.avif';
import Image3 from '../../assets/servicess/Image_6.avif';
import Image4 from '../../assets/servicess/Image_7.avif';
import Image5 from '../../assets/servicess/Image_8.avif';

const developers = [
  {
    name: "A R Realty",
    year: 2005,
    projects: 4,
    desc: "Welcome to AR Realty, where your real estate dreams become reality. Established in 2005...",
    projectsList: [
      {
        title: "AR Mirador",
        location: "Wakad, Pimpri Chinchwad, Pune",
        price: "₹85.0 L - 1.45 Cr",
        img: Image1,
      },
    ],
  },
  {
    name: "Nyati Group",
    year: 1997,
    projects: 101,
    desc: "At Nyati Group, the customer is the central focus of all our ventures...",
    projectsList: [
      {
        title: "Nyati Exuberance",
        location: "Mohammed Wadi, Pune",
        price: "₹67.5 L - 67.7 L",
        img: Image2,
      },
    ],
  },
  {
    name: "Ravima Ventures",
    year: 2023,
    projects: 10,
    desc: "The core values of the company are – Innovation, Trust, Customer Satisfaction...",
    projectsList: [
      {
        title: "Newton Homes Handewadi",
        location: "Hadapsar, Magarpatta Road, Pune",
        price: "₹67.59 L - 73.75 L",
        img: Image3,
      },
    ],
  },
  {
    name: "Ravima Ventures",
    year: 2023,
    projects: 10,
    desc: "The core values of the company are – Innovation, Trust, Customer Satisfaction...",
    projectsList: [
      {
        title: "Newton Homes Handewadi",
        location: "Hadapsar, Magarpatta Road, Pune",
        price: "₹67.59 L - 73.75 L",
        img: Image4,
      },
    ],
  },
  {
    name: "Ravima Ventures",
    year: 2023,
    projects: 10,
    desc: "The core values of the company are – Innovation, Trust, Customer Satisfaction...",
    projectsList: [
      {
        title: "Newton Homes Handewadi",
        location: "Hadapsar, Magarpatta Road, Pune",
        price: "₹67.59 L - 73.75 L",
        img: Image5,
      },
    ],
  },
];

export default function DevelopersSlider() {
  const getVisible = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [slides, setSlides] = useState(getVisible());
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleResize = () => setSlides(getVisible());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset current index if it goes out of range after slides count changes
  useEffect(() => {
    const maxIndex = Math.max(0, developers.length - slides);
    if (current > maxIndex) setCurrent(maxIndex);
  }, [slides, current]);

  const maxIndex = Math.max(0, developers.length - slides);

  const goPrev = () => setCurrent((prev) => Math.max(0, prev - 1));
  const goNext = () => setCurrent((prev) => Math.min(maxIndex, prev + 1));

  const visibleDevelopers = developers.slice(current, current + slides);

  return (
    <div className="px-2 sm:px-6 py-8 sm:py-10 w-full">
      <h2 className="text-xl sm:text-2xl font-bold">Featured Developers</h2>
      <p className="text-gray-500 text-sm">Prominent real-estate builders</p>

      <div className="relative mt-6">
        {/* Slider Arrows */}
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 transition hover:bg-purple-100 disabled:opacity-40 disabled:cursor-not-allowed hidden sm:block"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goNext}
          disabled={current >= maxIndex}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 transition hover:bg-purple-100 disabled:opacity-40 disabled:cursor-not-allowed hidden sm:block"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide">
          {visibleDevelopers.map((dev, i) => (
            <div
              key={current + i}
              className="flex-1 min-w-0 border rounded-xl shadow-md p-4 bg-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xl">
                  {dev.name[0]}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{dev.name}</h3>
                  <p className="text-sm text-gray-500">
                    {dev.year} • {dev.projects} Projects
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">{dev.desc}</p>
              {dev.projectsList.map((p, j) => (
                <div key={j} className="mt-3">
                  <h4 className="text-purple-600 font-medium">{p.title}</h4>
                  <img
                    src={p.img || "/placeholder.svg"}
                    alt={p.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <p className="text-sm mt-1 text-gray-500">{p.location}</p>
                  <p className="font-semibold">{p.price}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Dots for mobile */}
        <div className="flex justify-center mt-4 gap-2 sm:hidden">
          {[...Array(maxIndex + 1)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2.5 h-2.5 rounded-full ${
                current === idx ? "bg-purple-600" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
