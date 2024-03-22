import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/utils/Header";
import Home from "../components/pages/Home";
import About from "../components/pages/about";
import Courses from "../components/pages/courses";
import Projects from "../components/pages/projects";
import Contact from "../components/pages/contact";
import Education from "../components/pages/education";

function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/home"
          element={
            <>
              {" "}
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              {" "}
              <About />
            </>
          }
        ></Route>
        <Route
          path="/projects"
          element={
            <>
              {" "}
              <Projects />
            </>
          }
        ></Route>
        <Route
          path="/courses"
          element={
            <>
              {" "}
              <Courses />
            </>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <>
              {" "}
              <Contact />
            </>
          }
        ></Route>
        <Route
          path="/education"
          element={
            <>
              {" "}
              <Education />
            </>
          }
        ></Route>
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}
export default AppRoutes;
