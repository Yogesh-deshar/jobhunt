import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./User/Home";
import Jobs from "./User/Jobs";
import Company from "./User/Company";
import Profile from "./User/Profile";
import Login from "./User/Login";
import Register from "./User/Register";
import Editprofile from "./User/Editprofile";
import Add_post from "./User/Add_post";
import Admin_login from "./Admin/Admin_login";

function App() {
  return (
    <>
      {/* <Profile /> */}
      {/* <Company/> */}

      {/* <Jobs/> */}
      {/* <Home/> */}

      <Router>
        <Routes>
          {/* users */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/companies" element={<Company />} />
          <Route path="/edit-profile" element={<Editprofile />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/add-post" element={<Add_post />} />



          {/* admin */}
          <Route path="/admin/login" element={<Admin_login />} />
          {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
