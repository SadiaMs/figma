import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <div>
      <section className="text-gray-600 body-font bg-[#FBEBB5]">
      <div className="container bg-[#FBEBB5] w-full mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Left Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-3xl title-font  xl:text-5xl  font-extrabold  mb-6 sm:font-medium text-[#000000] hover:underline">
            Rocket single seater
          </h1>
          <div className="flex leading-relaxed  decoration-black cursor-pointer text-xl space-x-4  hover:underline">
            < Link href={"/SecondPage"}> Shop Now</Link>
          </div>
        </div>

        {/* Right Section (Image with Hover Effect) */}
        <div className="overflow-hidden rounded-lg">
        <Image src={"/Rocket single seater 1.png"}  alt="hero"  width={500} height={500} className="object-cover object-center  transition-transform duration-300 ease-in-out hover:scale-110 rounded"
/>
        </div>
      </div>
    </section>
      </div>
      <section className="text-gray-600 sm:col-1 body-font flex">
  <div className="container mx-auto w-full  px-10 py-20">
    <div className=" bg-[#FAF4F4] flex flex-wrap -mx-9 -mb-10 text-center">
      {/* Card 1 */}
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg  overflow-hidden">
        <Image
  src={"/sidetable1.png"}
  alt="Side table"
  layout="responsive"
  width={80}
  height={80}
  className="object-cover object-center mt-24 sm:h-500 sm:w-500 mx-auto transition-transform duration-100 ease-in-out hover:scale-110"
/>
        </div>
        <h2 className="title-font text-3xl mb-4 font-medium text-gray-900   underline-offset-8 hover:underline">
          Side table
        </h2>
        <p className="leading-relaxed text-base underline-offset-8  decoration-black cursor-pointer hover:underline">
          View More
        </p>
      </div>

      {/* Card 2 */}
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg overflow-hidden">
        <Image src={"/Group8.png"}  alt="Side table" width={500}
    height={500}  className="object-cover mt-20 object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"/>
        </div>
        <h2 className="title-font text-3xl font-medium underline-offset-8 text-gray-900 mt-2 mb-4 hover:underline">
          Side table
        </h2>
        <p className="leading-relaxed text-base underline-offset-8  decoration-black cursor-pointer hover:underline">
          View More
        </p>
      </div>




</div>
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

     
  </div>

  </section>
<div>
      <section className="text-gray-600 body-font grid grid-cols-1 bg-[#FFF9E5]">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="overflow-hidden rounded-xl">
      <Image width={700} height={700}
        className="object-cover object-center transition-transform duration-300 ease-in-out hover:scale-110 rounded"
        alt="hero"
        src={"/asg.png"}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
    <p className="mb-1 leading-relaxed font-bold hover:underline">
  New Arrivals
</p>

     <h1 className="title-font sm:text-4xl text-3xl mb-4 mt-1 font-medium text-gray-900 hover:underline">

        <br className="hidden lg:inline-block hover:underline" />
       <Link href='/SinglePro' > Asgaard sofa</Link>
      </h1>
     
     

      <div className="flex justify-center">
  <button className="ml-4 inline-flex text-gray-700 bg-transparent border-2 border-black py-2 px-6 focus:outline-none hover:bg-red-100 rounded-none text-lg">
  <Link href='/SinglePro' >  Order Now</Link>
  </button>
</div>

    </div>
  
  </div>
</section>


    </div>
    

    </div>
  )
}

export default Navbar