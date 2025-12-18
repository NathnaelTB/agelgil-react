import { Link } from "react-router-dom";
import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 w-screen pt-16 pb-8">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        {/* Branding Section */}
        <div className="flex flex-col items-start text-left w-full md:w-auto">
          <h2 className="text-2xl font-bold text-white mb-4 custom_font">Agelgil</h2>
          <p className="text-sm leading-relaxed mb-6 max-w-xs">
            Pioneering sustainable packaging solutions in Ethiopia. We turn agricultural waste into eco-friendly value.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/agelgil-eco-packaging/" className="hover:text-brown transition-colors">
              <Icon icon="devicon:linkedin" width="24" />
            </a>
            <a href="https://m.me/agelgil.packaging" className="hover:text-brown transition-colors">
              <Icon icon="devicon:facebook" width="24" />
            </a>
            <a href="https://api.whatsapp.com/message/UGIQ5QDVEFG5A1" className="hover:text-brown transition-colors">
              <Icon icon="logos:whatsapp-icon" width="24" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start text-left w-full md:w-auto">
          <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
          <div className="flex flex-col space-y-3 text-sm w-full">
            <Link className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block" to="/">Home</Link>
            <Link className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block" to="/news">News</Link>
            <Link className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block" to="/product">Our Products</Link>
            <Link className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block" to="/impact">Our Impact</Link>
            <Link className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block" to="/about">About Us</Link>
            <Link className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block" to="/contact">Contact Us</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start text-left w-full md:w-auto">
          <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
          <div className="space-y-4 flex flex-col items-start">
            <div className="flex items-start justify-start">
              <Icon icon="mdi:map-marker" className="text-brown text-xl mr-3 mt-1 flex-shrink-0" />
              <span>Lemlemitu Bahir Dar Commercial Center,<br /> Bahir Dar, Ethiopia</span>
            </div>
            <div className="flex flex-col items-start text-left">
              <div className="flex items-center justify-start">
                <Icon icon="mdi:phone" className="text-brown text-xl mr-3 flex-shrink-0" />
                <span>+251 936 337 889</span>
              </div>
              <div className="flex items-center justify-start ml-8 mt-1">
                <span>+251 966 206 636</span>
              </div>
              <div className="flex items-center justify-start ml-8 mt-1">
                <span>+251 966 206 640</span>
              </div>
            </div>
            <div className="flex items-center justify-start">
              <Icon icon="mdi:email" className="text-brown text-xl mr-3 flex-shrink-0" />
              <span>contact@agelgileco-package.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-8 border-t border-gray-800 text-left text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Agelgil Eco Packaging. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
