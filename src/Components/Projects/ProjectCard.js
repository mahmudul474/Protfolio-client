import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {





  return (
    <div className="max-w-sm   bg-white border border-gray-700 rounded-lg     ">
      <div
        className=" rounded-lg bg-top	transition duration-0  h-52 hover:bg-bottom ease-in-out"
        style={{
          transition: "ease-in-out 2s",
          backgroundSize: "cover",
          backgroundImage: `url(${project.home})`
        }}
      ></div>
      <div className="p-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {project.projectName}
        </h5>
        <h1 className="my-2 font-semibold">
          Category: <span>{project.Category}</span>
        </h1>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {project.projectDescription}
        </p>
        <Link
          to={`/project/${project._id}`}
          className="inline-flex items-center px-3 py-2 text-sm text-center capitalize  hover:cursor-pointer   text-black bg-green-500  font-semibold rounded-sm "
        >
          more-details
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;