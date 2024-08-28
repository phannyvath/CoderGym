import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info Section */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4">Company Name</h2>
          <p className="text-black">
            We are dedicated to providing the best quality products and services
            to enhance your fitness and wellness journey.
          </p>
          <p className="mt-4 text-black">
            Address: 123 Fitness St, Workout City, Country
          </p>
          <p className="mt-2 text-black">Phone: +123 456 789</p>
          <p className="mt-2 text-black">Email: info@company.com</p>
        </div>

        {/* Quick Links Section */}
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="text-black hover:text-primary transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-black hover:text-primary transition"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-black hover:text-primary transition"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="text-black hover:text-primary transition"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-primary transition"
            >
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-primary transition"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-primary transition"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-primary transition"
            >
              <FaLinkedinIn className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4">Our Location</h3>
          <iframe
            className="w-full h-48 md:h-64"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5462658191626!2d144.956054!3d-37.817209999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne!5e0!3m2!1sen!2sau!4v1632742855553!5m2!1sen!2sau"
            allowFullScreen=""
            loading="lazy"
            title="Company Location"
          ></iframe>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center md:text-left">
        <p className="text-white">
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
