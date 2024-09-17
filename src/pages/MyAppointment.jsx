import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointment = () => {

  const { doctors } = useContext(AppContext)

  return (
    <div className="p-4">
      {/* Title */}
      <p className='pb-3 mt-12 text-lg font-medium text-zinc-700 border-b border-gray-300'>
        My Appointments
      </p>

      {/* Appointment List */}
      <div>
        {doctors.slice(0, 2).map((item, index) => (
          <div 
            key={index} 
            className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b border-gray-200'
          >
            {/* Doctor's Image */}
            <div>
              <img 
                className='w-32 h-32 object-cover bg-indigo-50 rounded-md' 
                src={item.image} 
                alt={`Doctor ${item.name}`} 
              />
            </div>

            {/* Doctor's Details */}
            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-neutral-800 font-semibold'>{item.name}</p>
              <p>{item.speciality}</p>

              {/* Address */}
              <p className='text-zinc-700 font-medium mt-2'>Address:</p>
              <p className='text-xs'>{item.address.line1}</p>
              <p className='text-xs'>{item.address.line2}</p>

              {/* Date & Time */}
              <p className='text-xs mt-2'>
                <span className='text-sm text-neutral-700 font-medium'>
                  Date & Time:
                </span> 
                25, July, 2024 | 8:30 PM
              </p>
            </div>

            {/* Buttons */}
            <div className='flex flex-col gap-2 justify-end'>
              <button className='text-sm text-white text-center sm:min-w-[120px] py-2 bg-blue-500 hover:bg-blue-600 rounded transition duration-300'>
                Pay Online
              </button>
              <button className='text-sm text-white text-center sm:min-w-[120px] py-2 bg-red-500 hover:bg-red-600 rounded transition duration-300'>
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointment
