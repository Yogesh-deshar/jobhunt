import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <>
      <Navbar />
      <section className="ml-70 mr-70 border bg-gray-300 grid gap-2 mt-2">
        <div className="flex  p-4 gap-20 bg-white rounded-b-[16px]">
          <div className="w-[25vw]  flex flex-col items-center">
            <img
              src="Images/complogo.jpg"
              alt=""
              className="rounded-full w-[13vw]"
            />
            <p className="text-[1.5rem] ">User Name</p>
            <p className="text-[1.2rem] ">Email</p>
          </div>

          <div>
            <div className="flex  gap-15 text-[1.5rem] p-2">
              <p className="w-30">Full Name</p>
              <p className="w-auto">Name here</p>
            </div>

            <div className="flex gap-15 text-[1.5rem] p-2">
              <p className="w-30">Phone</p>
              <p className="w-auto">Name here</p>
            </div>

            <div className="flex gap-15 text-[1.5rem] p-2">
              <p className="w-30">Address</p>
              <p className="w-auto">Name here</p>
            </div>

            <div className="flex gap-15 text-[1.5rem] p-2">
              <p className="w-30">Email</p>
              <p className="w-auto">Name here</p>
            </div>

            <div className="flex gap-15 text-[1.5rem] p-2">
              <p className="w-30">Positon</p>
              <p className="w-auto">Name here</p>
            </div>

            <div className="flex gap-10 mt-4">
              <button className="bg-blue-500 text-white p-2 rounded">
                Edit Profile
              </button>
              <button className="bg-blue-500 text-white p-2 rounded">
                <FontAwesomeIcon icon={faPlus} /> Add a post
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white  rounded-t-[16px]">
          <h2 className="text-[2rem] ml-10">
            <span className="text-blue-400">Post</span>{" "}
          </h2>

          <div className="ml-10 mr-10">
            <div className="flex justify-between items-center mr-10 ml-10">
              <div className="  flex items-center gap-15">
                <img
                  src="Images/complogo.jpg"
                  alt=""
                  className="w-30 aspect-auto-[2/1]"
                />
                <div>
                  <p className="text-[1.5rem] font-semibold">Name here</p>
                  <p className="text-gray-400">position</p>
                </div>
              </div>
              <button className="rounded-[16px] bg-red-400 text-white px-3 py-2 mr-18">
                Remove Post
              </button>
            </div>
            <div
              className=" w-full flex
            flex-col justify-center"
            >
              <p className="ml-20 mr-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                voluptatibus aperiam labore aspernatur! Illum hic vitae ducimus,
                beatae cum accusamus fugit fuga? Inventore ratione placeat earum
                necessitatibus. Incidunt, eveniet blanditiis! Quibusdam dicta
                ducimus sed, vel laudantium, soluta aut ut, cum assumenda quae
                officiis dolorem reprehenderit rem sint dolores odio. Ipsa a
                aperiam delectus nihil odio vitae consequuntur cum omnis et.
                Velit, commodi placeat perspiciatis sed quae qui consequatur
                illum iure magnam dignissimos odio officiis autem vel beatae
                tenetur veniam debitis ut consequuntur, voluptatibus natus cum
                praesentium. Temporibus nam dolor sit. Magni pariatur, vitae in
                modi assumenda illo non libero, tempore aperiam enim omnis velit
                dolorum asperiores odit temporibus repudiandae nemo quidem
                explicabo saepe? Magnam fuga quibusdam nulla incidunt minus
                dolorum! Earum, itaque sapiente dolor minus fuga voluptates at
                nam minima pariatur maiores nesciunt ad, enim sed cum magnam
                necessitatibus eaque veritatis deserunt corrupti laboriosam?
                Nesciunt nostrum quidem ipsa quis ad. Corporis corrupti officiis
                laborum, commodi a esse ducimus? A, voluptates asperiores
                recusandae rerum nihil beatae eos iure nemo sapiente ea quisquam
                sequi facere numquam excepturi minus esse nulla possimus soluta!
                Iste a, repellendus sunt natus voluptas sit architecto non
                consequuntur consequatur rem obcaecati blanditiis illum sint,
                reiciendis dolorem nemo modi ipsum unde. Aliquid a voluptate
                quod repudiandae quos ratione nihil.
              </p>

              <div className="flex justify-center items-center ">
                <img
                  src="Images/backgroundimage.jpg"
                  alt=""
                  className="w-[80%] h-auto "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Profile;
