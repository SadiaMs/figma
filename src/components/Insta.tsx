import Image from 'next/image';
import React from 'react';

const Insta = () => {
  return (
    <div>
      <div className='w-[76px] h-[416] top-[246px] left-[99px]'>
        <Image height={100} width={100}
          src={"/Rectangle 16.png"} 
          alt="Instagram logo"
          className="object-cover w-full h-full rounded-full"
        />
        <div className="flex justify-center items-center"></div>
      </div>
      <section className="bg-[#FAF4F4] w-full h-[450px] text-gray-600 body-font flex items-center justify-center relative font-poppins">
        {/* Background Image */}
        <Image height={100} width={100}
          src={"/Rectangle 17.png"}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Instagram background"
        />

        {/* Content Overlay */}
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col relative z-10">
          {/* Heading */}
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900 mb-4">
              Our Instagram
            </h1>
            {/* Paragraph */}
            <p className="mb-8 leading-relaxed text-lg">
              Follow our store on Instagram
            </p>

            {/* Follow Button */}
            <div className="flex justify-center">
              <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-red-200 rounded-full shadow-md hover:shadow-lg text-lg">
                Follow Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insta;