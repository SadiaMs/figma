import React from 'react'

import { RiApps2Fill } from 'react-icons/ri';
import { BsViewList } from 'react-icons/bs';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';

const Filter = () => {
  return (
    <div>
      
      <div
      style={{ backgroundColor: "rgba(250, 244, 244, 1)" }}
      className="w-full max-w-[1440px] mx-auto p-4 flex flex-col sm:flex-row gap-4 items-center sm:justify-around lg:justify-between"
    >
  
      <div className="flex items-center flex-col sm:flex-row justify-around gap-4 lg:gap-6 xl:gap-10 lg:max-h-[100px]">
        <div className="flex items-center gap-4 lg:gap-8 xl:gap-10">
          <HiOutlineAdjustmentsHorizontal className="text-xl" />
          <p className="text-xl font-bold">
            <span>Filter</span>
          </p>
        </div>
        <div className="flex items-center gap-4 lg:gap-8 xl:gap-10">
          <RiApps2Fill className="text-xl" />
          <BsViewList className="text-xl" />
          <span className="text-gray-500 font-bold">|</span>
          <p className="text-sm text-gray-700">
            Showing 1–16 of 32 results
          </p>
        </div>
      </div>

      <div className="flex items-center flex-col sm:flex-row gap-4 lg:gap-8 xl:gap-10 max-h-[100px]">
        <div className="flex items-center gap-4 lg:gap-8 xl:gap-10">
          <span className="text-sm sm:text-base text-gray-700">Show</span>
          <input
            className="w-20 px-2 py-1 border border-gray-300 text-gray-700 rounded-sm text-center text-sm"
            type="text"
            placeholder="16"
          />
        </div>
        <div className="flex items-center gap-4 lg:gap-8 xl:gap-10">
          <span className="text-sm sm:text-base text-gray-700">Sort by</span>
          <input
            className="w-32 px-2 py-1 border border-gray-300 text-gray-700 rounded-sm text-center text-sm"
            type="text"
            placeholder="Default"
          />
        </div>
      </div>
    </div>


    </div>
  )
}

export default Filter
