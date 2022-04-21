import React from 'react';
import "../Three"
import "./AboutMe.scss";
import ThreeD from "../Three";

const AboutMe = () => {
return (
    <div className="wrapper">
        <section className="text-container">
            <h1 className="title">about me</h1>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi debitis distinctio dolor, ducimus ea error explicabo facere fuga id ipsum nesciunt officia rerum similique sunt tempore voluptatem? Debitis delectus earum ipsa maiores nulla quidem repudiandae saepe tempora ut?</p>

        </section>
        <section className="animation-container">

                <ThreeD classname="animation"/>

        </section>
    </div>

)

}
export default AboutMe;