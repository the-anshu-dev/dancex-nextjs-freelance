// 'use client';

// import { useRouter } from 'next/navigation';
// import { useRef, useState, useEffect } from 'react';

// export default function OtpScreen() {
//   const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
//   const [timer, setTimer] = useState(30);
//   const inputs = useRef<Array<HTMLInputElement | null>>([]);
//   const router = useRouter();

//   useEffect(() => {
//     if (timer === 0) return;
//     const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
//     return () => clearInterval(interval);
//   }, [timer]);

//   const handleChange = (index: number, value: string) => {
//     if (!/^\d*$/.test(value)) return;
//     const updated = [...otp];
//     updated[index] = value;
//     setOtp(updated);
//     if (value && index < 5) inputs.current[index + 1]?.focus();
//   };

//   const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
//     if (e.key === 'Backspace' && !otp[index] && index > 0) {
//       inputs.current[index - 1]?.focus();
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length === 6) {
//       alert('OTP Verified!');
//       // router.push('/dashboard');
//     }
//   };

//   const resendOtp = () => {
//     if (timer === 0) {
//       alert('OTP Resent!');
//       setOtp(['', '', '', '', '', '']);
//       setTimer(30);
//       inputs.current[0]?.focus();
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-200">
//       <div className="w-[375px] h-[667px] bg-white rounded-[2.5rem] shadow-2xl border-[6px] border-gray-300 relative overflow-hidden">
//         <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gray-400 rounded-full" />
//         <div className="p-6 pt-10 h-full flex flex-col justify-between">
//           <div>
//             <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Enter OTP</h2>
//             <p className="text-center text-sm text-gray-500 mb-8">
//               We've sent an OTP to your mobile number
//             </p>
//             <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
//               <div className="flex gap-3">
//                 {otp.map((digit, index) => (
//                   <input
//                     key={index}
//                     ref={(el) => {
//                       inputs.current[index] = el;
//                     }}
//                     type="text"
//                     inputMode="numeric"
//                     maxLength={1}
//                     value={digit}
//                     onChange={(e) => handleChange(index, e.target.value)}
//                     onKeyDown={(e) => handleKeyDown(e, index)}
//                     className="w-12 h-12 text-center text-black text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                 ))}
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
//               >
//                 Verify OTP
//               </button>
//             </form>
//           </div>

//           <div className="text-center text-sm text-gray-400 mt-8">
//             Didn’t receive OTP?{' '}
//             {timer > 0 ? (
//               <span className="text-gray-400">Resend in {timer}s</span>
//             ) : (
//               <span
//                 onClick={resendOtp}
//                 className="text-indigo-600 underline cursor-pointer"
//               >
//                 Resend
//               </span>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







// 'use client';

// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function SignInScreen() {
//   const [mobile, setMobile] = useState('');
//   const router = useRouter();

//   // const handleSubmit = (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   if (mobile.length === 10) {
//   //     router.push('/otp'); // Navigate to OTP screen
//   //   }
//   // };
//    const handleSendOtp = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (mobile.length === 10) return alert('Enter a valid phone number');

//     // Simulate OTP sending
//     alert(`OTP sent to ${mobile}`);
//     router.push('/otp');
//   };


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
//       <div className="w-[375px] h-[667px] bg-white rounded-[2.5rem] shadow-2xl border-[6px] border-gray-300 relative overflow-hidden">
//         <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gray-400 rounded-full" />
//         <div className="p-6 pt-10 h-full flex flex-col justify-between">
//           <div>
//             <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
//             <p className="text-center text-sm text-gray-500 mb-8">
//               Enter your mobile number to continue
//             </p>
//             <form onSubmit={handleSendOtp} className="flex flex-col gap-4">
//               <input
//                 type="tel"
//                 value={mobile}
//                 onChange={(e) => setMobile(e.target.value)}
//                 placeholder="Enter mobile number"
//                 className="px-4 py-3 rounded-lg border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
//               >
//                 Send OTP
//               </button>
//             </form>
//           </div>

//           <div className="text-center text-sm text-gray-400 mt-8">
//             By continuing, you agree to our{' '}
//             <span className="text-blue-600 underline cursor-pointer">Terms & Privacy</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





