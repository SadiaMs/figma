import React from 'react';


const Free = () => {
  return (
    <div>
      <section className=" bg-red-100 text-gray-600 body-font">
        <div className="container bg-[FAF4F4] px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -my-8">
            {/* Free Delivery */}
            <div className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
               
                </div>
                <div className="flex-grow pl-6">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Free Delivery</h1>
                  <p className="leading-relaxed mb-5">
                    Free delivery for all orders over $50. We ensure a fast and safe delivery experience.
                  </p>
                </div>
              </div>
            </div>

            {/* 90 Days Return */}
            <div className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                 
                </div>
                <div className="flex-grow pl-6">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">90 Days Return</h1>
                  <p className="leading-relaxed mb-5">
                    Return goods within 90 days if there are any issues. We prioritize customer satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Secure Payment */}
            <div className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            
                </div>
                <div className="flex-grow pl-6">
                  <h1 className="title-font text-xl font-bold sm:font-medium text-gray-900 mb-3">Secure Payment</h1>
                  <p className="leading-relaxed mb-5">
                    Enjoy 100% secure payment options for all transactions. Your data is safe with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Free;
