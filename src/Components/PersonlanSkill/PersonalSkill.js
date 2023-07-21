import React from "react";
import dedigation from "../../assates/dedegations.png";
import SmartWorek from "../../assates/smart.png";
import intalizent from "../../assates/intailigent.png";

export default function PersonalSkill() {
  return (
    <div>
      <div className="px-4 py-16 mx-auto  container   lg:py-20">
        <div className=" mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"></div>
        <div className="grid gap-4 row-gap-5 sm:grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-between  mb-4 rounded-full bg-indigo-50">
                <h3 className="font-semibold text-lg ">Dedication</h3>
                <span className="w-16 h-16 ">
                  <img className="w-full  h-full " src={dedigation} />
                </span>
              </div>
              <hr />
              <h6 className="my-4 font-semibold leading-5">
                Mastering the MERN Stack: Building Modern Web Applications with
                MongoDB, Express.js, React.js, and Node.js
              </h6>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-between  mb-4 rounded-full bg-indigo-50">
                <h3 className="font-semibold text-lg ">Smart Work</h3>
                <span className="w-16 h-16 ">
                  <img className="w-full  h-full " src={SmartWorek} />
                </span>
              </div>
              <hr />
              <h6 className="my-4 font-semibold leading-5">
                Smart Strategies for Productivity and Seamless Full-Stack
                Solutions
              </h6>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-between  mb-4 rounded-full bg-indigo-50">
                <h3 className="font-semibold text-lg ">Dedication</h3>
                <span className="w-16 h-16 ">
                  <img className="w-full  h-full " src={intalizent} />
                </span>
              </div>
              <hr />
              <h6 className="my-4 font-semibold leading-5">
                Cognitive Alchemy in MERN: Transforming Ideas into Intelligent
                Full-Stack Marvels
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
