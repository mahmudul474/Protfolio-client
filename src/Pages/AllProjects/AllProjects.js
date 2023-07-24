import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllProjects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/projects`)
      .then(res => res.json())
      .then(data => {
        setProjects(data);
      });
  }, []);
  console.log(projects);

  return (
    <div>
      <div className="container px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="grid  grid-cols-1  xl:grid-cols-3 lg:grid-cols-3 gap-5">
          {projects?.map(project => (
            <div class=" aspect-video h-[400px]  bg-red-400 cursor-pointer rounded-xl relative group">
              <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div>
                  <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                    <div class="font-bold">Jessie Watsica</div>

                    <div class="opacity-60 text-sm ">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Distinctio dolores error iure, perferendis sequi totam. Ad
                      aliquam aperiam atque deleniti dolor dolorem enim esse et
                      in, inventore itaque, pariatur reprehenderit.
                    </div>
                  </div>
                </div>
              </div>
              <img
                alt=""
                class="object-cover h-[400px] rounded-lg  w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src={project?.smartImg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
