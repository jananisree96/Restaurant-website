import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

export const Popup = ({ showPopup, setShowPopup}) => {
  return (
    <div>
      {showPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 shadow-sm bg-white rounded-md duration-200 w-[300px]">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-dark">Login</h1>
              <IoCloseCircleOutline
                className="text-2xl cursor-pointer"
                onClick={() => setShowPopup(false)}
              />
            </div>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <input
                  type="password"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-full bg-primary text-white p-2 rounded-md"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mt-2 text-center">
              <p className="mb-4 text-gray">or login with</p>
              <div className="flex justify-around">
                <button className="flex items-center justify-center py-2 px-4 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">
                  <FcGoogle className="text-2xl" />
                </button>
                <button className="flex items-center justify-center py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                  <FaFacebook className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
