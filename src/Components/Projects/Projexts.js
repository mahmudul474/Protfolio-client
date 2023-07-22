import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg from "./Assests/projects.jpg";
import "./Project.css";
import ProjectCard from "./ProjectCard";

const Projexts = () => {
  // const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/top-projects`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setProjects(data, "this is projects for my sit e");
  //     });
  // }, []);

  return (
    <div
      id="projects"
      className="  p-9 "
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <h1 className="text-left my-9 lg-mt-0 text-white text-5xl pb-6 ">
        Latest projects
      </h1>

      <div className="grid  lg:grid-cols-3  xl:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-5">
        {/* {projects?.map(project => (
          <ProjectCard key={project._id} project={project}></ProjectCard>
        ))} */}
      </div>

      <div className="flex justify-center items-center ">
        <Link to="https://github.com/mahmudul474">
          <button className=" mt-9 p-3  rounded-sm w-60 text-lg  font-semibold  bg-green-500 text-black-4000 uppercase">
            Visit My Github
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projexts;
