'use client';

import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {

  const formRef = useRef<HTMLFormElement>(null);


   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_bit1gwj', 
        'template_0oxnnh8',
        formRef.current,
        {
          publicKey: 'kFLCFdyhtBX6tVuBr',
        }
      )
      .then(
        () => {
          alert('✅ Email sent successfully!');
          formRef.current?.reset();
        },
        (error) => {
          console.error('❌ Email sending failed:', error.text);
          alert('Failed to send email. Please try again.');
        }
      );
  };

  return (
     <div className="max-lg:px-7" id='Contact'>
        <div className='mb-10 max-sm:text-center max-lg:text-center px-4'>
            <p className="mb-2 text-blue-700 text-lg">Lets talk</p>
            <h1 className="text-4xl dark:text-white font-bold">Contact</h1>
        </div>
        <div className="flex flex-wrap justify-between max-sm:flex-col max-lg:flex-col">
            <div className="dark:text-white w-1/2 pr-4 max-sm:w-full max-sm:mb-3 max-sm:pr-0 max-lg:w-full max-lg:mb-3 max-lg:pr-0">
               <form ref={formRef} onSubmit={handleSubmit} className='px-4'>
                <div className="mb-5">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white max-sm:text-xl">Subject</label>
                  <input type="subject" id="subject" name='subject' className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Example"/>
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white max-sm:text-xl">Email</label>
                  <input type="email" id="email" name='email' className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
               <div className="mb-5">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white max-sm:text-xl">Full Name</label>
                  <input type="name" id="name" name='name' className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />
                </div>
                <div className="mb-5">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white max-sm:text-xl">Message</label>
                  <textarea id="message" name='message' rows={4} className=" block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." required></textarea>
                </div>
                <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 max-sm:text-xl">Submit</button>
              </form>
            </div>
            <div className="dark:text-white rounded-3xl shadow-sm px-7 bg-white w-1/2 flex flex-col justify-around dark:bg-gray-800 max-sm:w-full max-sm:text-center max-sm:items-center max-sm:py-3 max-sm:rounded-none max-lg:w-full max-lg:text-center max-lg:items-center max-lg:py-3">
              <div className='max-sm:mb-3 max-lg:mb-3'>
                <p className='text-2xl'>Hello there</p>
              </div>
              <div className='h-44 w-44 p-3 border rounded-full max-sm:mb-3 max-lg:mb-3'>
                <img className='rounded-full' src="profile/profile.jpg" alt="profile" />
              </div>
              <div className='mb-3'>
                <p>My inbox is always open, Whether you have a project or just want to say Hi. I would love to hear from you. Feel free to contact me and I get back to you.</p>
              </div>
              <div className='flex'>
                <svg className="w-7 h-7 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                </svg>
                <svg className="w-7 h-7 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                </svg>
                <svg className="w-7 h-7 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                    <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                </svg>
                <svg className="w-7 h-7 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                  <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
        </div>
     </div>
  )
}
