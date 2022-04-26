import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills"
import ToLearn from "./components/ToLearn/ToLearn"
import "fullpage.js/vendors/scrolloverflow";
import * as Scroll from 'react-scroll';


import "./index.scss";
import {eventWrapper} from "@testing-library/user-event/dist/utils";

function App() {

  return (
   /* <Routes>
        <Route path="/" element={<Layout/>}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/aboutme" element={<AboutMe/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/" element={<ToLearn/>} />
        </Route>
    </Routes>*/


          <div id="fullpage">
              <Home id="section"/>
              <AboutMe id="section"/>
              <Skills id="section"/>
              <ToLearn id="section"/>
          </div>
  );

}



export default App;
