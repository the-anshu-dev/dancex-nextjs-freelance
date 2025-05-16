import React, { useEffect, useState } from "react";
import {
  FiUser,
  FiStar,
  FiBriefcase,
  FiSmile,
  FiMoreHorizontal,
} from "react-icons/fi";

const DanceInterest: React.FC = () => {
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
    setSelected(value);
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
    <div className="mx-auto mt-10 max-w-lg rounded-2xl bg-white p-6 transition-all duration-300">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
        Choose User Role Type
      </h2>
      <div className="flex flex-col gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex transform cursor-pointer items-center gap-4 rounded-xl border-2 p-4 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg ${
              selected === option.value
                ? "border-transparent bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold text-white"
                : "border-gray-200 bg-gray-100 text-gray-800 hover:border-gray-300"
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

export default DanceInterest;
