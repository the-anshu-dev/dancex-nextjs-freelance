





'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignInScreen() {
  const [mobile, setMobile] = useState('');
  const router = useRouter();

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length !== 10) return alert('Enter a valid phone number');

    alert(`OTP sent to ${mobile}`);
    router.push('/otp');
  };

  return (
 <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300 p-4 sm:p-6">
  <div className="flex flex-col md:flex-row max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">

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

    {/* Login Form Card */}
    <div className="md:flex-1 p-6 sm:p-10 flex flex-col justify-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-6 sm:mb-8">
        Login
      </h2>
      <p className="text-center text-gray-500 mb-6 sm:mb-10 max-w-xs mx-auto text-sm sm:text-base">
        Enter your mobile number to continue
      </p>

      <form onSubmit={handleSendOtp} className="flex flex-col gap-6 sm:gap-8">
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter mobile number"
          className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-gray-300 text-gray-900 text-base sm:text-lg font-medium focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 sm:py-4 rounded-xl shadow-md transition text-base sm:text-lg"
        >
          Send OTP
        </button>
      </form>

      <div className="text-center text-xs sm:text-sm text-gray-400 mt-10 sm:mt-12 max-w-xs mx-auto px-2">
        By continuing, you agree to our{' '}
        <span className="text-indigo-600 underline cursor-pointer hover:text-indigo-700 transition">
          Terms & Privacy
        </span>
      </div>
    </div>

  </div>
</div>





  );
}
