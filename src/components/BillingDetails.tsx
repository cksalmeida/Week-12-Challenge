import React from 'react'

interface BillingDetailsProps {
  title: string;
}

const BillingDetails: React.FC<BillingDetailsProps> = ({ title }) => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input 
              className="w-full px-3 py-2 border rounded-md"
              id="firstName"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input 
              className="w-full px-3 py-2 border rounded-md"
              id="lastName"
              type="text"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
            Company Name (Optional)
          </label>
          <input 
            className="w-full px-3 py-2 border rounded-md"
            id="companyName"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zipCode">
            ZIP Code
          </label>
          <input 
            className="w-full px-3 py-2 border rounded-md"
            id="zipCode"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
            Country / Region
          </label>
          <input 
            className="w-full px-3 py-2 border rounded-md"
            id="country"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="streetAddress">
            Street Address
          </label>
          <input 
            className="w-full px-3 py-2 border rounded-md"
            id="streetAddress"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
            Town / City
          </label>
          <input 
            className="w-full px-3 py-2 border rounded-md"
            id="city"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="province">
            Province
          </label>
          <input 
            className="w-full px-3 py-2 border rounded-md"
            id="province"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Add-On Address
          </label>
          <input 
            className="w-full px-3 py-2 border rounded-md"
            id="address"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input 
            className="w-full px-3 py-2 border rounded-md"
            id="email"
            type="email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="additionalInfo">
            Additional Information
          </label>
          <textarea 
            className="w-full px-3 py-2 border rounded-md"
            id="additionalInfo"
          />
        </div>
      </form>
    </div>
  )
}

export default BillingDetails
