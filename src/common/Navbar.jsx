import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Building2,
  Info,
  Phone,
  Wallet,
  Briefcase,
  FileText,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/", icon: <Home size={22} /> },
    { name: "Properties", path: "/properties", icon: <Building2 size={22} /> },
    { name: "Pay Rent", path: "/payrent", icon: <Wallet size={22} /> },
    { name: "Services", path: "/services", icon: <Briefcase size={22} /> },
    { name: "Blogs", path: "/blogs", icon: <FileText size={22} /> },
    { name: "About Us", path: "/aboutus", icon: <Info size={22} /> },
    { name: "Contact", path: "/contact", icon: <Phone size={22} /> },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#0B0C55]/95 via-[#0B1E6D]/95 to-[#0D0C80]/95 backdrop-blur-md text-white sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6 md:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* Icon part of logo */}
          <div className="bg-teal-400 p-2 rounded-lg shadow-md group-hover:scale-110 transition">
            <Building2 size={28} className="text-[#0B0C55]" />
          </div>
          {/* Text part */}
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
            Spaces<span className="text-teal-400">Wala</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="flex items-center gap-2 font-medium relative group"
            >
              {item.icon}
              <span className="hover:text-teal-400 transition">{item.name}</span>
              {/* Underline animation */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden animate-slideDown bg-[#0B0C55] px-6 py-6 space-y-4 shadow-lg">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 text-lg font-medium hover:text-teal-400 transition"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
