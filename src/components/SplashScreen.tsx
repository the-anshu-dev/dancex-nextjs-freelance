import Image from "next/image";
import React from "react";
import splashGif from "../../public/logo.png";
const SplashScreen = () => {
  return (
    <div className="w-full h-screen overflow-none bg-[#121928] flex flex-col items-center justify-center">
      <Image src={splashGif} alt="SplashScreen.gif" className="w-64" style={{}} />
    </div>
  );
};
export default SplashScreen;
