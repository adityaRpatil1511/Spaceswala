import React from "react";
import { motion } from "framer-motion";
import { Users, Building2, Target, Heart, Home, DollarSign, MapPin, FileText } from "lucide-react";

// Import local property images
import img1 from "../assets/home/img1.jpg";
import img2 from "../assets/home/img2.jpg";
import img3 from "../assets/home/img3.png";
import img4 from "../assets/home/img4.png";

const AboutUs = () => {
  const propertyImages = [img1, img2, img3, img4];

  return (
    <div id="about" className="bg-gray-50 text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 text-white py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center px-6">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            About <span className="text-yellow-400">Spaceswala</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto"
          >
            Redefining real estate experiences through transparency, innovation, and customer-first approach. From buying your dream home to making strategic investments, Spaceswala makes property decisions simple and confident.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={img1}
            alt="Spaceswala Real Estate"
            className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
            whileHover={{ scale: 1.05 }}
          />
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-indigo-900">Our Story</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Founded in 2018, <strong>Spaceswala</strong> started with a simple vision: to make real estate accessible, transparent, and seamless for everyone. Over the years, we have grown into a trusted platform connecting buyers, sellers, and investors across residential and commercial properties.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Our team combines decades of real estate expertise with innovative technology solutions. We leverage advanced property analytics, location insights, and AI-driven recommendations to ensure our clients make informed property decisions.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Today, Spaceswala serves hundreds of clients monthly, offering end-to-end real estate solutions from property discovery and valuation to legal assistance and post-purchase support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-tr from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <Target className="w-14 h-14 text-indigo-700 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower individuals and businesses to make confident property decisions. We combine innovation, technology, and customer-focused service to provide seamless property experiences, helping clients achieve their real estate goals.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <Building2 className="w-14 h-14 text-indigo-700 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become India’s most trusted and customer-first real estate platform, setting new standards in property discovery, investments, and client satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-900 mb-16">
          Our Services
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[ 
            { icon: Home, title: "Residential Sales", desc: "Helping clients buy and sell residential properties with transparent pricing and guided support." },
            { icon: DollarSign, title: "Property Investment", desc: "Offering strategic investment opportunities in residential, commercial, and rental properties." },
            { icon: MapPin, title: "Location Insights", desc: "Providing in-depth analysis of neighborhoods, amenities, and market trends." },
            { icon: FileText, title: "Documentation & Legal Support", desc: "End-to-end assistance with agreements, title checks, and compliance to ensure hassle-free transactions." },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="p-8 bg-white rounded-3xl shadow-lg text-center hover:shadow-2xl transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <service.icon className="w-14 h-14 text-indigo-700 mx-auto mb-4" />
              <h4 className="font-semibold text-xl mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Property Showcase Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Properties</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Explore some of our latest residential and commercial properties. Each property is carefully curated to offer comfort, luxury, and great investment potential.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyImages.map((img, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={img}
                alt={`Property ${i + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-semibold mb-1">Luxury Property {i + 1}</h3>
                <p className="text-sm opacity-90">Located in prime city locations with modern amenities.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-900 mb-16">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[ 
            { icon: Users, title: "Customer First", desc: "Every decision we make starts with the customer in mind." },
            { icon: Target, title: "Innovation", desc: "We continually introduce new technology and methods to enhance the real estate experience." },
            { icon: Heart, title: "Trust", desc: "We build lasting relationships by being transparent and reliable." },
          ].map((value, i) => (
            <motion.div
              key={i}
              className="p-10 bg-white rounded-3xl shadow-lg text-center hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <value.icon className="w-14 h-14 text-indigo-700 mx-auto mb-4" />
              <h4 className="font-semibold text-xl mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-indigo-900 mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-3xl shadow-lg">
              <h3 className="text-3xl font-bold text-indigo-700 mb-2">500+</h3>
              <p className="text-gray-600">Properties Sold</p>
            </div>
            <div className="p-6 bg-white rounded-3xl shadow-lg">
              <h3 className="text-3xl font-bold text-indigo-700 mb-2">300+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="p-6 bg-white rounded-3xl shadow-lg">
              <h3 className="text-3xl font-bold text-indigo-700 mb-2">50+</h3>
              <p className="text-gray-600">Awards Won</p>
            </div>
            <div className="p-6 bg-white rounded-3xl shadow-lg">
              <h3 className="text-3xl font-bold text-indigo-700 mb-2">10+</h3>
              <p className="text-gray-600">Years in Business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-indigo-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Join Us on This Journey</h2>
        <p className="mb-6 opacity-90 max-w-xl mx-auto">
          Be part of the real estate revolution with Spaceswala. Let’s make property decisions simple, smart, and secure together.
        </p>
        <button className="px-8 py-4 bg-yellow-400 text-indigo-900 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition">
          Get in Touch
        </button>
      </section>

    </div>
  );
};

export default AboutUs;
