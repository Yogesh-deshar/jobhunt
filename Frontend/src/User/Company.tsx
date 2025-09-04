import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Company() {
  return (
    <>
      <Navbar />
      <div className='ml-10 mr-10'>
        <h2 className='text-[2rem] font-bold'>Partnered <samp className='text-blue-500'>Companies</samp></h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(14vw,1fr))] gap-x-2 gap-y-1">
          <div className="flex flex-col   w-[14vw]   items-center box-shadow">
            <img
              src="Images/complogo.jpg"
              alt=""
              className="w-[11vw] aspect-auto-[2/1] "
            />
            <p className="p-2 text-[1.5rem] text-gray-400">Company Name</p>
          </div>

          <div className="flex flex-col w-[14vw] items-center box-shadow">
            <img
              src="Images/complogo.jpg"
              alt=""
              className="w-[11vw] aspect-auto-[2/1] "
            />
            <p className="p-2 text-[1.5rem] text-gray-400">Company Name</p>
          </div>

          

          

     
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Company
