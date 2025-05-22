import OtpScreen from "@/components/sign-in/OtpScreen";
import SignInScreen from "@/components/sign-in/SignInScreen";
import SignupMutiStepForm from "@/components/Signup/SignupMutiStepForm";
import React from "react";

const page = () => {
  return (
      <div className="m-10">
      <SignInScreen/>
              <OtpScreen/>
        <SignupMutiStepForm />
      </div>
  );
};

export default page;
