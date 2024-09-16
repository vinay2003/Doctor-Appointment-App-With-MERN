import React from 'react';
import { specialityData } from '../assets/assets_frontend/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>
      <div className='flex sm:flex-wrap sm:justify-center gap-6 pt-5 w-full overflow-x-auto'>
        {specialityData.map((item, index) => (
          <Link onClick={() => scrollTo(0,0)}
            key={index} 
            to={`/doctors/${item.speciality}`} 
            className="flex flex-col items-center gap-2 bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <img className="w-20 h-20 object-cover" src={item.image} alt={item.speciality} />
            <p className="text-sm font-medium">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SpecialityMenu;
