import React from "react";
import Logo from "../assets/Logo";

function Navbar() {
  return (
    <>
      <div className="w-full flex py-10 items-center justify-between md:hidden">
        <div className="flex">
          <Logo width={80} />
        </div>
        <div className="flex items-center">
          <p>Menu</p>
        </div>
      </div>
      <div className="hidden md:py-10 md:space-x-40 md:flex md:items-center md:justify-between">
        {/* Logo */}
        <div className="flex items-center justify-start">
          <Logo width={116} />
        </div>
        <div className="flex justify-end">
          <ul className="flex items-center space-x-20">
            <li className="flex items-center">Destinations</li>
            <li className="flex">Hotels</li>
            <li className="flex">Flights</li>
            <li className="flex">Bookings</li>
            <li className="flex">Login</li>
            <li className="flex">Signup</li>
            <li className="flex">EN</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
