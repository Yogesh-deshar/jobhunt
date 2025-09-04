import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Jobs() {
  return (
    <div className=" bg-gray-100">
      <Navbar />

      <section className=" h-auto bg-white ml-35 mr-35 ">
        <h2 className="text-[2.5rem] font-bold ">
          <span className="text-blue-500">Jobs</span> Listing
        </h2>

        <div className="flex flex-col gap-5 mt-5 mb-5 items-center">
          <div className="w-[75vw] h-50 flex justify-between items-center p-5 box-shadow">
            <div>
              <h2 className="text-[2rem]">Company Name</h2>
              <p className="text-[1.2rem]">Job Title</p>
              <p>Date posted</p>
              <p>Location</p>

              <p>
                Apply here:{" "}
                <a href="mailto:yukeshd76@gmail.com">Email in this section</a>
              </p>
            </div>

            <img
              src="Images/complogo.jpg"
              alt=""
              className="w-35 mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Jobs;
