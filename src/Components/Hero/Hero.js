import React from "react";
import bg from "../../assates/hero.jpg";
import banner from "../../assates/banner.png";
import reactgif from "../../assates/react.gif";
import frontent from "../../assates/frontent.gif";
import nodegif from "../../assates/node.gif";
import mongogit from "../../assates/mongo.gif";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import JavaScriptImg from "../../assates/js.png";
import tsImg from "../../assates/ts.png";
import reactImg from "../../assates/react.png";
import reduxImg from "../../assates/redux.png";
import mongoImg from "../../assates/mongodb.png";
import nodeImg from "../../assates/node.png";
import nextImg from "../../assates/next.png";

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`
      }}
      className="bg-cover bg-no-repeat bg-center  overflow-hidden"
    >
      <section className="dark:bg-gray-800 h-[800px] dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="     flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className=" text-lg font-bold    lg:text-6xl">
              Full-Stack MERN Developer
            </h1>
            <p className="mt-6 mb-8  font-semibold text-lg sm:mb-12">
              Hello! I'm Mahmudul Hasan, a dedicated MERN full-stack developer
              based in Dhaka, Bangladesh.
            </p>

            <div className="flex justify-start items-center">
              <span className="text-3xl  mr-3">
                <a
                  href="https://www.linkedin.com/in/mahmudul474"
                  target="_blank"
                >
                  <BsLinkedin></BsLinkedin>
                </a>
              </span>
              <span className="text-3xl ">
                <a href="https://github.com/mahmudul474" target="_blank">
                  <AiFillGithub></AiFillGithub>
                </a>
              </span>
            </div>

            <div className="flex justify-start mt-8  items-center">
              <h2 className="text-2xl font-semibold">Tech Stack</h2>
              <div className="flex justify-start   items-center">
                <img
                  className="w-16  h-16 object-cover mr-2"
                  src={JavaScriptImg}
                />
                <img className="w-12 h-10 object-cover mr-2" src={tsImg} />
                <img className="w-12 h-10 object-cover mr-2" src={reactImg} />
                <img className="w-12 h-10 object-cover mr-2" src={reduxImg} />
                <img className="w-12 h-10 object-cover mr-2" src={nextImg} />
                <img className="w-12 h-10 object-cover mr-2" src={nodeImg} />
                <img className="w-12 h-10 object-cover mr-2" src={mongoImg} />
              </div>
            </div>
          </div>
          <div className="     h-full   p-6 mt-8   relative ">
            <img
              className="w-40  lg:top-10 top-0 left-0 absolute  h-36 object-cover"
              src={reactgif}
            />
            <img
              className="w-24 top-0  absolute right-0 h-20 object-cover"
              src={nodegif}
            />

            <img src={banner} alt="" className="object-cover h-full " />

            <img
              className="w-52  absolute  left-0  h-48 object-cover"
              src={frontent}
            />
            <img
              className="w-32 absolute  right-0 h-28 object-cover"
              src={mongogit}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
