'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const confirmpassword = () => {
    router.push('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 bg-opacity-50">
      {/* Responsive width for form container */}
      <div className="bg-blue-900 rounded-2xl shadow-lg p-8 w-full max-w-[500px] sm:w-[90%] md:w-[80%] lg:w-[500px] text-center">
        <h2 className="text-2xl text-white mb-6">CONFIRM PASSWORD</h2>
        
        <form className="flex flex-col">
          <label className="text-white text-left mb-1">Create New Password</label>
          <div className="flex items-center bg-blue-800 rounded mb-4 px-3 py-2">
          <span className="text-yellow-400 mr-2">🔒</span>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="***********************"
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="text-yellow-400 ml-2 focus:outline-none"
            >
              {passwordVisible ? "🙈" : "👁️"}
            </button>
          </div>
          
          <label className="text-white text-left mb-1">Confirm New Password</label>
          <div className="flex items-center bg-blue-800 rounded mb-4 px-3 py-2">
            <span className="text-yellow-400 mr-2">🔒</span>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="***********************"
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="text-yellow-400 ml-2 focus:outline-none"
            >
              {passwordVisible ? "🙈" : "👁️"}
            </button>
          </div>

        

          {/* Centering the Login Button */}
          <div className="flex justify-center mb-4 mt-10">
            <button type='button' onClick={confirmpassword} className="w-full sm:w-48 bg-yellow-400 text-blue-900 rounded-2xl py-2 text-lg font-semibold hover:bg-yellow-500 transition duration-300">
              Submit
            </button>
          </div>
          
          
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
