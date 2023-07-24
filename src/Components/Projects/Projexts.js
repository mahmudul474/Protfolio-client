import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg from "./Assests/projects.jpg";
import "./Project.css";
import ProjectCard from "./ProjectCard";

const Projexts = () => {
 const [projects, setProjects] = useState([]);
 useEffect(() => {
   fetch(`http://localhost:5000/projects/top`)
     .then(res => res.json())
     .then(data => {
       setProjects(data);
     });
 }, []);

 return (
   <div
     id="projects"
     className="  p-9 "
     style={{
       backgroundImage: `url(${bg})`
     }}
   >
     <div className="container px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
       <h1 className="text-4xl text-white font-bold capitalize text-left ">
         My latest projects
       </h1>
       <div className="grid grid-cols-1 lg:grid-cols-3  my-10 gap-5">
         {projects?.map(project => (
           <ProjectCard key={project._id} project={project}></ProjectCard>
         ))}
       </div>
       <Link to="/projects">
         <button className="flex border  font-semibold text-lg border-white  m-auto  p-3 rounded-md items-center text-white gap-3">
           All Projects
           <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             strokeWidth={2}
             stroke="currentColor"
             className="h-5 w-5"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
             />
           </svg>
         </button>
       </Link>
     </div>
   </div>
 );
};

export default Projexts;
