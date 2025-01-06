import Filter from '@/components/Filter';
import Free from '@/components/Free';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  const products = [
    { src: '/m1.png', title: 'Trenton modular sofa_3', price: 'Rs. 25,000.00' },
    { src: '/daining.png', title: 'Granite dining table with dining chair', price: 'Rs. 25,000.00' },
    { src: '/mac.png', title: 'Outdoor bar table and stool', price: 'Rs. 25,000.00' },
    { src: '/reco.png', title: 'Plain console with teak mirror', price: 'Rs. 25,000.00' },
    { src: '/m5.png', title: 'Grain coffee table', price: 'Rs. 15,000.00' },
    { src: '/Kent coffee table 1.png', title: 'Kent coffee table', price: 'Rs. 225,000.00' },
    { src: '/M7.png', title: 'Round coffee table_color 2', price: 'Rs. 251,000.00' },
    { src: '/M8.png', title: 'Reclaimed teak coffee table', price: 'Rs. 25,200.00' },
    { src: '/Mask group (9).png', title: 'Plain console_', price: 'Rs. 258,200.00' },
    { src: '/cupborf.png', title: 'Reclaimed teak Sideboard', price: 'Rs. 20,000.00' },
    { src: '/Mask group (11).png', title: 'SJP_0825', price: 'Rs. 200,000.00' },
    { src: '/124.png', title: 'Bella chair and table', price: 'Rs. 100,000.00' },
    { src: '/Mask group (3).png', title: 'Granite square side table', price: 'Rs. 258,800.00' },
    { src: '/asg.png', title: 'Asgaard sofa', price: 'Rs. 250,000.00' },
    { src: '/sofa.png', title: 'Maya sofa three seater', price: 'Rs. 115,000.00' },
    { src: '/m16.png', title: 'Outdoor sofa set', price: 'Rs. 244,000.00' },
  ];

  return (
    <div>
      {/* Banner Section */}
      <section className="relative bg-gray-800 text-white">
        <div className="relative w-full h-[60vh] md:h-[80vh]">
          <Image
            src="/bg.jpeg"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            className="filter blur-sm"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
          <Image
            src="/Meubel House_Logos-05.png"
            alt="Logo"
            width={96}
            height={96}
            className="h-16 md:h-24"
          />
          <h1 className="text-3xl md:text-5xl font-bold">Shop</h1>
          <div className="text-sm md:text-base text-gray-300">
            <span className="hover:text-white cursor-pointer">Home</span>{" "}
            <span className="mx-2">&gt;</span>{" "}
            <span className="hover:text-white cursor-pointer">Shop</span>
          </div>
        </div>
      </section>
      <div>
        <Filter />
      </div>
      {/* Product Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link href="#"
                   className="block relative h-48 rounded overflow-hidden">
                    <Image
                      src={product.src}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                      className="hover:bg-yellow-100"
                    />
                  
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.title}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.price}
                  </h2>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </section>
      
 {/*  Buttons */}
 <div>
 <div className="flex justify-center space-x-4 mt-10">
            <button className="px-6 py-3 bg-[#FBEBB5] hover:bg-yellow-400 text-gray-700 font-bold rounded shadow">
              1
            </button>
            <button className="px-6 py-3 bg-[#FFF9E5] hover:bg-yellow-400 text-gray-700 font-bold rounded shadow">
              2
            </button>
            <button className="px-6 py-3 bg-[#FFF9E5] hover:bg-yellow-400 text-gray-700 font-bold rounded shadow">
              3
            </button>
            <button className="px-6  bg-[#FFF9E5] hover:bg-yellow-400 text-gray-700 font-bold rounded shadow">
              Next
            </button>
          </div>
        </div>
      


      <div className='mt-7'><Free /></div>
    </div>
  );
};

export default Page;
