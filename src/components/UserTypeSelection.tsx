import React, { useEffect } from 'react';
import { FiUser, FiStar, FiBriefcase, FiSmile, FiMoreHorizontal } from 'react-icons/fi';

const UserTypeSelection = ({ state, setState, setIsNext }: any) => {
  const options = [
    { value: '0', label: 'Student', icon: <FiUser /> },
    { value: '1', label: 'Teacher', icon: <FiStar /> },
    { value: '2', label: 'Professional Dancer', icon: <FiBriefcase /> },
    { value: '3', label: 'Dance Teacher', icon: <FiSmile /> },
    { value: '4', label: 'Other', icon: <FiMoreHorizontal /> },
  ];

  // Handle click: store full object {id, label}
  const handleChange = (value: string) => {
    const selected = options.find((opt) => opt.value === value);
    if (selected) {
      setState((prev: any) => ({
        ...prev,
        userRole: { id: value, label: selected.label },
      }));
    }
  };

  // Trigger setIsNext if default exists
  useEffect(() => {
    if (state.userRole?.id !== '') {
      setIsNext(true);
    }
  }, [state.userRole]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {options.map((option) => (
        <label
          key={option.value}
          className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-1 ${
            state.userRole?.id?.toString() === option.value
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
  );
};

export default UserTypeSelection;
