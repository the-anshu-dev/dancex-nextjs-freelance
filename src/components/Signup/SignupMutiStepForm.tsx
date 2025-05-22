







'use client'
import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import UserTypeSelection from './UserTypeSelection';
import PersonalDetails from './PersonalDetails';
import SocialDetails from './SocialDetails';
import DanceInterest from './DanceInterest';


const SignupMutiStepForm: React.FC = () => {
  const [current, setCurrent] = useState(0);
const[isNext, setIsNext]=useState(false);
const[state, setState]=useState({
  userRole:'',
  name:'',
  email:'',
  dob:'',
  city:'',
  avatar:'',
  about:'',
  social:[]
})
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };



  
const steps = [
  {
    title: 'User Type',
    content:<UserTypeSelection state={state} setState={setState}  setIsNext={setIsNext}/>,
  },
  {
    title: 'Personal Details',
    content: <PersonalDetails state={state} setState={setState}  setIsNext={setIsNext}/>,
  },
  {
    title: 'Social Details',
    content:<SocialDetails  state={state} setState={setState}  setIsNext={setIsNext} />,
  },
  {
    title: 'Dance Interst',
    content: <DanceInterest  state={state} setState={setState}  setIsNext={setIsNext} />,
  },
];


  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: '260px',
    textAlign: 'center',
    color: '#000',
    // backgroundColor: token.colorFillAlter,
    // borderRadius: token.borderRadiusLG,
    // border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300 p-4 sm:p-6">
  <div className="flex flex-col md:flex-row max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">

    {/* Left Info Panel */}
    <div className="md:flex-1 bg-indigo-600 text-white flex flex-col justify-center p-8 sm:p-12 space-y-6 text-center md:text-left">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-indigo-400/70 mx-auto md:mx-0"></div>

      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
        DanceX Registration
      </h3>
      <p className="text-indigo-200 max-w-xs sm:max-w-sm mx-auto md:mx-0 text-sm sm:text-base">
        Please fill out the steps to complete your registration.
      </p>
      <p className="text-indigo-300 text-xs sm:text-sm italic max-w-xs mx-auto md:mx-0">
        Let’s get you started on your dance journey!
      </p>
    </div>

    {/* Right Form Panel */}
    <div className="md:flex-1 p-6 sm:p-10 flex flex-col justify-center max-w-md md:max-w-full mx-auto md:mx-0">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-6 sm:mb-8">
        Signup
      </h2>

      <Steps current={current} items={items} className="mb-6 sm:mb-8" />

      <div className="min-h-[260px]">{steps[current].content}</div>

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
            onClick={() => message.success('Registration complete!')}
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
