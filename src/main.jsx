import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./compontens/Home/Home.jsx";
import About from "./compontens/About/About.jsx";
import Service from "./compontens/service/Service.jsx";
import Github, { githubInfoLoader } from "./compontens/Github/Github.jsx";
import Contact from "./compontens/contact/Contact.jsx";
import EMICal from "./Project/EMICal/EMICal.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "/About",
//         element: <About />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />,
      <Route path="/About" element={<About />} />,
      <Route path="/Service" element={<Service />} />
      <Route loader={githubInfoLoader} path="Github" element={<Github />} />
      <Route path="/contact" element={<Contact />} />
      // project router
      <Route path="/projcet/emi" element={<EMICal />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
