import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<AboutMe/>} />
        </Route>
    </Routes>
  );
}

export default App;
