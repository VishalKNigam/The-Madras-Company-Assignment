import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-lg font-bold mb-4">Products</h3>
          <ul>
            <li>Laptops</li>
            <li>Desktops</li>
            <li>Accessories</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-500">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-lg font-bold mb-4">Subscribe</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-700 p-2 rounded-l focus:outline-none"
            />
            <button className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-8">
        <a href="#" className="text-white mx-2 hover:text-blue-500 transition-all duration-300">
          <FaFacebook />
        </a>
        <a href="#" className="text-white mx-2 hover:text-blue-400 transition-all duration-300">
          <FaTwitter />
        </a>
        <a href="#" className="text-white mx-2 hover:text-pink-500 transition-all duration-300">
          <FaInstagram />
        </a>
        <a href="#" className="text-white mx-2 hover:text-blue-700 transition-all duration-300">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
