import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            title={`Book an appointment with ${item.name}`}
            onClick={() => navigate(`/appointments/${item._id}`)}
            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'
          >
            <div className='w-full h-48 flex items-center justify-center bg-blue-50'>
              <img
                className='w-full h-full object-contain'
                src={item.image || '/path/to/default-image.jpg'}  // Replace with actual default image path
                alt={item.name || 'Doctor Image'}
              />
            </div>
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                <p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name || 'Doctor Name'}</p>
              <p className='text-gray-600 text-sm'>{item.speciality || 'Speciality'}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/doctors');
          window.scrollTo(0, 0); // Smooth scroll to top
        }}
        className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;
