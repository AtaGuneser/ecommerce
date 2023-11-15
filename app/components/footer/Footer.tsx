import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-orange-600 text-slate-100">
      <div className="max-w-screen-xl mx-auto py-4 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-slate-100 hover:text-orange-300">
              Home
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-slate-100 hover:text-orange-300">
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-slate-100 hover:text-orange-300">
              Contact
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-slate-100 hover:text-orange-300">
              Support
            </a>
          </div>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-slate-100 hover:text-orange-300">
            <span className="sr-only">Facebook</span>
            <FaFacebook size={25}/>
          </a>
          <a href="#" className="text-slate-100 hover:text-orange-300">
            <span className="sr-only">Instagram</span>
            <FaInstagram size={25} />
          </a>
          <a href="#" className="text-slate-100 hover:text-orange-300">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin size={25} />
          </a>
        </div>
        <p className="mt-8 text-center text-base leading-6 text-slate-400">
          &copy; 2023 commerce.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
