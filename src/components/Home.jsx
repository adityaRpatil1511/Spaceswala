import React from "react";
import { motion } from "framer-motion";
import { HomeIcon, ShieldCheckIcon, UsersIcon, BuildingOffice2Icon, StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home" className="w-full">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Find Your Dream Home with <span className="text-teal-400">Spaceswala</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Premium residential and commercial properties tailored to your lifestyle with trusted experts guiding every step.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition transform hover:scale-105"
            >
              Explore Properties
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-200 text-teal-600 px-6 py-3 rounded-lg shadow-lg font-semibold transition transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Search Bar */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto -mt-12 bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-6 relative z-20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <input type="text" placeholder="Location" className="border p-3 rounded-lg w-full" />
          <input type="text" placeholder="Property Type" className="border p-3 rounded-lg w-full" />
          <input type="text" placeholder="Budget" className="border p-3 rounded-lg w-full" />
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg p-3 w-full sm:w-auto">
            Search
          </button>
        </div>
      </motion.section>
{/* Featured Properties - Stunning Version */}
{/* Featured Properties - Stunning Version */}
{/* Featured Properties - Stunning Version */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
    Featured <span className="text-teal-500">Properties</span>
  </h2>
  <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
    {[
      {
        title: "Luxury Villa",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvaeWf6GmXjSpLUTpRabNxwPYCxLK3vVO9A&s",
        desc: "Beautiful villa with modern interiors and private pool.",
        price: "₹2,50,00,000",
        beds: 4,
        baths: 3,
        area: "4500 sqft",
        badge: "New",
      },
      {
        title: "Modern Apartment",
        img: "https://images.unsplash.com/photo-1599423300746-b62533397364?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDkwfHxtb2Rlcm4lMjBhcHBhcnRtZW50fGVufDB8fHx8fDE2NTY2NjYwNjk&ixlib=rb-1.2.1&q=80&w=1080",
        desc: "Stylish apartment in the heart of the city with skyline views.",
        price: "₹1,20,00,000",
        beds: 3,
        baths: 2,
        area: "1800 sqft",
        badge: "Hot",
      },
      {
        title: "Commercial Space",
        img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDk2fHxtb2Rlcm4lMjBhY2NvbW1vZGF0aW9ufGVufDB8fHx8fDE2NTY2NjYwNjk&ixlib=rb-1.2.1&q=80&w=1080",
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
        className="relative group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all"
      >
        {/* Property Image */}
        <img
          src={property.img}
          alt={property.title}
          className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badge */}
        <span className="absolute top-4 left-4 bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {property.badge}
        </span>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-white p-5 text-center">
          <h3 className="text-xl font-bold">{property.title}</h3>
          <p className="mt-2 text-sm">{property.desc}</p>
          <p className="mt-3 font-semibold">{property.price}</p>
          <div className="mt-2 flex justify-center gap-4 text-sm">
            {property.beds > 0 && <span>🛏 {property.beds} Beds</span>}
            {property.baths > 0 && <span>🛁 {property.baths} Baths</span>}
            <span>📐 {property.area}</span>
          </div>
          <button className="mt-4 bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded-lg font-semibold transition transform hover:scale-105">
            View Details
          </button>
        </div>
      </motion.div>
    ))}
  </div>
</section>




      {/* Why Choose Us - Modern */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          Why Choose <span className="text-teal-500">Spaceswala</span>?
        </h2>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <HomeIcon className="w-14 h-14 text-white p-3 bg-teal-500 rounded-full mx-auto" />,
              title: "Extensive Property Options",
              desc: "Access a wide range of premium and budget-friendly properties tailored to your needs.",
            },
            {
              icon: <ShieldCheckIcon className="w-14 h-14 text-white p-3 bg-teal-500 rounded-full mx-auto" />,
              title: "Trusted & Verified",
              desc: "Every listing is verified and secure, giving you peace of mind in your investment.",
            },
            {
              icon: <UsersIcon className="w-14 h-14 text-white p-3 bg-teal-500 rounded-full mx-auto" />,
              title: "Expert Guidance",
              desc: "Professional advisors guide you at every step to make your property journey hassle-free.",
            },
            {
              icon: <StarIcon className="w-14 h-14 text-white p-3 bg-teal-500 rounded-full mx-auto" />,
              title: "Customer Satisfaction",
              desc: "Thousands of happy clients have found their dream homes with our dedicated team.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transform hover:-translate-y-3 transition-all"
            >
              {item.icon}
              <h3 className="text-xl sm:text-2xl font-semibold mt-5">{item.title}</h3>
              <p className="text-gray-600 mt-3">{item.desc}</p>
              <div className="mt-5 w-12 h-1 bg-teal-500 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          What Our <span className="text-teal-500">Clients Say</span>
        </h2>
        <div className="max-w-5xl mx-auto grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6">
          {[
            {
              name: "Amit Sharma",
              feedback: "Spaceswala helped me find my dream home quickly and hassle-free!",
            },
            {
              name: "Priya Verma",
              feedback: "Professional and transparent service. Highly recommend!",
            },
            {
              name: "Rahul Mehta",
              feedback: "Amazing selection of properties and very supportive staff.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transform hover:-translate-y-2 transition"
            >
              <p className="text-gray-700 italic">“{t.feedback}”</p>
              <h4 className="mt-4 font-semibold text-teal-600">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-teal-500">Services</span>
        </h2>
        <div className="max-w-6xl mx-auto grid gap-6 sm:gap-8 md:grid-cols-3 px-4 sm:px-6">
          {[
            {
              icon: <BuildingOffice2Icon className="w-12 h-12 mx-auto text-teal-500" />,
              title: "Property Buying",
              desc: "Assistance in buying residential and commercial properties hassle-free.",
            },
            {
              icon: <HomeIcon className="w-12 h-12 mx-auto text-teal-500" />,
              title: "Property Renting",
              desc: "Find rental homes and offices quickly with verified listings.",
            },
            {
              icon: <StarIcon className="w-12 h-12 mx-auto text-teal-500" />,
              title: "Premium Support",
              desc: "Personalized guidance and 24/7 support for every client.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-lg transform hover:-translate-y-2 transition"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="relative bg-teal-600 text-white py-16 sm:py-20 text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 px-4 sm:px-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Ready to find your dream property?
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Join thousands of happy clients who found their perfect home with us.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-white text-teal-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:scale-105"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
