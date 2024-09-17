import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b'>
      {/* Logo */}
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center gap-5 font-medium'>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          <li className="cursor-pointer">HOME</li>
        </NavLink>
        <NavLink to="/doctors" className={({ isActive }) => (isActive ? 'active' : '')}>
          <li className="cursor-pointer">ALL DOCTORS</li>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          <li className="cursor-pointer">ABOUT</li>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          <li className="cursor-pointer">CONTACT</li>
        </NavLink>
      </ul>

      {/* Profile and Mobile Menu */}
      <div className='flex items-center gap-4'>
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-10 rounded-full' src={assets.profile_pic} alt="Profile" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="Dropdown Icon" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <button onClick={() => navigate('/my-profile')} className='hover:text-black'>
                  My Profile
                </button>
                <button onClick={() => navigate('/my-appointments')} className='hover:text-black'>
                  My Appointments
                </button>
                <button onClick={() => setToken(false)} className='hover:text-black'>
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => navigate('/login')} className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Create Account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className='w-6 md:hidden cursor-pointer'
          src={assets.menu_icon}
          alt="Menu Icon"
        />

        {/* Mobile Menu */}
        <div className={`${showMenu ? 'fixed w-full h-full' : 'w-0 h-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all duration-300`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={assets.logo} alt="Logo" />
            <img className='w-7 cursor-pointer' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="Close Icon" />
          </div>
          <ul className='flex flex-col items-center gap-8 font-medium text-lg'>
            <NavLink to="/" onClick={() => setShowMenu(false)} className="hover:text-blue-500">
              HOME
            </NavLink>
            <NavLink to="/doctors" onClick={() => setShowMenu(false)} className="hover:text-blue-500">
              ALL DOCTORS
            </NavLink>
            <NavLink to="/about" onClick={() => setShowMenu(false)} className="hover:text-blue-500">
              ABOUT
            </NavLink>
            <NavLink to="/contact" onClick={() => setShowMenu(false)} className="hover:text-blue-500">
              CONTACT
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
