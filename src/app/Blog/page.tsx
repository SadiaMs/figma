
import { Poppins } from 'next/font/google';
import Image from 'next/image'

import { BsCalendarDateFill } from 'react-icons/bs';
import { FaTag } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
import { MdPersonalInjury } from 'react-icons/md';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

const BlogPage = () => {
    return (
        <div className={`${poppins.className}`}>
            {/* Main Banner */}
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
                     Blog
                   </h1>
           
                  
                   <div className="text-sm md:text-base text-gray-300">
                     <span className="hover:text-white cursor-pointer">Home</span>{" "}
                     <span className="mx-2">&gt;</span>{" "}
                     <span className="hover:text-white cursor-pointer">Blog</span>
                   </div>
                 </div>
               </section>
            <div className='flex md:flex-row flex-col min-h-screen  md:px-[50px] px-5 py-10 md:gap-0 gap-10'>
                <div className='md:flex-2 space-y-10'>
                    {/* blog 1 */}
                    <div className='flex flex-col gap-4'>
                        <div className='md:w-[817px] md:h-[500px]'>
                            <Image src={"/three2.png"} alt='blog' width={500}  height={500} />
                        </div>

                        <div className='flex gap-6 text-[16px] text-[#9F9F9F] items-center'>
                            <div className='flex gap-2 items-center'>
                                <MdPersonalInjury />
                                <p>Admin</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <BsCalendarDateFill />
                                <p>14 Oct 2022</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaTag />
                                <p>Wood</p>
                            </div>
                        </div>

                        <h1 className='text-[30px] font-medium'>Going all-in with millennial design</h1>
                        <p className='text-[15px] text-[#9F9F9F] md:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>

                        <button className='text-[16px] text-start mt-3 text-black underline underline-offset-8'>Read more</button>

                    </div>
                    {/* blog 2 */}
                    <div className='flex flex-col gap-4'>
                        <div className='md:w-[817px] md:h-[500px]'>
                            <Image src={"/blog2a.webp"} alt='blog' width={500} height={500} />
                        </div>

                        <div className='flex gap-6 text-[16px] text-[#9F9F9F] items-center'>
                            <div className='flex gap-2 items-center'>
                                <MdPersonalInjury />
                                <p>Admin</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <BsCalendarDateFill />
                                <p>14 Oct 2022</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaTag />
                                <p>Wood</p>
                            </div>
                        </div>

                        <h1 className='text-[30px] font-medium'>Exploring new ways of decorating</h1>
                        <p className='text-[15px] text-[#9F9F9F] md:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>

                        <button className='text-[16px] text-start mt-3 text-black underline underline-offset-8'>Read more</button>

                    </div>
                    {/* blog 3 */}
                    <div className='flex flex-col gap-4'>
                        <div className='md:w-[817px] md:h-[500px]'>
                            <Image src={"/bl3.webp"} alt='blog' width={500} height={500} />
                        </div>

                        <div className='flex gap-6 text-[16px] text-[#9F9F9F] items-center'>
                            <div className='flex gap-2 items-center'>
                                <MdPersonalInjury />
                                <p>Admin</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <BsCalendarDateFill />
                                <p>14 Oct 2022</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaTag />
                                <p>Wood</p>
                            </div>
                        </div>

                        <h1 className='text-[30px] font-medium'>Handmade pieces that took time to make</h1>
                        <p className='text-[15px] text-[#9F9F9F] md:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>

                        <button className='text-[16px] text-start mt-3 text-black underline underline-offset-8'>Read more</button>

                    </div>
                </div>
                <div className='md:flex-1'>
                    <div className="relative">
                        <input
                            type="text"
                            className="border border-gray-600 rounded-[10px] pl-4 pr-10 py-2"
                        />
                        <FiSearch
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                        />
                    </div>

                    <div>
                        <h1 className='text-[24px] font-medium py-7'>Categories</h1>

                        <div className='flex flex-col gap-6'>
                            <div className='flex items-center justify-between text-[16px] text-[#9F9F9F]'>Crafts<span>2</span></div>
                            <div className='flex items-center justify-between text-[16px] text-[#9F9F9F]'>Design<span>8</span></div>
                            <div className='flex items-center justify-between text-[16px] text-[#9F9F9F]'>Handmade<span>7</span></div>
                            <div className='flex items-center justify-between text-[16px] text-[#9F9F9F]'>Interior<span>1</span></div>
                            <div className='flex items-center justify-between text-[16px] text-[#9F9F9F]'>Wood<span>6</span></div>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-[24px] font-medium py-5'>Recent Posts</h1>
                        <div className='space-y-4'>
                            <div className="flex gap-3 items-center">
                                <div className="flex items-center h-[80px] w-[80px]">
                                    <div className="relative h-full w-full">
                                        <Image
                                            src={"/bg1.png"
                                            }
                                            alt="blog"
                                            fill
                                            className="rounded-lg object-cover"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-[14px]">Going all-in with millennial design</h1>
                                    <p className="text-[12px] text-[#9F9F9F]">03 Aug 2022</p>
                                </div>
                            </div>

                            <div className='flex gap-3 items-center'>
                                <div className="flex items-center h-[80px] w-[80px]">
                                    {/* Make the container `relative` */}
                                    <div className="">
                                        <Image
                                            src={"/blog2.png"}
                                            alt={"blog"}
                                            width={100}
                                            height={100}
                                            className=" rounded-lg object-cover mr-2  h-[80px] w-[80px]"
                                        />

                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-[14px]'>Exploring new ways of decorating</h1>
                                    <p className='text-[12px] text-[#9F9F9F]'>03 Aug 2022</p>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className="flex items-center h-[80px] w-[80px]">
                                    {/* Make the container `relative` */}
                                    <div className="">
                                        <Image
                                            src={"/blog3.png"}
                                            alt={"blog"}
                                            width={100}
                                            height={100}
                                            className=" rounded-lg object-cover mr-2  h-[80px] w-[80px]"
                                        />

                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-[14px]'>Handmade pieces that took time to make</h1>
                                    <p className='text-[12px] text-[#9F9F9F]'>03 Aug 2022</p>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className="flex items-center h-[80px] w-[80px]">
                                    {/* Make the container `relative` */}
                                    <div className="">
                                        <Image
                                            src={"/blog5.png"}
                                            alt={"blog"}
                                            width={100}
                                            height={100}
                                            className=" rounded-lg object-cover mr-2  h-[80px] w-[80px]"
                                        />

                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-[14px]'>Going all-in with millennial design</h1>
                                    <p className='text-[12px] text-[#9F9F9F]'>03 Aug 2022</p>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className="flex items-center h-[80px] w-[80px]">
                                    {/* Make the container `relative` */}
                                    <div className="">
                                        <Image
                                            src={"/blog6.png"}
                                            alt={"blog"}
                                            width={100}
                                            height={100}
                                            className=" rounded-lg object-cover mr-2  h-[80px] w-[80px]"
                                        />

                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-[14px]'>Going all-in with millennial design</h1>
                                    <p className='text-[12px] text-[#9F9F9F]'>03 Aug 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

           {/*  Buttons */}
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
            <button className="px-6 py-3 bg-[#FFF9E5] hover:bg-yellow-400 text-gray-700 font-bold rounded shadow">
              Next
            </button>
          </div>
        </div>


      
       
    )
}

export default BlogPage