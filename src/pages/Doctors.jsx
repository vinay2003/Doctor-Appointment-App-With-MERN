import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState(speciality || "");
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const specialties = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  const applyFilter = () => {
    if (selectedSpecialty) {
      setFilterDoc(
        doctors.filter((doc) => doc.speciality === selectedSpecialty)
      );
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, selectedSpecialty]);

  const handleSpecialtyClick = (specialty) => {
    if (selectedSpecialty === specialty) {
      setSelectedSpecialty("");
      navigate("/doctors");
    } else {
      setSelectedSpecialty(specialty);
      navigate(`/doctors/${specialty}`);
    }
  };

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          {specialties.map((spec, index) => (
            <p
              key={index}
              onClick={() => handleSpecialtyClick(spec)}
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border rounded cursor-pointer transition-colors duration-300 ${
                selectedSpecialty === spec
                  ? "bg-blue-100 text-blue-600"
                  : "bg-white text-gray-600"
              }`}
            >
              {spec}
            </p>
          ))}
        </div>
        <div className="w-full grid grid-cols-auto gap-6">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              title={`Book an appointment with ${item.name}`}
              onClick={() => navigate(`/appointments/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 mb-4" // Added margin bottom (mb-4)
            >
              <div className="w-full h-48 flex items-center justify-center bg-blue-50 overflow-hidden">
                <img
                  className="w-full h-full object-contain"
                  src={item.image || "/path/to/default-image.jpg"}
                  alt={item.name || "Doctor Image"}
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">
                  {item.name || "Doctor Name"}
                </p>
                <p className="text-gray-600 text-sm">
                  {item.speciality || "Speciality"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
