import React from "react";
import contactbg from "./contact.jpg";

const Contact = () => {
  return (
    <div
      id="contact"
      className="    "
      style={{
        backgroundImage: `url(${contactbg})`
      }}
    >
      <div className="px-7 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div>
              <div className=" text-gray-200">
                <h1 className="text-3xl mt-9 lg-mt-1 font-bold mb-16 ">
                  Contact
                </h1>
                <p className="text-gray-200 mb-10">
                  The universe is a pretty big place. If it's just us.
                </p>
              </div>

              <div className="flex-col3">
                <h1 className="text-4xl mb-8 text-gray-200">
                  Rampura, Dhaka, <br />{" "}
                  <span className="text-green-500"> Bangladesh</span>
                </h1>
                <h1 className="text-4xl text-gray-200 mb-8">
                  <a href="tel:+8801906479710">+8801906479710</a>
                </h1>
                <h2 className="text-gray-200">
                  <a href="mailto:mdmahmudulla474@gmail.com">
                    mdmahmudulla474@gmail.com
                  </a>
                </h2>
              </div>
            </div>
            ;
          </div>
          <div className=" mt-8 ">
            <h1 className=" w-4/6 text-left text-3xl text-bold text-white">
              Let's grab a coffee and jump <br /> on conversation{" "}
              <span className="text-green-500">chat with me.</span>
            </h1>

            <form
              action="https://getform.io/f/139b8724-8b55-45e7-bdfe-1ffbae844aea"
              method="POST"
              className="flex flex-col space-y-4 w-full  lg:w-4/6"
            >
              <input
                type="text"
                required
                className="border-b-2 py-5 border-gray-500  my-6 bg-transparent focus:outline-none  focus:bg-slate-50    text-black  px-3  rounded-md"
                placeholder="Name"
                name="name"
              />
              <input
                type="email"
                name="email"
                required
                className="border-b-2 focus:outline-none rounded-md p-5 border-gray-500 bg-transparent focus:bg-slate-50 my-6  py-5 text-black   px-3"
                placeholder="Email"
              />
              <textarea
                className="border-b-2 focus:bg-white my-6 rounded-md p-8 border-gray-500  focus:out bg-transparent  s text-black py-9 px-3 outline-none"
                placeholder="Message"
                name="message"
              />

              <button
                type="submit"
                style={{ marginTop: "50px" }}
                className="   block p-3 rounded-lg w-60 text-lg font-bold  bg-green-500 text-black uppercase"
              >
                contact-me
              </button>
            </form>
          </div>
          ;
        </div>
      </div>
    </div>
  );
};

export default Contact;
