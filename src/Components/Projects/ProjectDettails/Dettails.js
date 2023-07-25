import React, { useState } from "react";

import Releted from "./Releted-Projects/Releted";
import { AiFillGithub } from "react-icons/ai";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";

const Dettails = () => {
  const data = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = imageSrc => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div
              className=" lg:w-1/2 w-full lg:h-auto h-72 object-cover object-center rounded     bg-top	transition duration-0   hover:bg-bottom ease-in-out"
              style={{
                transition: "ease-in-out 2s",
                backgroundSize: "cover",
                backgroundImage: `url(${data.mainImg})`
              }}
            >
              {" "}
            </div>

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {data.title}
              </h1>

              <div>
                <h1>{data.shortDesc}</h1>
              </div>
              <div className="flex my-5">
                <div className="flex  border-r-4  pr-2  border-green-500 items-center">
                  <span className="text-3xl mr-1">
                    <BsCreditCard2FrontFill></BsCreditCard2FrontFill>
                  </span>
                  <a
                    className="text-xl font-semibold capitalize"
                    target="_blank"
                    href={data?.link[0]?.live}
                  >
                    live site
                  </a>
                </div>
                <div className="flex items-center border-r-4  px-2  border-green-500">
                  <span className="text-3xl mr-1">
                    <AiFillGithub></AiFillGithub>
                  </span>
                  <a
                    className="text-xl font-semibold capitalize"
                    target="_blank"
                    href={data?.link[1]?.client}
                  >
                    client-code
                  </a>
                </div>

                <div className="flex items-center pl-3">
                  <span className="text-3xl mr-1">
                    <AiFillGithub></AiFillGithub>
                  </span>
                  <a
                    className="text-xl font-semibold capitalize"
                    target="_black "
                    href={data?.link[2]?.server}
                  >
                    server-code
                  </a>
                </div>
              </div>
              <div>
                <h1 className="capitalize text-2xl font-semibold  ">
                  features
                </h1>

                <ul>
                  {data?.features?.map(feature => (
                    <li className="my-2 capitalize font-semibold list-disc">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <hr />

              <div className="mt-5 ">
                <h1 className="capitalize text-2xl  text-black  font-semibold ">
                  Technology
                </h1>
                <ul>
                  {data?.technology?.map(teck => (
                    <li className="my-2 capitalize font-semibold">{teck}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider  container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <span className="text-2xl capitalize semibold text-green-500">
          see-more
        </span>
      </div>

      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="grid  gap-5   grid-cols-1 lg:grid-cols-3">
          {data?.subimg?.map((img, index) => (
            <div
              key={index}
              className="w-full border   rounded-md  border-gray-400 p-1 md:p-2"
              onClick={() => handleImageClick(img)}
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                src={img}
              />
            </div>
          ))}
        </div>
      </div>
      {modalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="max-w-screen-md mx-auto bg-white p-4 rounded-lg w-full">
            <img
              alt="selected image"
              className="w-full rounded-lg object-cover object-center"
              src={selectedImage}
            />
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Dettails;
