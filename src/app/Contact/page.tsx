
import { Poppins } from 'next/font/google';
import Image from 'next/image';

import React from 'react';
import { FaClock, FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const Contact = () => {
    return ( 
           <div>
            <div> 
                <section className="relative bg-gray-800 text-white">
      {/* Background Image */}
      <div className="relative w-full h-[60vh] md:h-[80vh]">
        <Image  height={50} width={50} 
          src={"/bg.jpeg"} // Background image
          alt="Banner"
          className="object-cover w-full h-full filter blur-sm"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
        {/* Logo */}
        <Image  height={50} width={50}
          src={"/Meubel House_Logos-05.png"} // Logo image
          alt="Logo"
          className="h-16 md:h-24 mb-4"
        />

        {/* Welcome Message */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Contact
        </h1>

       
        <div className="text-sm md:text-base text-gray-300">
          <span className="hover:text-white cursor-pointer">Home</span>{" "}
          <span className="mx-2">&gt;</span>{" "}
          <span className="hover:text-white cursor-pointer">Contact</span>
        </div>
      </div>
    </section></div>
            <div className="lg:w-[1058px] mt-10 mx-auto flex md:flex-row flex-col justify-between gap-12 md:gap-0 pb-10">
                {/* Left Info Section */}
                <div className="flex flex-col gap-10">
                    {/* Address */}
                    <div className="flex w-[300px] gap-5">
                        <IoLocationSharp className="text-[80px]" />
                        <div className="mt-5 flex flex-col gap-2">
                            <h1 className="text-[24px] font-medium">Address</h1>
                            <p className="  text-[16px]">
                                236 5th SE Avenue, New York NY10000, United States
                            </p>
                        </div>
                    </div>
                    {/* Phone */}
                    <div className="flex w-[300px] gap-5">
                        <FaPhoneAlt className="text-[40px]" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[24px] font-medium font-poppins">Phone</h1>
                            <p className="text-[16px]">
                                Mobile: +(84) 546-6789 <br />
                                Hotline: +(84) 456-6789
                            </p>
                        </div>
                    </div>
                    {/* Working Time */}
                    <div className="flex w-[300px] gap-5">
                        <FaClock className="text-[40px]" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[24px] font-medium">Working Time</h1>
                            <p className="text-[16px]">
                                Monday-Friday: 9:00 - 22:00 <br />
                                Saturday-Sunday: 9:00 - 21:00
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Form Section */}
                <div>
                    <form className="md:w-[531px] w-[90vw] md:h-[741px] h-auto flex flex-col justify-between">
                        {/* Name */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-[16px] font-medium text-black mb-3">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full p-5 border border-gray-400 rounded-[10px] focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-[16px] font-medium text-black mb-3">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full p-5 border border-gray-400 rounded-[10px] focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>

                        {/* Subject */}
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-[16px] font-medium text-black mb-3">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="This is optional"
                                className="w-full p-5 border border-gray-400 rounded-[10px] focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>

                        {/* Message */}
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-[16px] font-medium text-black mb-3">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Hi! I’d like to ask about..."
                                className="w-full p-5 border border-gray-400 rounded-[10px] focus:outline-none focus:ring focus:ring-blue-200"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="md:w-fit w-full bg-transperent text-black border border-radius text-[16px] font-medium py-[12px] px-[44px] rounded-[5px] focus:outline-none focus:ring focus:ring-blue-200"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <section className="bg-[#FAF4F4] body-font">
      <div className="container mx-auto px-5 py-24">
        <div className="flex flex-wrap -mx-4 text-center">
          {/* Column 1 */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-medium text-gray-900 mb-2 hover:underline hover:text-gray-700 transition duration-300">
              Free Delivery
            </h2>
            <p className="leading-relaxed text-base">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-medium text-gray-900 mb-2 hover:underline hover:text-gray-700 transition duration-300">
              90 Days Return
            </h2>
            <p className="leading-relaxed text-base">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-1/3 px-4">
            <h2 className="text-xl font-medium text-gray-900 mb-2 hover:underline hover:text-gray-700 transition duration-300">
              Secure Payment
            </h2>
            <p className="leading-relaxed text-base">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
          
        </div>
        
    );
};

export default Contact;