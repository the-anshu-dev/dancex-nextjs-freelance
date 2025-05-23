







'use client'
import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import UserTypeSelection from './UserTypeSelection';
import PersonalDetails from './PersonalDetails';
import SocialDetails from './SocialDetails';
import DanceInterest from './DanceInterest';


const SignupMutiStepForm= ({userType,userToken, mobile}:any) => {


  const [current, setCurrent] = useState(0);
  const [isNext, setIsNext] = useState(false);
  const [state, setState] = useState({
    userRole: userType,
    name: '',
    email: '',
    phone:mobile,
    userToken:userToken,
    dob: '',
    city: '',
    avatar: '',
    about: '',
    social: [],
    dance_interest:''
  })

  console.log('SATET ===> DATA ==> ', state)
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };




  const steps = [
    {
      title: 'Choose user role',
      content: <UserTypeSelection state={state} setState={setState} setIsNext={setIsNext} />,
    },
    {
      title: 'Personal Details',
      content: <PersonalDetails state={state} setState={setState} setIsNext={setIsNext} />,
    },
    {
      title: 'Social Details',
      content: <SocialDetails state={state} setState={setState} setIsNext={setIsNext} />,
    },
    {
      title: 'Dance Interst',
      content: <DanceInterest state={state} setState={setState} setIsNext={setIsNext} />,
    },
  ];


  const items = steps.map((item) => ({ key: item.title, title: item.title }));
 

  const handleRegisteration=()=>{
    console.log('ALL DETAILS STATE ===>', state)
  }
  return (
    <div className=" flex items-center justify-center  p-4 sm:p-6">
      <div className={`flex flex-col md:flex-row max-w-5xl w-full overflow-hidden`}>
{/* {userToken} */}
        {/* Left Info Panel */}
       
        {/* Right Form Panel */}
        <div className="md:flex-1 sm:p-10 flex flex-col justify-center max-w-md md:max-w-full mx-auto md:mx-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center  ">
           {steps[current].title}
          </h2>
          <p className="text-center text-gray-500 mb-6  text-sm sm:text-base">
            Let's help us to collect your information to make better bond with us.
          </p>

          <Steps current={current} items={items} className="mb-6 sm:mb-8" responsive />

          <div className="min-h-[260px] max-w-7xl">{steps[current].content}</div>

          <div className="mt-6 flex flex-col sm:flex-row justify-end gap-4">
            {current > 0 && (
              <Button
                style={{ minWidth: 120 }}
                onClick={prev}
                className="w-full sm:w-auto"
              >
                Previous
              </Button>
            )}

            {current < steps.length - 1 && (
              <Button
                type="primary"
                disabled={!isNext}
                onClick={next}
                className="bg-indigo-600 hover:bg-indigo-700 w-full sm:w-auto"
                style={{ minWidth: 120 }}
              >
                Next
              </Button>
            )}

            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={ handleRegisteration}
                className="bg-indigo-600 hover:bg-indigo-700 w-full sm:w-auto"
                style={{ minWidth: 120 }}
              >
                Done
              </Button>
            )}
          </div>
        </div>

      </div>
    </div>

  );
};

export default SignupMutiStepForm;
