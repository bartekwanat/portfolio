import React from 'react';
import "../../assets/puzzle.png";
import "./Skills.scss";
import {skillsData} from "../../Data/skillsList";





const Skills = () => {
    return (
        <div className="skills-wrapper">
            <header className="skills-header">
                <img className="puzzle" src={require("../../assets/puzzle.png")} alt=""/>
                <h1 className="title">skills</h1>
            </header>
            <section className="skills-container">
                <div className="skills-list">
                     {skillsData.map((skills, index) => (
                     <img className="skill" src={skills.url}  />
                    ))}
                </div>
            </section>
        </div>
    )

}

export default Skills;