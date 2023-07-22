import React from "react";
import bg from "./experience.jpg";
export default function Experience() {
  return (
    <div
      id="projects"
      className="  p-9 "
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <h1 className="text-left my-9 lg-mt-0 text-white text-5xl pb-6 ">
          Experience
        </h1>

        <div className=" flex   justify-start   items-center  flex-col lg:flex-row ">
          <div className="text-white ">
            <h1 className="text-3xl text-white  font-semibold ">
              Backend-developer
            </h1>
            <p>jun 2023-present </p>
            <a
              href="https://www.softopark.com"
              className=" text-lg  underline font-semibold "
            >
              Softopark Id Ltd.
            </a>
          </div>
          <div className="  flex justify-center items-center my-5 lg:p-16 ">
            <ul className="text-white list-disc">
              <li>
                Worked closely with the CTO and improved the core products.
              </li>
              <li>
                Maximized applications’ efficiency, data quality, scope,
                operability, and flexibility.
              </li>
              <li>
                Helped increase user experience by brainstorming and
                collaborating with the core team.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
