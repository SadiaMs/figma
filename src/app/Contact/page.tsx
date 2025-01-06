
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import { FaClock, FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const Contact = () => {
    return (
        <div className={`${poppins.className}`}>
            {/* Banner Section */}
            <section className="relative bg-gray-800 text-white">
                <div className="relative w-full h-[60vh] md:h-[80vh]">
                    <Image
                        src="/bg.jpeg"
                        alt="Banner"
                        fill
                        className="object-cover w-full h-full filter blur-sm"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
                    <Image
                        src="/Meubel House_Logos-05.png"
                        alt="Logo"
                        height={96}
                        width={96}
                        className="mb-4"
                    />
                    <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
                    <div className="text-sm md:text-base text-gray-300">
                        <span className="hover:text-white cursor-pointer">Home</span>{" "}
                        <span className="mx-2">&gt;</span>{" "}
                        <span className="hover:text-white cursor-pointer">Contact</span>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <div className="lg:w-[1058px] mt-10 mx-auto flex flex-col md:flex-row justify-between gap-12 pb-10">
                {/* Left Section */}
                <div className="flex flex-col gap-10">
                    {/* Address */}
                    <div className="flex gap-5">
                        <IoLocationSharp className="text-[80px]" />
                        <div>
                            <h1 className="text-[24px] font-medium">Address</h1>
                            <p className="text-[16px]">
                                236 5th SE Avenue, New York NY10000, United States
                            </p>
                        </div>
                    </div>
                    {/* Phone */}
                    <div className="flex gap-5">
                        <FaPhoneAlt className="text-[40px]" />
                        <div>
                            <h1 className="text-[24px] font-medium">Phone</h1>
                            <p className="text-[16px]">
                                Mobile: +(84) 546-6789 <br />
                                Hotline: +(84) 456-6789
                            </p>
                        </div>
                    </div>
                    {/* Working Time */}
                    <div className="flex gap-5">
                        <FaClock className="text-[40px]" />
                        <div>
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
                    <form className="w-[90vw] md:w-[531px] flex flex-col gap-6">
                        <div>
                            <label htmlFor="name" className="block text-[16px] font-medium mb-2">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-[16px] font-medium mb-2">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-[16px] font-medium mb-2">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="This is optional"
                                className="w-full p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-[16px] font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Hi! I’d like to ask about..."
                                className="w-full p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full md:w-auto bg-transparent text-black border border-gray-400 text-[16px] font-medium py-3 px-6 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-200"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
