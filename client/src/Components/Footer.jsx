import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8 px-6 sm:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0">

        {/* Left Section - Logo & Social Media */}
        <div className="w-full lg:w-1/3 space-y-4 sm:space-y-6 text-center lg:text-left">
          {/* Logo */}
          <img width={140} src={assets.logo} alt="BitoJobs Logo" className="mx-auto lg:mx-0" />

          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-start space-x-3">
            <a href="#" className="hover:opacity-70 transition">
              <img width={32} src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="#" className="hover:opacity-70 transition">
              <img width={32} src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="#" className="hover:opacity-70 transition">
              <img width={32} src={assets.instagram_icon} alt="Instagram" />
            </a>
            <a href="#" className="hover:opacity-70 transition">
              <img width={32} src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Middle & Right Section - Footer Links */}
        <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 text-sm text-center sm:text-left">

          {/* About Us */}
          <div>
            <h4 className="font-semibold mb-3 uppercase tracking-wider text-gray-900">About Us</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Employer Home</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Sitemap</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Credits</a></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="font-semibold mb-3 uppercase tracking-wider text-gray-900">Help & Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Summons/Notices</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Grievances</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Report Issue</a></li>
            </ul>
          </div>

          {/* Legal & Policy */}
          <div>
            <h4 className="font-semibold mb-3 uppercase tracking-wider text-gray-900">Legal</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Fraud Alert</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Trust & Safety</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-600 text-sm mt-8 sm:mt-10 border-t pt-4">
        © {new Date().getFullYear()} BitoJobs | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
