import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routs";

export default function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
