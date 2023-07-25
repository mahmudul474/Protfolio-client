import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://dev-server-devsobuj910.vercel.app/projects`)
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div class="h-screen bg-white">
        <div class="flex justify-center items-center h-full">
          <img
            class="h-16 w-16"
            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
            alt=""
          />
        </div>
      </div>
    );
  }

  return (
    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="my-10">
        <h2 className="text-xl text-left font-semibold"> RECENT WORK</h2>
        <h1 className="text-3xl text-green-500  text-left font-semibold">
          Look at my portfolio and give me your feedback
        </h1>
      </div>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {projects?.map(project => (
          <div className="w-full border border-gray-400  cursor-pointer p-1 md:p-2 h-[300px] relative">
            <img
              alt="gallery"
              className="block h-full w-full  rounded-lg object-cover object-center cursor-pointer"
              src={project?.smartImg}
            />
            {/* Project Details on Hover */}
            <div className="absolute inset-0 flex items-center justify-center bottom-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white p-4 rounded-lg text-center">
                <h2 className="text-xl font-bold mb-2">{project?.title}</h2>

                <Link to={`/projects/${project?._id}`}>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
