import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+91 123 893 9999',
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London"
    },
    gender: 'Male',
    dob: '2000-01-20'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img src={userData.image} alt="Profile" className="w-32 h-32 mx-auto rounded-full" />

      {isEdit ? (
        <input 
          type="text" 
          value={userData.name} 
          onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} 
          className="mt-4 block w-full p-2 border border-gray-300 rounded-md"
        />
      ) : (
        <p className="text-center text-2xl font-semibold mt-4">{userData.name}</p>
      )}

      <hr className="my-4" />

      <div>
        <p className="text-xl font-semibold">Contact Information</p>
        <div className="mt-2 space-y-2">
          <div>
            <p className="font-semibold">Email ID:</p>
            <p>{userData.email}</p>
          </div>
          <div>
            <p className="font-semibold">Phone:</p>
            {isEdit ? (
              <input 
                type="text" 
                value={userData.phone} 
                onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p>{userData.phone}</p>
            )}
          </div>
          <div>
            <p className="font-semibold">Address:</p>
            {isEdit ? (
              <div>
                <input 
                  type="text" 
                  value={userData.address.line1} 
                  onChange={e => setUserData(prev => ({
                    ...prev, 
                    address: { ...prev.address, line1: e.target.value }
                  }))} 
                  placeholder="Address Line 1"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <br />
                <input 
                  type="text" 
                  value={userData.address.line2} 
                  onChange={e => setUserData(prev => ({
                    ...prev, 
                    address: { ...prev.address, line2: e.target.value }
                  }))} 
                  placeholder="Address Line 2"
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            ) : (
              <p>{userData.address.line1}<br />{userData.address.line2}</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xl font-semibold">Basic Information</p>
        <div className="mt-2 space-y-2">
          <div>
            <p className="font-semibold">Gender:</p>
            {isEdit ? (
              <select 
                value={userData.gender} 
                onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
          </div>
          <div>
            <p className="font-semibold">Birthday:</p>
            {isEdit ? (
              <input 
                type="date" 
                value={userData.dob} 
                onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6">
        {isEdit ? (
          <button 
            onClick={() => setIsEdit(false)} 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Save information
          </button>
        ) : (
          <button 
            onClick={() => setIsEdit(true)} 
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  )
}

export default MyProfile
