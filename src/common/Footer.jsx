import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-6 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Spaces<span className="text-teal-500">Wala</span></h2>
          <p className="text-sm leading-relaxed">
            SpacesWala helps you find perfect residential and commercial spaces 
            with trusted deals and seamless service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-teal-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="/aboutus" className="hover:text-teal-400 transition-colors">About Us</a>
            </li>
            <li>
              <a href="/properties" className="hover:text-teal-400 transition-colors">Properties</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-teal-400 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li>
              Email: 
              <a href="mailto:info@spaceswala.com" className="hover:text-teal-400 transition-colors"> info@spaceswala.com</a>
            </li>
            <li>
              Phone: 
              <a href="tel:+911234567890" className="hover:text-teal-400 transition-colors"> +91 12345 67890</a>
            </li>
            <li>Address: 123 Main Street, Mumbai, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-teal-400 transition transform hover:scale-110">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-teal-400 transition transform hover:scale-110">
              <Twitter size={22} />
            </a>
            <a href="#" className="hover:text-teal-400 transition transform hover:scale-110">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-teal-400 transition transform hover:scale-110">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-gray-700"></div>

      {/* Bottom Copyright */}
      <div className="pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} <span className="text-white">SpacesWala</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
