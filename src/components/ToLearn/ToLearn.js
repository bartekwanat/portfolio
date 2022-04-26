import React from "react";
import "./ToLearn.scss";
import {toLearnData} from "../../Data/toLearnList";

const ToLearn = () => {
    return (
        <div className="learn-wrapper">
            <section className="title-container">
                <img className="brain" src={require("../../assets/brain.png")} alt="brain"/>
                <h1 className="title">What i want to learn</h1>
            </section>
            <section className="learn-container">
                <div className="skills-list">
                    {toLearnData.map((skills, index) => (
                        <img className="skill" src={skills.url} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default ToLearn;