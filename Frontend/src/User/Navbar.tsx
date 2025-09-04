import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="sticky top-0 w-full h-auto shadow-md">
        <nav className="flex justify-between items-center p-2 bg-transparent ">
          <div className="flex gap-8 items-center mx-10">
            <p>
              <Link to="/">JobHunt</Link>
            </p>

            <div className="links">
              <ul className="flex gap-4">
                <li>
                  <Link to="/jobs"> Jobs</Link>
                </li>

                <li>
                  <Link to="/companies">Companys</Link>{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 mx-10">
            <button className="w-24 h-auto bg-blue-600 text-white p-1 rounded-2xl">
              <Link to="/login">Login</Link>
            </button>
            <button className="w-24 h-auto bg-white text-blue-600 p-1 rounded-2xl">
              <Link to="/register">SignUp</Link>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
