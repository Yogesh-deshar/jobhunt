import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <Navbar />

      <section className=" mt-5 mb-3 ml-4 mr-4">
        <div className='  bg-[url("/Images/backgroundimage.jpg")] bg-[length:100%_100%] bg-center bg-no-repeat w-full h-[80vh] border'>
          <h1 className="text-[10vh] font-bold text-white text-shadow-outline">
            Welcome to JobHunt
          </h1>
          <p className="mt-4">
            Your one-stop solution for finding your dream job.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex w-full justify-between items-center">
            <h2 className="text-[2rem] ml-5 font-semibold">
              Featured <span className="text-blue-500">Jobs</span>
            </h2>
            <p className="mr-4 text-blue-400 flex items-center gap-1">
              Discover More Jobs Here
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </p>
          </div>

          <div
            className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-y-2 
  p-4"
          >
            <div className="w-80 h-70 border rounded-[10px]">
              <div className="flex items-center gap-30 ">
                <img
                  src="/Images/complogo.jpg"
                  alt=""
                  className="w-18 aspect-ratio-[2/1] rounded-full ml-2"
                />
                <p className="text-[1rem] font-semibold text-white bg-blue-500 border-2 border-blue-500 rounded-[10px] p-2">
                  Full Time
                </p>
              </div>

              <div className=" ml-4 mt-2">
                <h3 className="text-[1.5rem] font-semibold text-center">
                  Company Name
                </h3>
                <h3 className="text-[1.2rem] font-semibold">Job Title</h3>
                <p className="text-[1rem] font-semibold">Company Location</p>

                <p className="text-[1rem] font-semibold">
                  Salary: 100000-200000
                </p>

                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <p className="text-[1rem] font-semibold text-blue-500 border-2 border-blue-500 rounded-[10px] p-2">
                    Marketing
                  </p>
                  <p className="text-[1rem] font-semibold text-blue-500 border-2 border-blue-500 rounded-[10px] p-2">
                    Designer
                  </p>
                </div>
              </div>
            </div>

            <div className="w-80 h-70 border rounded-[10px]">
              <div className="flex items-center gap-30 ">
                <img
                  src="/Images/complogo.jpg"
                  alt=""
                  className="w-18 aspect-ratio-[2/1] rounded-full ml-2"
                />
                <p className="text-[1rem] font-semibold text-white bg-blue-500 border-2 border-blue-500 rounded-[10px] p-2">
                  Full Time
                </p>
              </div>

              <div className=" ml-4 mt-2">
                <h3 className="text-[1.5rem] font-semibold text-center">
                  Company Name
                </h3>
                <h3 className="text-[1.2rem] font-semibold">Job Title</h3>
                <p className="text-[1rem] font-semibold">Company Location</p>

                <p className="text-[1rem] font-semibold">
                  Salary: 100000-200000
                </p>

                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <p className="text-[1rem] font-semibold text-blue-500 border-2 border-blue-500 rounded-[10px] p-2">
                    Marketing
                  </p>
                  <p className="text-[1rem] font-semibold text-blue-500 border-2 border-blue-500 rounded-[10px] p-2">
                    Designer
                  </p>
                </div>
              </div>
            </div>

            <div className="w-80 h-70 border rounded-[10px]">
              <div className="flex items-center gap-30 ">
                <img
                  src="/Images/complogo.jpg"
                  alt=""
                  className="w-18 aspect-ratio-[2/1] rounded-full ml-2"
                />
                <p className="text-[1rem] font-semibold text-white bg-blue-500 border-2 border-blue-500 rounded-[10px] p-2">
                  Full Time
                </p>
              </div>

              <div className=" ml-4 mt-2">
                <h3 className="text-[1.5rem] font-semibold text-center">
                  Company Name
                </h3>
                <h3 className="text-[1.2rem] font-semibold">Job Title</h3>
                <p className="text-[1rem] font-semibold">Company Location</p>

                <p className="text-[1rem] font-semibold">
                  Salary: 100000-200000
                </p>

                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <p className="text-[1rem] font-semibold text-blue-500 border-2 border-blue-500 rounded-[10px] p-2">
                    Marketing
                  </p>
                  <p className="text-[1rem] font-semibold text-blue-500 border-2 border-blue-500 rounded-[10px] p-2">
                    Designer
                  </p>
                </div>
              </div>
            </div>

            <div className="w-80 h-70 border rounded-[10px]">
              <div className="flex items-center gap-30 ">
                <img
                  src="/Images/complogo.jpg"
                  alt=""
                  className="w-18 aspect-ratio-[2/1] rounded-full ml-2"
                />
                <p className="text-[1rem] font-semibold text-white bg-blue-500 border-2 border-blue-500 rounded-[10px] p-2">
                  Full Time
                </p>
              </div>

              <div className=" ml-4 mt-2">
                <h3 className="text-[1.5rem] font-semibold text-center">
                  Company Name
                </h3>
                <h3 className="text-[1.2rem] font-semibold">Job Title</h3>
                <p className="text-[1rem] font-semibold">Company Location</p>

                <p className="text-[1rem] font-semibold">
                  Salary: 100000-200000
                </p>

                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <p className="text-[1rem] font-semibold text-blue-500 border-2 border-blue-500 rounded-[10px] p-2">
                    Marketing
                  </p>
                  <p className="text-[1rem] font-semibold text-blue-500 border-2 border-blue-500 rounded-[10px] p-2">
                    Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-[2rem] ml-5 font-semibold">
              Recommended <span className="text-blue-500">Jobs</span>
            </h2>
            <p className="mr-5 text-blue-400">
              see other jobs{" "}
              <span className="text-blue-500">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4 p-4">
            <div className="border w-100 flex p-1 gap-10 ">
              <img
                src="/Images/complogo.jpg"
                alt=""
                className="w-20 aspect-auto-[2/1] mix-blend-color-burn"
              />

              <div>
                <h2 className="text-[1.2rem] font-semibold">Company Name</h2>
                <p className="text-[1rem] font-semibold">Job title</p>
                <p className="text-[1rem] font-semibold">Company Location</p>
              </div>
            </div>

            <div className="border w-100 flex p-1 gap-10 ">
              <img
                src="/Images/complogo.jpg"
                alt=""
                className="w-20 aspect-auto-[2/1] mix-blend-color-burn"
              />

              <div>
                <h2 className="text-[1.2rem] font-semibold">Company Name</h2>
                <p className="text-[1rem] font-semibold">Job title</p>
                <p className="text-[1rem] font-semibold">Company Location</p>
              </div>
            </div>

            <div className="border w-100 flex p-1 gap-10 ">
              <img
                src="/Images/complogo.jpg"
                alt=""
                className="w-20 aspect-auto-[2/1] mix-blend-color-burn"
              />

              <div>
                <h2 className="text-[1.2rem] font-semibold">Company Name</h2>
                <p className="text-[1rem] font-semibold">Job title</p>
                <p className="text-[1rem] font-semibold">Company Location</p>
              </div>
            </div>

            <div className="border w-100 flex p-1 gap-10 ">
              <img
                src="/Images/complogo.jpg"
                alt=""
                className="w-20 aspect-auto-[2/1] mix-blend-color-burn"
              />

              <div>
                <h2 className="text-[1.2rem] font-semibold">Company Name</h2>
                <p className="text-[1rem] font-semibold">Job title</p>
                <p className="text-[1rem] font-semibold">Company Location</p>
              </div>
            </div>

            <div className="border w-100 flex p-1 gap-10">
              <img
                src="/Images/complogo.jpg"
                alt=""
                className="w-20 aspect-auto-[2/1] mix-blend-color-burn"
              />

              <div>
                <h2 className="text-[1.2rem] font-semibold">Company Name</h2>
                <p className="text-[1rem] font-semibold">Job title</p>
                <p className="text-[1rem] font-semibold">Company Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
