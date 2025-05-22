



'use client';

import { useRouter } from 'next/navigation';
import { useRef, useState, useEffect } from 'react';

export default function OtpScreen() {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

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
    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 6) {
      alert('OTP Verified!');
      // router.push('/dashboard');
    } else {
      alert('Please enter complete 6-digit OTP.');
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

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-indigo-300 p-4 sm:p-6">
  <div className="flex flex-col md:flex-row max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">

    {/* Left Card */}
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

    {/* OTP Card */}
    <div className="md:flex-1 p-6 sm:p-10 flex flex-col justify-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
        Enter OTP
      </h2>
      <p className="text-center text-gray-500 mb-6 sm:mb-10 text-sm sm:text-base">
        We&apos;ve sent an OTP to your mobile number
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-xs mx-auto">
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
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 sm:py-4 rounded-xl shadow-md transition text-base sm:text-lg"
        >
          Verify OTP
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
  </div>
</div>


  );
}
