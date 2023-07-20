import React from "react";

export default function Header() {
  return (
    <nav className="bg-gray-800 py-4 px-6 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className=" text-xl font-bold">My Website</div>
          <ul className="flex space-x-4">
            <li className="">Home</li>
            <li className="">About</li>
            <li className="">Services</li>
            <li className="">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
