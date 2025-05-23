import { FaSpinner } from "react-icons/fa";
import { TbLoader3 } from "react-icons/tb";

const MyLoader = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <TbLoader3 className="animate-spin text-white text-4xl" />
    </div>
  );
};

export default MyLoader;
