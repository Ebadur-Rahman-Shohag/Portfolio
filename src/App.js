// import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./AppLayout";
// import Home from "./Home";
// import About from "./About";
// import Skill from "./Skill";
// import Project from "./Project";
// import Contact from "./Contact";
function App() {
  // const router = createBrowserRouter([
  //   {
  //     element: <AppLayout />,

  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },
  //       {
  //         path: "/about",
  //         element: <About />,
  //       },
  //       {
  //         path: "/skill",
  //         element: <Skill />,
  //       },

  //       {
  //         path: "/project",
  //         element: <Project />,
  //       },
  //      - {
  //         path: "/contact",
  //         element: <Contact />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <div>
      <AppLayout />
    </div>
  );
}

export default App;
