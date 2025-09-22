import React from "react";
import { Users, Building2, Target, Heart } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-yellow-400">Spaceswala</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Transforming the way people discover, buy, and invest in real estate.
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Spaceswala Real Estate"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-indigo-900">Who We Are</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              At <strong>Spaceswala</strong>, we believe finding your dream property should
              be simple, transparent, and stress-free. Whether you're buying your
              first home, investing in real estate, or exploring commercial
              opportunities, we make the journey effortless with technology-driven
              solutions and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-indigo-50 p-8 rounded-2xl shadow-md">
            <Target className="w-12 h-12 text-indigo-700 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To empower individuals and businesses to make confident property
              decisions with innovation, trust, and excellence.
            </p>
          </div>
          <div className="bg-indigo-50 p-8 rounded-2xl shadow-md">
            <Building2 className="w-12 h-12 text-indigo-700 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted and customer-first real estate platform,
              redefining how properties are discovered and experienced.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 bg-white rounded-2xl shadow-md text-center">
            <Users className="w-12 h-12 text-indigo-700 mx-auto mb-4" />
            <h4 className="font-semibold text-lg mb-2">Customer First</h4>
            <p className="text-gray-600">We prioritize your needs at every step.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md text-center">
            <Target className="w-12 h-12 text-indigo-700 mx-auto mb-4" />
            <h4 className="font-semibold text-lg mb-2">Innovation</h4>
            <p className="text-gray-600">
              We bring cutting-edge solutions to real estate.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md text-center">
            <Heart className="w-12 h-12 text-indigo-700 mx-auto mb-4" />
            <h4 className="font-semibold text-lg mb-2">Trust</h4>
            <p className="text-gray-600">
              We build lasting relationships through transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-indigo-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Aditya Patil",
                role: "Founder & CEO",
                img: "https://randomuser.me/api/portraits/men/45.jpg",
              },
              {
                name: "Priya Sharma",
                role: "Head of Marketing",
                img: "https://randomuser.me/api/portraits/women/68.jpg",
              },
              {
                name: "Rohit Verma",
                role: "Lead Developer",
                img: "https://randomuser.me/api/portraits/men/76.jpg",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-indigo-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us on This Journey</h2>
        <p className="mb-6 opacity-90">
          Be part of the real estate revolution with Spaceswala.
        </p>
        <button className="px-8 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
