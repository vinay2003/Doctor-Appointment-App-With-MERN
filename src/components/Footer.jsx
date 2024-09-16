import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4 py-10 md:px-10">
        <div className="flex flex-col sm:grid grid-cols-3 gap-14 text-sm">
          {/*---------left------------*/}
          <div className="flex flex-col gap-4">
            <img src={assets.logo} alt="Company Logo" className="w-32" />
            <p className="w-full md:w-2/3 text-gray-500 leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          </div>
          {/*---------Center------------*/}
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Company</p>
            <ul className="space-y-1">
              <li><a href="#home" className="hover:text-blue-600">Home</a></li>
              <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#delivery" className="hover:text-blue-600">Delivery</a></li>
              <li><a href="#privacy" className="hover:text-blue-600">Privacy Policy</a></li>
            </ul>
          </div>
          {/*---------Right------------*/}
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Get in Touch</p>
            <ul className="space-y-1">
              <li>+1-222-454-7890</li>
              <li>prescripto@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 border-t border-gray-300 pt-4">
          <p className="text-sm">
            &copy; 2024 Vinay Sharma - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
