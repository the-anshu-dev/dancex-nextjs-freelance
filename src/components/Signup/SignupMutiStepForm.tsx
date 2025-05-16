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
    content: <DanceInterest/>,
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
    <div className="p-6 bg-white rounded-2xl shadow-xl  mx-auto mt-10 transition-all duration-300">

       <div className=" flex flex-col gap-y-1 mb-5">
             <h1 className="text-lg text-black">DanceX Registeration Form</h1>
             <p className="text-[13px] text-black">Please fill out the required information to register</p>
             </div>

      <Steps
        current={current}
        items={items}
        className="custom-steps"
      />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24, display:'flex', justifyContent:'flex-end'}}>
      {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}

        {current < steps.length - 1 && (
          <Button type="primary" disabled={!isNext} onClick={() => next()} className='bg-blue-600'>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        
      </div>
      <style jsx>{`
        .custom-steps .ant-steps-item-title {
          color: red !important;
        }
      `}</style>
    </div>
  );
};

export default SignupMutiStepForm;
