import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { BsPersonPlus } from "react-icons/bs";
import Link from 'next/link';

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container bg-[#0000000] mx-auto flex flex-wrap w-[95%] 2xl:w-[100%] p-5 flex-col md:flex-row items-center">
        {/* Navigation Links */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
          <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
          <Link href="/SecondPage" className="mr-5 hover:text-gray-900">Shop</Link>
          <Link href="/About" className="mr-5 hover:text-gray-900">About</Link>
          <Link href="/Contact" className="mr-5 hover:text-gray-900">Contact</Link>
        </nav>

        {/* Icon Section */}
        <div className="flex items-center text-xl space-x-4">
          <BsPersonPlus className="hover:text-gray-900 cursor-pointer" />
          <IoIosSearch className="hover:text-gray-900 cursor-pointer" />
          <FaRegHeart className="hover:text-gray-900 cursor-pointer" />
          <RiShoppingCart2Line className="hover:text-gray-900 cursor-pointer" />
        </div>
        <div>
        <Link href={"/Checkout"} className="mr-5 text-gray-300 hover:text-gray-900">Checkout</Link>
        <Link href={"/Cart"} className="mr-5 text-gray-300 hover:text-gray-900">Cart</Link>
        <Link href={"/Blog"} className="mr-5 text-gray-300 hover:text-gray-900">Blog</Link>

        </div>
      </div>
    </header>
  );
};

export default Header;
