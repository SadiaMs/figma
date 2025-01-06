'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="relative">
      {/* Main Content */}
      <div className={`${isCartOpen ? "opacity-50 pointer-events-none" : ""}`}>
        <div className="flex lg:flex-row flex-col lg:max-w-[1440px] mx-auto lg:max-h-[825px]">
          {/* Product Section */}
          <section className="w-full flex gap-2 px-2 py-5">
            {/* Left Thumbnails */}
            <div className="flex flex-col lg:gap-10 mx-2 gap-10">
              <div style={{ backgroundColor: "#FFF9E5" }} className="flex items-center justify-center rounded-lg">
                <Image
                  alt="Outdoor sofa set 1"
                  src="/m16.png"
                  width={50}
                  height={50}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
                />
              </div>
              {/* Add other thumbnails here */}
            </div>

            {/* Main Product Image */}
            <div className="w-full">
              <div
                style={{ backgroundColor: "#FFF9E5" }}
                className="mx-auto lg:h-[600px] h-[500px] rounded-lg flex items-center justify-center"
              >
                <Image alt="Asgaard sofa" src="/asg.png" width={600} height={500} />
              </div>
            </div>
          </section>

          {/* Product Details */}
          <section className="w-full text-gray-600 py-6 px-4 lg:px-6">
            <h1 className="text-gray-900 text-2xl sm:text-3xl font-medium mb-2">Asgaard Sofa</h1>
            <h2 className="sm:text-sm text-lg font-bold text-yellow-600">Rs. 250,000.00</h2>
            {/* Add to Cart Button */}
            <button
              className="p-3 block text-base sm:font-semibold mb-2 md:text-xl font-bold hover:bg-green-100 outline rounded"
              onClick={toggleCart}
            >
              Add To Cart
            </button>
          </section>
        </div>
      </div>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[350px] bg-white shadow-lg transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
          <div className="flex items-center justify-between mb-4">
            <p>Asgaard Sofa</p>
            <p>Rs. 250,000.00</p>
          </div>
          <p className="text-right font-bold text-yellow-700">Subtotal: Rs. 250,000.00</p>
          <div className="mt-6 flex gap-4">
            
            <button className="w-full outline  p-2 rounded-2xl">View Cart</button>
            <button className="w-full outline text-black p-2 rounded-2xl"><Link href={'/Checkout'}>Checkout </Link></button>
          </div>
        </div>
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={toggleCart}
        >
          ✕
        </button>
      </div>

      {/* Gray Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleCart}
        ></div>
      )}
    </div>
  );
};

export default Page;
