import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
    const { docId } = useParams();
    const { doctors, currencySymbol } = useContext(AppContext);
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const [docInfo, setDocInfo] = useState(null);
    const [docSlots, setDocSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState(null);  // State to store selected time

    // Fetch Doctor Info
    const fetchDocInfo = () => {
        const doctor = doctors.find(doc => doc._id === docId);
        if (doctor) {
            setDocInfo(doctor);
        }
    };

    // Get available slots
    const getAvailableSlots = async () => {
        setDocSlots([]);
        const today = new Date();
        let slotsData = [];

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);

            let endTime = new Date(currentDate);
            endTime.setHours(21, 0, 0, 0);

            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
            } else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }

            let timeSlots = [];
            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime
                });

                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }

            slotsData.push(timeSlots.length > 0 ? timeSlots : []);
        }

        setDocSlots(slotsData);
    };

    useEffect(() => {
        fetchDocInfo();
    }, [doctors, docId]);

    useEffect(() => {
        if (docInfo) {
            getAvailableSlots();
        }
    }, [docInfo]);

    return (
        <div>
            {/* Doctor Details */}
            {docInfo ? (
                <div className='flex flex-col sm:flex-row gap-4'>
                    <div>
                        <img
                            className='bg-indigo-600 w-full sm:max-w-72 rounded-lg'
                            src={docInfo.image || '/path/to/default-image.jpg'}  // Fallback to default image
                            alt={`${docInfo.name}'s profile`}
                        />
                    </div>
                    <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
                        <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
                            {docInfo.name}
                            <img className='w-5' src={assets.verified_icon} alt="Verified" />
                        </p>
                        <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
                            <p>{docInfo.degree} - {docInfo.speciality}</p>
                            <button className='py-0.5 px-2 border text-xs rounded-full'>
                                {docInfo.experience} years experience
                            </button>
                        </div>

                        {/* Doctor About */}
                        <div>
                            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
                                About <img src={assets.info_icon} alt="Info" />
                            </p>
                            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
                        </div>
                        <div>
                            <p className='text-gray-500 font-medium mt-4'>
                                Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading doctor information...</p>
            )}

            {/* Slot Selection */}
            <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
                <p>Booking slots</p>
                <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
                    {docSlots.length > 0 && docSlots.map((slots, index) => (
                        <div
                            className={`text-center py-6 min-w-[4rem] rounded-full cursor-pointer border ${slotIndex === index ? 'bg-indigo-700 text-white' : 'border-gray-200'}`}
                            key={index}
                            onClick={() => setSlotIndex(index)}
                        >
                            <p>{daysOfWeek[(new Date().getDay() + index) % 7]}</p>
                            <p>{new Date().getDate() + index}</p>
                        </div>
                    ))}
                </div>
                
                {/* Render available slot times */}
                <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
                    {docSlots.length > 0 && docSlots[slotIndex].length > 0 ? (
                        docSlots[slotIndex].map((slot, index) => (
                            <p
                                className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${slot.time === slotTime ? 'bg-indigo-600 text-white' : 'text-gray-400 border-gray-300'}`}
                                key={index}
                                onClick={() => setSlotTime(slot.time)}  // Update selected slot time
                            >
                                {slot.time}
                            </p>
                        ))
                    ) : (
                        <p>No available slots</p>
                    )}
                </div>

                {/* Book Appointment Button */}
                <button
                    className={`bg-indigo-700 text-white text-sm font-light px-14 py-3 rounded-full my-6 ${!slotTime && 'opacity-50 cursor-not-allowed'}`}
                    disabled={!slotTime}  // Disable button when no slot selected
                >
                    Book an appointment
                </button>
            </div>

            {/* Related Doctors */}
            <RelatedDoctors docId={docId} speciality={docInfo?.speciality} />
        </div>
    );
}

export default Appointment;
