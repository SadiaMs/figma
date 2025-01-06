'use client'
import Free from '@/components/Free';
import React, { useState } from 'react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex max-w-[1440px] mx-auto my-12">
      {/* Left side: Login Form */}
      <div className="w-1/2 p-6  rounded-l-lg">
        {isLogin ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Log In</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm">Username or email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <input type="checkbox" id="remember" className="mr-2" />
                  <label htmlFor="remember" className="text-sm">Remember Me</label>
                </div>
             
              </div>
              <button
                type="submit"
                className="w-[180px] bg-transparent text-black outline py-2 rounded-2xl"
              >
                Log In
              </button>
            </form>
            <p className="mt-4 text-sm text-center">
            Lost Your Password?{' '}
              
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 rounded"
              >
                Register
              </button>
            </form>
            <p className="mt-4 text-sm text-center">
              Already have an account?{' '}
              <button
                className="text-yellow-500"
                onClick={() => setIsLogin(true)}
              >
                Log In
              </button>
            </p>
          </div>
        )}
      </div>

      {/* Right side: Form Description or Image */}
      <div className="w-1/2 p-6  rounded-r-lg">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <label htmlFor="email" className="block text-sm"> Email Address</label>
        <input
                  type="Email address"
                  id="password"
                  name="Email address"
                  placeholder="Email address"
                  className="w-full p-2 border border-gray-300 rounded"
                />
        <p className="text-gray-600">
        A link to set a new password will be sent to your email address.
        </p>
        <p className="">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our<span> privacy policy.</span></p>
        <button className="w-[180px] outline mt-[35px]  p-2 rounded-2xl">View Cart</button>
      </div>
      <div><Free /></div>
    </div>
  );
};

export default AuthPage;
