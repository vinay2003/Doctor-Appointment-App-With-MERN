import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      {/* About Us Section */}
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          ABOUT <span className='text-gray-700 font-medium'>US</span>
        </p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="About us" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. 
            At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments 
            and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, 
            integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking 
            your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <b className='text-gray-800'>Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap 
            between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='text-center text-xl my-10'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row gap-6 mb-20'>
        {/* Efficiency */}
        <div className='border px-10 py-10 flex flex-col gap-5 text-[15px] hover:bg-indigo-700 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b className='text-gray-800'>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        
        {/* Convenience */}
        <div className='border px-10 py-10 flex flex-col gap-5 text-[15px] hover:bg-indigo-700 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b className='text-gray-800'>CONVENIENCE:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        {/* Personalization */}
        <div className='border px-10 py-10 flex flex-col gap-5 text-[15px] hover:bg-indigo-700 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b className='text-gray-800'>PERSONALIZATION:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About
