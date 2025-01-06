'use client'
import React, { useState } from 'react';

const BillingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    streetAddress: '',
    city: '',
    province: '',
    zipCode: '',
    phone: '',
    email: '',
    country: 'Sri Lanka',
    paymentMethod: 'Direct Bank Transfer',
    additionalInfo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  return (
    <div className="max-w-6xl mx-auto my-12 p-6 bg-white rounded-lg shadow-md">
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Billing Details</h2>

            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="companyName" className="block text-sm font-semibold">Company Name (Optional)</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-semibold">Country / Region</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              >
                <option value="Sri Lanka">Sri Lanka</option>
                {/* Add more country options if needed */}
              </select>
            </div>

            <div>
              <label htmlFor="streetAddress" className="block text-sm font-semibold">Street Address</label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-semibold">Town / City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="province" className="block text-sm font-semibold">Province</label>
              <input
                type="text"
                id="province"
                name="province"
                value={formData.province}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md"
                placeholder="Western Province"
              />
            </div>

            <div>
              <label htmlFor="zipCode" className="block text-sm font-semibold">ZIP Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-semibold">Additional Information</label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md"
                placeholder="Enter any additional information"
              />
            </div>

            {/* Payment Method Section */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Payment Method</h3>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Direct Bank Transfer"
                  checked={formData.paymentMethod === 'Direct Bank Transfer'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Direct Bank Transfer
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash On Delivery"
                  checked={formData.paymentMethod === 'Cash On Delivery'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Cash On Delivery
              </label>
              <p className="text-sm text-gray-600 mt-2">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                Your order will not be shipped until the funds have cleared in our account.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Product Section */}
            <h2 className="text-2xl font-semibold">Product</h2>
            <div className="flex justify-between mb-4">
              <h1 className="font-semibold">Subtotal</h1>
              <h1 className="font-semibold">Rs. 250,000.00</h1>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Asgaard sofa</span>
                <span>X 1</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>Rs. 250,000.00</span>
              </div>
            </div>

           <a href="/Contact"> <button
              type="submit"
              className="w-full py-3 bg-transparent text-black border border-separate text-lg font-semibold rounded-md hover:bg-red-200"
            >
              Place Order
            </button></a>
          </div>
        </div>
      </form>
      <div> <section className="bg-[#FAF4F4] body-font">
      <div className="container mx-auto px-5 py-24">
        <div className="flex flex-wrap -mx-4 text-center">
          {/* Column 1 */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-medium text-gray-900 mb-2 hover:underline hover:text-gray-700 transition duration-300">
              Free Delivery
            </h2>
            <p className="leading-relaxed text-base">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-medium text-gray-900 mb-2 hover:underline hover:text-gray-700 transition duration-300">
              90 Days Return
            </h2>
            <p className="leading-relaxed text-base">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-1/3 px-4">
            <h2 className="text-xl font-medium text-gray-900 mb-2 hover:underline hover:text-gray-700 transition duration-300">
              Secure Payment
            </h2>
            <p className="leading-relaxed text-base">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section></div>
    </div>
  );
};

export default BillingForm;
