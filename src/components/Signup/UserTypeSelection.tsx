import React, { useEffect, useState } from 'react';
import { FiUser, FiStar, FiBriefcase, FiSmile, FiMoreHorizontal } from 'react-icons/fi';

const UserTypeSelection  = ({state, setState, setIsNext}:any) => {
 
  const options = [
    { value: 'student', label: 'Student', icon: <FiUser /> },
    { value: 'teacher', label: 'Teacher', icon: <FiStar /> },
    { value: 'professional-dancer', label: 'Professional Dancer', icon: <FiBriefcase /> },
    { value: 'dance-teacher', label: 'Dance Teacher', icon: <FiSmile /> },
    { value: 'other', label: 'Other', icon: <FiMoreHorizontal /> },
  ];

  const handleChange = (value: string) => {
    // setSelected(value);
    setState((prev:any)=>({...prev, userRole:value}))
  };
  useEffect(()=>{
    if(state.userRole!=''){
        setIsNext(true)
    }
  },[state.userRole])

  return (
    <div className="p-6 bg-white rounded-2xl max-w-lg mx-auto mt-10 transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Choose User Role Type</h2>
      <div className="flex flex-col gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-1 ${
              state.userRole === option.value
                ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold border-transparent'
                : 'bg-gray-100 text-gray-800 border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleChange(option.value)}
          >
            <span className="text-2xl">{option.icon}</span>
            <span className="text-lg">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default UserTypeSelection;