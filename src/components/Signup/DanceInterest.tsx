import React, { useEffect, useState } from "react";
import {
  FiUser,
  FiStar,
  FiBriefcase,
  FiSmile,
  FiMoreHorizontal,
} from "react-icons/fi";

const DanceInterest = ({ state, setState, setIsNext }: any) => {
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(false);
  const options = [
    { value: "student", label: "Student", icon: <FiUser /> },
    { value: "teacher", label: "Teacher", icon: <FiStar /> },
    {
      value: "professional-dancer",
      label: "Professional Dancer",
      icon: <FiBriefcase />,
    },
    { value: "dance-teacher", label: "Dance Teacher", icon: <FiSmile /> },
    { value: "other", label: "Other", icon: <FiMoreHorizontal /> },
  ];

  const handleChange = (value: string) => {
    setState((prev:any)=>({...prev, dance_interest: value}));
  };
  const initializeDanceInterest = async () => {
    try {
      setLoading(true);
      
      // const apiRes= await fetch('')
    } catch (error) {
      console.log("ERROR==>", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initializeDanceInterest();
  }, []);

  return (
     <div className="grid grid-cols-2 gap-4">

        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-1 ${
              state.dance_interest === option.value
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

export default DanceInterest;
