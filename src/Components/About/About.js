import React from "react";
import thankYou from "../../assates/Thank.gif";

export default function About() {
  return (
    <section
      id="about"
      class="flex items-center     font-poppins dark:bg-gray-800 "
    >
      <div class="justify-center flex-1 container  py-4 mx-auto lg:py-6 md:px-6">
        <div class="flex flex-wrap ">
          <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img src={thankYou} alt="" class="relative  object-cover w-full " />
          </div>
          <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <h2 class="py-3 pl-2 mb-4   font-bold  ">
              I'm a MERN Full-Stack Developer
            </h2>
            <h1 class="mb-8   text-5xl  font-bold  ">
              I Develop Application that <br /> Help People
            </h1>

            <div className="mb-10">
              <p className="text-lg font-semibold ">
                Hello, I am Mahmudul Hasan Sobuj, a highly motivated and skilled
                MERN Stack Developer. With a passion for technology and
                problem-solving, I am committed to developing cutting-edge web
                applications that positively impact people's lives.
              </p>
            </div>

            <div className="list-none grid lg:grid-cols-2 my-11 text-md font-semibold md:grid-cols-2 grid-cols-1 gap-6">
              <li>UI/UX DESIGN</li>
              <li>WEB DEVELOPMENT</li>
              <li>FRONT-END DEVELOPMENT</li>
              <li>MERN-STACK DEVELOPMENT</li>
            </div>

            <div>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1I5av3KQxHbhK3tp8s3nlYJQ8zatLFZYh/view?usp=sharing"
                download="mahmudul_resumi.pdf"
              >
                <button className=" p-3 font-semibold rounded-sm w-60 text-lg   bg-green-500 text-black-400 uppercase">
                  Download-Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
