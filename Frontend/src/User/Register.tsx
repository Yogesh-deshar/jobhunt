import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
function Register() {
  return (
    <>
      <Navbar />
      <div className="border w-[30vw] ml-auto mr-auto mt-10 rounded-[16px]">
        <h2 className="text-[2rem] font-bold text-blue-400 text-center mt-2">
          Job Hunt
        </h2>
        <p className="text-center text-[1.1rem] text-gray-400">
          Create new account
        </p>

        <form className="flex flex-col gap-2 pl-10 ml-auto pr-10 pb-5">
          <label htmlFor="name" className="text-[1.2rem] mt-2 mb-2 ">   
            Name
          </label>
          <div className="relative">
            <FontAwesomeIcon
              icon={faUser}
              className="absolute top-1/2 left-0 translate-y-[-50%]"
            />
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="border-b pl-8 w-[350px]"
              required
            />
          </div>
          <label htmlFor="email" className="text-[1.2rem] mt-2 mb-2">
            Email
          </label>
          <div className="relative">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute top-1/2 left-0 translate-y-[-50%]"
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="border-b pl-8 w-[350px]"
              required
            />
          </div>
          <label htmlFor="password" className="text-[1.2rem] mt-2 mb-2">
            Password
          </label>
          <div className="relative">
            <FontAwesomeIcon
              icon={faLock}
              className="absolute top-1/2 left-0 translate-y-[-50%]"
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="border-b pl-8 w-[350px]"
              required
            />
          </div>
          <label htmlFor="password" className="text-[1.2rem] mt-2 mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <FontAwesomeIcon
              icon={faLock}
              className="absolute top-1/2 left-0 translate-y-[-50%]"
            />
            <input
              type="password"
              id="password"
              placeholder="Confirm Password"
              className="border-b pl-8 w-[350px]"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded mt-5"
          >
            Register
          </button>
          <p className="text-center mt-1 pb-3 text-[1.1rem] text-gray-400">Already have an account? <span className="text-blue-500">Login</span></p>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Register
