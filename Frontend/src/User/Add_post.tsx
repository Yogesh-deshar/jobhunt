import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Add_post() {
  return (
    <>
      <Navbar />
      <section className="ml-40 mr-40 border grid gap-2 mt-2 p-4 rounded-[16px]">
        <div>
          <h2>Add a New Post</h2>
          <form className="flex flex-col gap-4" action="" method="post">
            <div className="flex flex-col">
              <label htmlFor="Company" className="font-bold p-2">
                Company:
              </label>
              <input
                type="text"
                id="Company"
                name="Company"
                className="border p-2 rounded"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="jobTitle" className="font-bold p-2">
                Job Title:
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                className="border p-2 rounded"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="position" className="font-bold p-2">
                Position:
              </label>
              <input
                type="text"
                id="position"
                name="position"
                className="border p-2 rounded"
                required
              />
            </div>

            <div className="flex gap-20">
              <div className="flex flex-col">
                <label htmlFor="type" className="font-bold p-2">
                  Type:
                </label>
                <select
                  id="type"
                  name="type"
                  className="border p-2 rounded w-100"
                  required
                >
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="Category" className="font-bold p-2">
                  Category:
                </label>
                <select
                  name="Category"
                  id="Category"
                  className="border p-2 rounded w-100"
                  required
                >
                  <option value="tech">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="health">Health</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="content" className="font-bold p-2">
                Content:
              </label>
              <textarea
                id="content"
                name="content"
                className="border p-2 rounded"
                required
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label htmlFor="Email" className="font-bold p-2">
                Email:
              </label>
              <input
                type="email"
                id="Email"
                name="Email"
                className="border p-2 rounded"
                required
              />
            </div>

            <div className="flex flex-col relative ">
              <label
                htmlFor="images"
                className="font-bold p-2 h-10 w-60 bg-blue-500 text-white text-center rounded cursor-pointer"
              >
                <FontAwesomeIcon icon={faPlus} /> Add Images:
              </label>
              <input
                type="file"
                id="images"
                name="images"
                className=" h-5  absolute inset-0 opacity-0 cursor-pointer"
                multiple
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Add_post;
