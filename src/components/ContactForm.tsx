import { useState } from 'react'
import Address from '../assets/AddressIcon.svg'
import Phone from '../assets/PhoneIcon.svg'
import Time from '../assets/TimeIcon.svg'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, subject, message });
  };

  return (
    <div className="flex justify-around mt-20">
      <div className="text-left">
        <div className="mb-5">
          <div className="flex items-center mb-2">
           <img src={Address} className='mr-2'/>
            <h2 className="text-xl font-semibold">Address</h2>
          </div>
          <p className='ml-8'>236 5th SE Avenue, New York NY10000, United States</p>
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <img src={Phone} className='mr-2'/>
            <h2 className="text-xl font-semibold">Phone</h2>
          </div>
          <p className='ml-8'>Mobile: (+84) 546-6789</p>
          <p className='ml-8'>Hotline: (+84) 456-6789</p>
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <img src={Time} className='mr-2'/>
            <h2 className="text-xl font-semibold">Working Time</h2>
          </div>
          <p className='ml-8'>Monday-Friday: 9:00 - 22:00</p>
          <p className='ml-8'>Saturday-Sunday: 9:00 - 21:00</p>
        </div>
      </div>
      <form className="w-1/4 mb-10" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-semibold">Your name</label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-semibold">Email address</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block mb-2 font-semibold">Subject</label>
          <input
            type="text"
            id="subject"
            className="w-full px-3 py-2 border rounded-md"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
          <textarea
            id="message"
            className="w-full px-3 py-2 border rounded-md"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="px-8 py-2 bg-[#B88E2F] text-white rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
