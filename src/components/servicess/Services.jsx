import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServicessEdge from "./ServicessEdge";
import FeatureDevelopers from "./FeatureDevelopers";
import RecommendedSellers from "./Recommendedsellers";
import Image1 from "../../assets/servicess/Image_1.avif";
import Image2 from "../../assets/servicess/Image_2.avif";
import Image3 from "../../assets/servicess/Image_3.avif";
import BackgroundImage from '../../assets/servicess/Bg_Image_1.jpg';

export default function PropertySearch() {
  const [activeTab, setActiveTab] = useState("BUY");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocality, setSelectedLocality] = useState("");
  const [selectedCity, setSelectedCity] = useState("Pune");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBuilder, setSelectedBuilder] = useState(null);

  const navigate = useNavigate();

  const tabs = ["BUY", "RENT", "COMMERCIAL", "PG/CO-LIVING", "PLOTS"];

  const cityLocalities = {
    Pune: ["Ravet", "Baner", "Wakad", "Wagholi", "Punawale"],
    Mumbai: ["Andheri", "Bandra", "Juhu", "Powai", "Borivali"],
    Bangalore: ["Whitefield", "Indiranagar", "Koramangala", "HSR Layout", "Jayanagar"],
    Delhi: ["Dwarka", "Saket", "Rohini", "Vasant Kunj", "Karol Bagh"],
  };

  const localities = cityLocalities[selectedCity];

  const recommendations = [
    {
      price: "₹1.12 Cr - 1.64 Cr",
      name: "Property One",
      developer: "Property One",
      bhk: "2, 3 BHK Apartments",
      location: "Kharadi, Pune",
      image: Image1,
      phone: "+91 9876543210",
    },
    {
      price: "₹1.54 Cr - 3.14 Cr",
      name: "Property Two",
      developer: "Property Two",
      bhk: "3, 3.5, 4, 4.5 BHK Apartments",
      location: "Akurdi, Pune",
      image: Image2,
      phone: "+91 9123456780",
    },
    {
      price: "₹2.23 Cr - 4.07 Cr",
      name: "Property Three",
      developer: "Property Three",
      bhk: "3, 4, 4.5 BHK Apartments",
      location: "Viman Nagar, Pune",
      image: Image3,
      phone: "+91 9988776655",
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/properties/${tab.toLowerCase().replace(/\//g, "-")}`);
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?city=${selectedCity}&query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const openModal = (builder) => {
    setSelectedBuilder(builder);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBuilder(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section
  className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] text-white flex flex-col items-center px-3 sm:px-4 md:px-8 lg:px-16 xl:px-24 bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(to right, rgba(15,23,42,0.85), rgba(51,65,85,0.85)), url(${BackgroundImage})`,
    backgroundColor: '#0f172a', // fallback
  }}
>
  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-8 sm:mt-10 text-center leading-tight">
    Properties to Buy
  </h1>
  <p className="text-gray-300 mt-2 text-xs sm:text-sm md:text-base text-center">
    5K+ listings added daily and 64K+ total verified
  </p>

  {/* Tabs */}
  <div className="flex flex-wrap justify-center mt-4 sm:mt-6 md:mt-8 bg-slate-800 rounded-lg overflow-hidden shadow-lg w-full max-w-2xl">
    {tabs.map((tab) => (
      <button
        key={tab}
        className={`px-2 sm:px-4 md:px-5 py-1.5 sm:py-2.5 text-xs sm:text-sm md:text-base font-medium ${
          activeTab === tab
            ? 'bg-white text-slate-900'
            : 'text-gray-300 hover:bg-slate-700'
        } transition-colors duration-200`}
        onClick={() => handleTabClick(tab)}
      >
        {tab}
      </button>
    ))}
  </div>

  {/* Search bar with City and Locality Dropdown */}
  <div className="flex flex-col sm:flex-row w-full sm:w-[90%] md:w-[70%] lg:w-[60%] bg-white rounded-full mt-5 shadow-lg overflow-hidden items-stretch">
    {/* City Dropdown */}
    <div className="flex items-center border-b sm:border-b-0 sm:border-r border-gray-200 px-3 py-2 bg-white text-black">
      <select
        value={selectedCity}
        onChange={(e) => {
          setSelectedCity(e.target.value);
          setSelectedLocality('');
          setSearchQuery('');
        }}
        className="text-xs sm:text-sm md:text-base bg-transparent outline-none"
      >
        {Object.keys(cityLocalities).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>

    {/* Search Input */}
    <input
      type="text"
      placeholder="Search for locality, landmark, project, or builder"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-gray-700 outline-none text-xs sm:text-sm md:text-base"
    />

    {/* Search Button */}
    <button
      onClick={handleSearch}
      className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold text-xs sm:text-sm md:text-base transition-colors duration-200"
    >
      Search
    </button>
  </div>

  {/* Locality Chips */}
  <div className="mt-5 sm:mt-6 flex flex-col items-center gap-3 sm:gap-4 w-full">
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full max-w-2xl">
      {localities.map((loc) => (
        <span
          key={loc}
          onClick={() => navigate(`/search?city=${selectedCity}&query=${loc}`)}
          className="relative bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium text-purple-700 border border-purple-200 shadow hover:from-purple-200 hover:to-pink-200 hover:text-purple-900 cursor-pointer transition-all duration-200 group"
        >
          {loc}
          <span className="absolute -top-2 -right-2 bg-purple-400 text-white text-[10px] px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            Go
          </span>
        </span>
      ))}
    </div>
  </div>
</section>


      {/* Recommendations */}
      <section className="p-3 sm:p-6 md:p-10 bg-gray-50 mb-10 w-full sm:w-[95%] md:w-[90%] mx-auto rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-2 md:gap-0">
          <div className="mb-3 md:mb-0">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800">
              Recommendations for you
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-1">
              Event special project attractions
            </p>
          </div>
          <button className="text-purple-600 font-medium border border-purple-600 px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg hover:bg-purple-50 transition-colors duration-200 text-xs sm:text-sm md:text-base">
            Explore Now &gt;
          </button>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {recommendations.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 min-h-[350px] flex flex-col"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-t-xl"
                />
                <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  {item.bhk}
                </span>
              </div>
              <div className="p-3 sm:p-4 md:p-5 flex-1 flex flex-col justify-between">
                <p className="text-sm text-gray-400">{item.price}</p>
                <h3 className="font-bold text-base sm:text-lg md:text-xl mt-1 text-gray-800 hover:text-purple-600 transition-colors duration-200">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">{item.developer}</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-2 flex items-center gap-1">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z" />
                  </svg>
                  {item.location}
                </p>
                <button
                  className="mt-3 w-full text-white bg-purple-600 hover:bg-purple-700 font-semibold rounded-lg px-3 py-2 transition-colors duration-200 text-xs sm:text-sm md:text-base"
                  onClick={() => openModal(item)}
                >
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Modal */}
      {isModalOpen && selectedBuilder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-2 sm:px-0">
          <div className="bg-white rounded-xl w-full max-w-xs sm:max-w-md md:max-w-lg p-4 sm:p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-500 hover:text-gray-800 font-bold text-lg sm:text-xl"
            >
              &times;
            </button>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact Seller</h2>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 flex items-center justify-center rounded-full">
                <span className="text-white font-bold text-base sm:text-lg">
                  {selectedBuilder.developer.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base">{selectedBuilder.developer}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{selectedBuilder.phone}</p>
              </div>
            </div>

            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-300 py-1.5 sm:py-2 mb-2 sm:mb-3 focus:outline-none text-xs sm:text-sm"
            />
            <input
              type="tel"
              placeholder="+91 Phone"
              className="w-full border-b border-gray-300 py-1.5 sm:py-2 mb-2 sm:mb-3 focus:outline-none text-xs sm:text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 py-1.5 sm:py-2 mb-2 sm:mb-3 focus:outline-none text-xs sm:text-sm"
            />

            <div className="flex flex-col gap-1 sm:gap-2 text-xs sm:text-sm mb-3 sm:mb-4">
              <label className="flex items-center gap-1 sm:gap-2">
                <input type="checkbox" className="w-3 h-3 sm:w-4 sm:h-4" />
                I agree to be contacted by Housing and agents via WhatsApp, SMS, phone, email etc.
              </label>
              <label className="flex items-center gap-1 sm:gap-2">
                <input type="checkbox" className="w-3 h-3 sm:w-4 sm:h-4" />
                I am interested in Home Loans
              </label>
            </div>

            <button className="w-full bg-gray-400 text-white py-2 sm:py-3 rounded-lg hover:bg-gray-500 transition-colors text-xs sm:text-sm">
              Get Contact Details
            </button>
          </div>
        </div>
      )}

      {/* Services & Featured Developers */}
      <div className="mt-8 sm:mt-10 w-full">
        <div className="mb-8 sm:mb-10 w-full sm:w-[95%] md:w-[90%] mx-auto">
          <ServicessEdge />
        </div>
        <div className="mb-8 sm:mb-10 w-full sm:w-[95%] md:w-[90%] mx-auto">
          <FeatureDevelopers />
        </div>
        <div>
          <RecommendedSellers/>
        </div>
      </div>
    </div>
  );
}
