import { createBrowserRouter } from "react-router-dom";
import Main from "../Layot/Main";
import Home from "../Pages/Home/Home";
import App from "../App";
import AllProjects from "../Pages/AllProjects/AllProjects";
import Dettails from "../Components/Projects/ProjectDettails/Dettails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/projects",
        element: <AllProjects></AllProjects>
      },

      {
        path: "/projects/:id",
        loader: async ({ params }) =>
          fetch(
            `https://dev-server-devsobuj910.vercel.app/project/${params.id}`
          ),
        element: <Dettails></Dettails>
      }
    ]
  }
]);

export default router;
