import React from "react";
import "./Projects.scss";

const Projects = () =>  {
    return (
        <div className="projects-wrapper">
            <header className="projects-header">
                <img className="logo" src={require("../../assets/bulb.png")} alt="bulb"/>
                <h1 className="projects-tittle">projects</h1>
                <img className="logo" src={require("../../assets/pages.png")} alt="pages"/>
            </header>
            <section ></section>
        </>
    );
}