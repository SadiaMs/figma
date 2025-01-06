import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RxClock } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";

const Blog = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* Header Section */}
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 hover:underline">
              Our Blogs
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Find a bright ideal to suit your taste with our great selection.
            </p>
          </div>

          {/* Blog Cards Section */}
          <div className="flex flex-wrap -m-4 ">
            {/* Blog Card 1 */}
            <div className="p-4 md:w-1/3 ">
              <div className="h-full border-2  border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#FAF4F4]">
              <Image width={100} height={100}
                  className="w-full h-64 object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                  src={"/three1.png"}
                  alt="blog"
                />
                <div className="p-6 ">
                  <p className="leading-relaxed mb-3">
                    Going all-in with millennial design.
                  </p>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:underline">
                    Read More
                  </h1>
                  <div className="flex items-center text-gray-600 text-sm space-x-2">
                    <RxClock className="text-lg" />
                    <span>5 Min</span>
                    <SlCalender className="text-lg" />
                    <span>
                      12<sup className="align-super text-xs">th</sup> Oct 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-1 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#FAF4F4]">
              <Image width={50} height={50}
                  className="w-full h-64 object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                  src={"/three2.png"}
                  alt="blog"
                />
                <div className="p-6">
                  <p className="leading-relaxed mb-3">
                    Modern interior trends to try now.
                  </p>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:underline">
                    Read More
                  </h1>
                  <div className="flex items-center text-gray-600 text-sm space-x-2">
                    <RxClock className="text-lg" />
                    <span>5 Min</span>
                    <SlCalender className="text-lg" />
                    <span>
                      12<sup className="align-super text-xs">th</sup> Oct 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#FAF4F4]">
                <Image width={100} height={100}
                  className="w-full h-64 object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                  src={"/three3.png"}
                  alt="blog"
                />
                <div className="p-6">
                  <p className="leading-relaxed mb-3">
                    Embracing sustainability in design.
                  </p>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:underline">
                    Read More
                  </h1>
                  <div className="flex items-center text-gray-600 text-sm space-x-2">
                    <RxClock className="text-lg" />
                    <span>5 Min</span>
                    <SlCalender className="text-lg" />
                    <span>
                      12<sup className="align-super text-xs">th</sup> Oct 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <h1 className="sm:text-2xl text-2xl font-medium title-font underline-offset-8 text-gray-900 decoration-gray-900 hover:underline">
             <Link href={'/Blog'}> View All Posts</Link>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;