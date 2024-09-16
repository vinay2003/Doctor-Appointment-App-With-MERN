import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b'>
      <img onClick={() => navigate('./')} className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />
      
      <ul className='hidden md:flex items-center gap-5 font-medium'>
        <NavLink to="/" activeClassName="active">
          <li className="cursor-pointer">HOME</li>
        </NavLink>
        <NavLink to="/doctors" activeClassName="active">
          <li className="cursor-pointer">ALL DOCTORS</li>
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          <li className="cursor-pointer">ABOUT</li>
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          <li className="cursor-pointer">CONTACT</li>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
            token ? 
            <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-10 rounded-full' src={assets.profile_pic} alt="Porfile photo" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer' >My Profile</p>
                        <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer' >My Appointments</p>
                        <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer' >Logout</p>
                    </div>
                </div>
            </div>
            :
            <button onClick={() => navigate('/login')} className="bg-blue-500 text-white py-2 px-4 rounded-md">Create Account</button>
        }
        
      </div>
    </div>
  );
}

export default Navbar;
