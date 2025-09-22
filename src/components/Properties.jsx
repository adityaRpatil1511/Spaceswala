import React from "react";
import { MapPin, Bed, Droplet, Ruler } from "lucide-react";
import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    type: "Apartment",
    name: "Luxury Apartment",
    location: "Mumbai",
    price: "₹1.2 Cr",
    bedrooms: 3,
    bathrooms: 2,
    area: "1800 sqft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    type: "Rowhouse",
    name: "Modern Rowhouse",
    location: "Pune",
    price: "₹2.5 Cr",
    bedrooms: 4,
    bathrooms: 3,
    area: "2500 sqft",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    type: "Plot",
    name: "Open Plot",
    location: "Bangalore",
    price: "₹75 Lakh",
    bedrooms: 0,
    bathrooms: 0,
    area: "2000 sqft",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    type: "Apartment",
    name: "Sea View Apartment",
    location: "Goa",
    price: "₹3 Cr",
    bedrooms: 3,
    bathrooms: 3,
    area: "2200 sqft",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPCROj4A1gomErcjIyb3SeUykahJSxkzMeA&s",
  },
  {
    id: 5,
    type: "Rowhouse",
    name: "Cozy Rowhouse",
    location: "Chennai",
    price: "₹1.8 Cr",
    bedrooms: 3,
    bathrooms: 2,
    area: "1900 sqft",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    type: "Plot",
    name: "Corner Plot",
    location: "Hyderabad",
    price: "₹60 Lakh",
    bedrooms: 0,
    bathrooms: 0,
    area: "1800 sqft",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-hYZEUi_ZIvEhawUoMV5S0HcZEk9CaBzLw&s",
  },
];

const PropertyCard = ({ property, index }) => (
  <motion.div
    key={property.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
  >
    <div className="relative w-full h-48 sm:h-56 md:h-48">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-full object-cover"
      />
      <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
        {property.type}
      </span>
    </div>
    <div className="p-4">
      <h2 className="text-md font-bold text-gray-800">{property.name}</h2>
      <p className="text-gray-500 flex items-center gap-1 mt-1 text-xs">
        <MapPin className="w-3 h-3" /> {property.location}
      </p>
      <p className="text-green-600 font-semibold mt-2 text-sm">{property.price}</p>

      <div className="flex justify-between items-center mt-2 text-gray-600 text-xs flex-wrap gap-3">
        <span className="inline-flex items-center gap-1">
          <Bed className="w-3 h-3" /> {property.bedrooms} Beds
        </span>
        <span className="inline-flex items-center gap-1">
          <Droplet className="w-3 h-3" /> {property.bathrooms} Baths
        </span>
        <span className="inline-flex items-center gap-1">
          <Ruler className="w-3 h-3" /> {property.area}
        </span>
      </div>

      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded font-semibold text-sm hover:bg-blue-700 transition-colors">
        View Details
      </button>
    </div>
  </motion.div>
);

const Properties = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Explore Our Properties
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <PropertyCard key={property.id} property={property} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
