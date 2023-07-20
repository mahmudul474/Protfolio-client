import React from "react";
import bg from "../../assates/hero.jpg";
import banner from "../../assates/banner.png";
import reactgif from "../../assates/react.gif";
import frontent from "../../assates/frontent.gif";
import nodegif from "../../assates/node.gif";
import mongogit from "../../assates/mongo.gif";
export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`
      }}
      className="bg-cover bg-no-repeat bg-center  overflow-hidden"
    >
      <section className="dark:bg-gray-800 h-screen dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="     flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leadi sm:text-6xl">
              Ac mattis
              <span className="dark:text-violet-400">senectus</span>erat
              pharetra
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
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
