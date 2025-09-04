import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full h-80 bg-[#3A3F45] mt-20 border text-white grid grid-cols-3 justify-space-between items-center">
        <div className="p-10">
          <h2 className="font-semibold text-[20px]">Companys</h2>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="p-10">
          <h2 className="font-semibold text-[20px]">Resources</h2>
          <ul>
            <li>Documentation</li>
            <li>Tutorials</li>
            <li>API Reference</li>
            <li>Community Forum</li>
          </ul>
        </div>

        <div className="p-10">
          <h2 className="font-semibold text-[20px]">Support</h2>
          <ul>
            <li>Help Center</li>
            <li>Contact Support</li>
            <li>System Status</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
