import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function Login() {
  return (
    <>
      <Navbar />
      <div className=" border w-[30vw] ml-auto mr-auto mt-10 rounded-[16px]">
        <h2 className="text-[2rem] font-bold text-blue-400 text-center mt-2">
          Welcome <span className='text-orange-400'>Back</span>
        </h2>
        <p className='text-center text-[1.1rem] text-gray-400'>welcome back! please enter your details</p>
        <form className="flex flex-col gap-2 pl-10 ml-auto pr-10 pb-5">
          <label htmlFor="email" className="text-[1.2rem] mt-2 mb-2">
            Email Address
          </label>
          <div className='relative'>
            <FontAwesomeIcon icon={faEnvelope} className='absolute top-1/2 left-0 translate-y-[-50%]' />
            <input
              type="email"
              placeholder="Email"
              className="w-[350px] border-b pl-8"
              title="Please enter your email address"
              required
            />
          </div>

          <label htmlFor="password" className="text-[1.2rem] mt-2 mb-2">
            Password
          </label>
          <div className='relative'>
            <FontAwesomeIcon icon={faLock} className='absolute top-1/2 left-0 translate-y-[-50%]' />
            <input
              type="password"
              placeholder="Password"
              className="w-[350px] border-b pl-8"
              title="Please enter your password"
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p className="text-blue-500 text-center">Forgot Password?</p>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded mt-5"
          >
            Sign in
          </button>
        </form>
        <p className='text-center mt-1 pb-3 text-[1.1rem] text-gray-400'>Don't have an account? <span className='text-blue-500'>create new account</span></p>
      </div>
      <Footer />
    </>
  );
}

export default Login
