'use client';

import { useEffect, useRef, useState } from 'react';
import SignupMutiStepForm from '../Signup/SignupMutiStepForm';
import danceXApi from '@/utils/danceXApi';
import MyLoader from '../MyLoader';
import { message } from 'antd';


const roleOptions = [
  { id: 0, label: "Student" },
  { id: 1, label: "Teacher" },
  { id: 2, label: "Professional Dancer" },
  { id: 3, label: "Dance Teacher" },
  { id: 4, label: "Other" },
];


export default function SignInScreen() {
  const [mobile, setMobile] = useState('');
  const [userType, setUserType] = useState<any>(null);
  const [screen, setScreen] = useState<'mobile' | 'otp' | 'register'>('mobile');
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [userToken, setUserToken] = useState('');
  const [loading, setLoading] = useState({
    login: false,
    verifyOtp: false
  })
  const [timer, setTimer] = useState(30);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);


  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);
    if (value && index < 4) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };



  const resendOtp = () => {
    if (timer === 0) {
      alert('OTP Resent!');
      setOtp(['', '', '', '', '', '']);
      setTimer(30);
      inputs.current[0]?.focus();
    }
  };


  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 4) return alert('Enter a 6-digit OTP');

    alert(`Verifying OTP for ${mobile} with code ${otp}`);
    setScreen('otp')
  };





  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading((prev) => ({ ...prev, login: true }));

    try {
      const formData = new FormData();
      formData.append('phone', mobile);
      formData.append('user_type', userType.id);

      const apiRes = await danceXApi.Default.login(formData);
      console.log("LOGIN SCREEN ==> ", apiRes);

      if (apiRes.status === 'true') {
        setScreen('otp');
      } else {
        setScreen('otp');
      }

    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong during login.");
    } finally {
      setLoading((prev) => ({ ...prev, login: false }));
    }
  };


  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading((prev) => ({ ...prev, verifyOtp: true }));

    const enteredOtp = otp.join('');

    if (enteredOtp.length === 4) {
      try {
        const formData = new FormData();
        formData.append('otp', enteredOtp);
        formData.append('phone', mobile);
        formData.append('user_type', userType.id);
        formData.append('device_token', 'dummy');

        const apiRes = await danceXApi.Default.verifyOtp(formData);
        console.log("OTP VERIFY RESPONSE =>", apiRes);

        if (apiRes) {
          setScreen('register');
          setUserToken(apiRes.token)
        }else{
          setScreen('register');
          setUserToken(apiRes.token)
        }

      } catch (error) {
        console.error("OTP Verification Error:", error);
        alert("Something went wrong. Please try again.");
      } finally {
        setLoading((prev) => ({ ...prev, verifyOtp: false }));
      }

    } else {
      alert('Please enter the complete 4-digit OTP.');
      setLoading((prev) => ({ ...prev, verifyOtp: false }));
    }
  };




  return (
    <div className="h-[800px] flex items-center justify-center    sm:p-6">
      <div className={`flex flex-col md:flex-row ${screen == 'register' ? 'max-w-7xl' : 'max-w-5xl'} w-full bg-white rounded-2xl shadow-xl overflow-hidden`}>


        {/* Login Form Card */}

        {/* Phone Section  */}
        {screen == 'mobile' &&
          <>
            {/* Left Card */}
            <div className="md:flex-1 bg-indigo-600 text-white flex flex-col justify-center p-8 sm:p-12 space-y-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-indigo-400/70 mx-auto md:mx-0"></div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center md:text-left">
                Welcome Back!
              </h3>
              <p className="text-indigo-200 max-w-sm mx-auto md:mx-0 text-center md:text-left text-sm sm:text-base">
                Enter your mobile number to continue and receive an OTP to login securely.
              </p>
              <p className="text-indigo-300 text-xs sm:text-sm italic max-w-xs mx-auto md:mx-0 text-center md:text-left">
                We’ll send a one-time password to your mobile number.
              </p>
            </div>

            <div className="md:flex-1 p-6 sm:p-10 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center ">
                Login
              </h2>
              <p className="text-center text-gray-500 mb-6 max-w-xs mx-auto text-sm sm:text-base">
                Enter your mobile number to continue
              </p>

              <form onSubmit={handleLogin} className="flex flex-col gap-6 sm:gap-8">
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter mobile number"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-gray-300 text-gray-900 text-base sm:text-lg font-medium focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
                />


                <select
                  value={userType ? JSON.stringify(userType) : ""}
                  onChange={(e) => setUserType(JSON.parse(e.target.value))}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-transparent border border-gray-300 text-gray-900 text-base sm:text-lg font-medium focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
                >
                  <option value="" disabled>Select your role</option>
                  {roleOptions.map((role) => (
                    <option key={role.id} value={JSON.stringify(role)}>
                      {role.label}
                    </option>
                  ))}
                </select>



                <button
                  disabled={loading.login}
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 sm:py-4 rounded-xl shadow-md transition text-base sm:text-lg"
                >
                  {loading.login ? <MyLoader /> : 'Send OTP'}
                </button>
              </form>

              <div className="text-center text-xs sm:text-sm text-gray-400 mt-10 sm:mt-12 max-w-xs mx-auto px-2">
                By continuing, you agree to our{' '}
                <span className="text-indigo-600 underline cursor-pointer hover:text-indigo-700 transition">
                  Terms & Privacy
                </span>
              </div>
            </div>

          </>


        }

        {/* Otp Section  */}
        {screen == 'otp' &&
          <>
            <div className="md:flex-1 bg-indigo-600 text-white flex flex-col justify-center p-8 sm:p-12 space-y-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-indigo-400/70 mx-auto md:mx-0"></div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center md:text-left">
                Welcome Back!
              </h3>
              <p className="text-indigo-200 max-w-sm mx-auto md:mx-0 text-center md:text-left text-sm sm:text-base">
                Please enter the 6-digit OTP sent to your mobile number to verify your identity and secure your account.
              </p>
              <p className="text-indigo-300 text-xs sm:text-sm italic max-w-xs mx-auto md:mx-0 text-center md:text-left">
                Didn’t get the OTP? You can request a new one once the timer hits zero.
              </p>
            </div>

            <div className="md:flex-1 p-6 sm:p-10 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                Enter OTP
              </h2>
              <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
                We&apos;ve sent an OTP to your mobile number
              </p>

              <form onSubmit={handleOtpSubmit} className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-xs mx-auto">
                <div className="flex gap-3 sm:gap-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => { inputs.current[index] = el; }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-gray-300 text-center text-lg sm:text-xl font-semibold text-gray-900 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
                    />
                  ))}
                </div>

                <button
                disabled={loading.verifyOtp}
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 sm:py-4 rounded-xl shadow-md transition text-base sm:text-lg"
                >
                  {loading.verifyOtp ? <MyLoader/> : 'Verify OTP'}
                </button>
              </form>

              <div className="text-center text-xs sm:text-sm text-gray-400 mt-8 sm:mt-12 max-w-xs mx-auto px-2">
                Didn’t receive OTP?{' '}
                {timer > 0 ? (
                  <span className="text-gray-400 font-mono tracking-wide">Resend in {timer}s</span>
                ) : (
                  <span
                    onClick={resendOtp}
                    className="text-indigo-600 font-semibold underline cursor-pointer hover:text-indigo-700 transition"
                  >
                    Resend
                  </span>
                )}
              </div>
            </div>
          </>

        }
        {/* Register multi-step Section  */}
        {screen == 'register' &&
          <>
            <div className="md:flex-1 bg-indigo-600 text-white flex flex-col justify-center p-8 sm:p-12 space-y-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-indigo-400/70 mx-auto md:mx-0"></div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center md:text-left">
                New Here..!
              </h3>
              <p className="text-indigo-200 max-w-sm mx-auto md:mx-0 text-center md:text-left text-sm sm:text-base">
                Please fill in the details below to create your account. This information will help us personalize your experience and keep your account secure.
              </p>

              <p className="text-indigo-300 text-xs sm:text-sm italic max-w-xs mx-auto md:mx-0 text-center md:text-left">
                All your information is securely encrypted and kept confidential.
              </p>

            </div>

            <SignupMutiStepForm userType={userType} mobile={mobile} userToken={userToken} />
          </>

        }





      </div>



    </div>





  );
}
