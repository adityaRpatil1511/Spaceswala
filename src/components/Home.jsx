import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BedDouble, Bath, Ruler, ShieldCheck, Users, Building2 } from "lucide-react";

// Import local images
import img1 from "../assets/home/img1.jpg";
import img2 from "../assets/home/img2.jpg";
import img3 from "../assets/home/img3.png";
import img4 from "../assets/home/img4.png";
import img5 from "../assets/home/img5.png";

const Home = () => {
  return (
    <div id="home" className="w-full font-sans">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white max-w-3xl px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Discover Your Perfect{" "}
            <span className="text-teal-400">Dream Home</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl opacity-90">
            Explore luxury villas, modern apartments, and prime commercial
            spaces designed for your lifestyle.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="px-8 py-3 rounded-full font-semibold shadow bg-teal-600 hover:bg-teal-700 transition text-white"
            >
              Explore Properties
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full font-semibold shadow bg-gray-200 hover:bg-gray-300 text-gray-800 transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Search Bar */}
     {/* Search Bar */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="relative z-20 -mt-16 max-w-6xl mx-auto px-6"
>
  <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Location Input */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          📍
        </span>
        <input
          type="text"
          placeholder="Location"
          className="pl-10 p-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-teal-400 w-full bg-white/60 placeholder-gray-600"
        />
      </div>

      {/* Property Type Input */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          🏠
        </span>
        <input
          type="text"
          placeholder="Property Type"
          className="pl-10 p-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-teal-400 w-full bg-white/60 placeholder-gray-600"
        />
      </div>

      {/* Budget Input */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          💰
        </span>
        <input
          type="text"
          placeholder="Budget"
          className="pl-10 p-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-teal-400 w-full bg-white/60 placeholder-gray-600"
        />
      </div>

      {/* Search Button */}
      <button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold rounded-full p-3 transition transform hover:scale-105 shadow-lg">
        🔍 Search
      </button>
    </div>
  </div>
</motion.section>


      {/* Featured Properties */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Featured <span className="text-teal-500">Properties</span>
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Luxury Villa",
              img: img2,
              desc: "Beautiful villa with modern interiors and private pool.",
              price: "₹2,50,00,000",
              beds: 4,
              baths: 3,
              area: "4500 sqft",
              badge: "New",
            },
            {
              title: "Modern Apartment",
              img: img3,
              desc: "Stylish apartment in the heart of the city with skyline views.",
              price: "₹1,20,00,000",
              beds: 3,
              baths: 2,
              area: "1800 sqft",
              badge: "Hot",
            },
            {
              title: "Commercial Space",
              img: img4,
              desc: "Prime commercial space perfect for offices and retail.",
              price: "₹5,00,00,000",
              beds: 0,
              baths: 2,
              area: "6000 sqft",
              badge: "Featured",
            },
          ].map((property, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              {/* Property Image */}
              <div className="overflow-hidden">
                <img
                  src={property.img}
                  alt={property.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Badge */}
              <span className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                {property.badge}
              </span>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold">{property.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{property.desc}</p>
                <p className="mt-3 text-teal-600 font-semibold">
                  {property.price}
                </p>
                <div className="mt-4 flex items-center gap-6 text-sm text-gray-700">
                  {property.beds > 0 && (
                    <span className="flex items-center gap-1">
                      <BedDouble size={16} /> {property.beds} Beds
                    </span>
                  )}
                  {property.baths > 0 && (
                    <span className="flex items-center gap-1">
                      <Bath size={16} /> {property.baths} Baths
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Ruler size={16} /> {property.area}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Why <span className="text-teal-600">Choose Us?</span>
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Trusted Experts",
                desc: "Our team of professionals ensures smooth property transactions with expert guidance.",
                icon: <ShieldCheck size={32} className="text-teal-600" />,
              },
              {
                title: "Wide Network",
                desc: "Access premium residential and commercial properties across prime locations.",
                icon: <Building2 size={32} className="text-teal-600" />,
              },
              {
                title: "Happy Clients",
                desc: "We’ve helped thousands of clients find their dream home and grow their investments.",
                icon: <Users size={32} className="text-teal-600" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="relative py-20 text-center text-white"
        style={{
          backgroundImage: `url(${img5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 px-6"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Ready to Find Your Dream Property?
          </h2>
          <p className="mt-6 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied clients who discovered their perfect home
            with us. Let’s make your dream a reality today.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block px-8 py-3 rounded-full font-semibold bg-teal-600 hover:bg-teal-700 text-white transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
