import React from "react";  
import Navbar from "./Navbar";
import Footer from "./Footer";


function Editprofile() {
  return (
    <>
      <Navbar />
    <section className="bg-gray-200 w-full h-auto pb-10 pt-2">
      <div className=" rounded-[16px] ml-40 mr-40 border bg-white p-4 mt-2">
        <h2 className="text-[1.5rem] text-blue-400 font-semibold">Edit Profile</h2>
        <p>Edit your profile information below:</p>
      </div>

      <div>
        <div className="rounded-[16px] ml-40 mr-40 border bg-white p-4 mt-2">
          <form action="" method="post" className="p-4 flex justify-center gap-10">
            <div className="w-80 flex flex-col items-center">
              <img
                src="Images/complogo.jpg"
                alt=""
                className="rounded-[50%] w-30 "
              />
              <div className="">
                <input
                  type="file"
                  id="profilePicture"
                  name="profilePicture"
                  className="mt-2 rounded-[8px] w-60 bg-blue-300 text-white p-3"
                />
              </div>
            </div>

            <div className="ml-10 w-full">
              <div className="flex flex-col gap-4 mb-4">
                <label htmlFor="name" className="text-[1.2rem]">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your Full name"
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-4 mb-4">
                <label htmlFor="email" className="text-[1.2rem]">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email address"
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-4 mb-4">
                <label htmlFor="address" className="text-[1.2rem]">
                  Address:
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter your Address"
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-4 mb-4">
                <label htmlFor="phone" className="text-[1.2rem]">
                  Phone:
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter your Phone number"
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-4 mb-4">
                <label htmlFor="post" className="text-[1.2rem]">
                  Post:
                </label>
                <input
                  type="text"
                  id="post"
                  name="post"
                  placeholder="Enter your Post"
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-4 mb-4">
                <label htmlFor="bio" className="text-[1.2rem]">
                  Bio:
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  placeholder="Enter your Bio"
                  className="border p-2 rounded-md"
                ></textarea>
              </div>
              <button type="submit" className="bg-blue-400 text-white p-2 rounded-md">Save Changes</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
      </section>
    </>
  );
}

export default Editprofile;
