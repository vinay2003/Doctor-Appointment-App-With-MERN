import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row flex-wrap bg-indigo-500 rounded-lg px-6 md:px-10 lg:px-20 py-8 md:py-12 lg:py-16">
            {/* Left side */}
            <div className="md:w-1/2 flex flext-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
                <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
                    Book Appointment <br /> With Trusted Doctors
                </p>
                <div className="">
                    <img className="w-16 h-16" src={assets.group_profiles} alt="Group of doctors" />
                    <p className="text-lg">
                        Simply browse through our extensive list of trusted doctors,<br /> schedule your appointment hassle-free.
                    </p>
                </div>
                <a href="#" className="flex items-center text-white bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-md font-medium">
                    Book appointment <img className="ml-2" src={assets.arrow_icon} alt="Arrow icon" />
                </a>
            </div>

            {/* Right side */}
            <div className="md:w-1/2 relative">
                <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src={assets.header_img} alt="Header illustration" />
            </div>
        </div>
    );
}

export default Header;
