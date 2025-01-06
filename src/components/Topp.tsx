import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Topp = () => {
  return (
    <div>
      <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 hover:underline">
       Top Picks For You
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base hover:underline">
      Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
      </p>
    </div>




    <div className="flex flex-wrap ">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 hover:bg-[#FAF4F4]">
      <Image width={200} height={200}
                alt="Side table"
                className="object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                src={"/m1.png"} // 1
              />
      <p className="leading-relaxed text-base mb-4 hover:underline">
         Trenton modular sofa_3
        </p>
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 hover:underline">
        Rs. 25,000.00
       
        </h2>
        
       
        </div>  




       


    
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800 border-opacity-60 hover:bg-[#FAF4F4]">
       
        <Image width={200} height={200}
                alt="Side table"
                className="object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                src={"/daining.png"} // 2
              />
      <p className="leading-relaxed text-base mb-4 hover:underline">
      Granite dining table with dining chair
        </p>
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 hover:underline">
        Rs. 25,000.00
       
        </h2>
        
        
          
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800 border-opacity-60 hover:bg-[#FAF4F4]">
       
      <Image width={200} height={200}
                alt="Side table"
                className="object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                src={"/mac.png"} // 3
              />
      <p className="leading-relaxed text-base mb-4 hover:underline">
      Outdoor bar table and stool
        </p>
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 hover:underline ">
        Rs. 25,000.00
       
        </h2>


       
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2   border-gray-800 border-opacity-60 hover:bg-[#FAF4F4]">
      <Image width={200} height={200}
                alt="Side table"
                className="object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                src={"/reco.png"} // 4
              />
      <p className="leading-relaxed text-base mb-4 mt-20 hover:underline">
      Plain console with teak mirror
        </p>
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 hover:underline">
        Rs. 25,000.00
       
        </h2>
       
      </div>
      <div className="title-font text-lg font-medium text-gray-900 mb-3 flex leading-relaxed  mt-6 mx-auto  flex-wrap  underline underline-offset-4 decoration-black cursor-pointer
              View More
            space-x-4 hover:underline"><Link href={"/SecondPage"}> View More </Link></div>
           
          </div>
  </div>
</section>

    </div>
    </div>
  )
}

export default Topp
