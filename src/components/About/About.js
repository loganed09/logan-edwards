import React from 'react';

export default function About() {
    let selfImage = require("../../resources/images/Me.jpg");
    return (
        <section id="about">
            <div className="about-container ">
                <div className="about-text">
                    <h1>
                        Hello, I'm Logan Edwards
                        <br />
                        I am a web developer. 
                    </h1>
                    <p className="about-description">
                        I play the piano. I love comic books. I graduated from Western Carolina University with a Bachelors in Electrical and Computer Engineering Technologies. 
                    </p>
                </div>
                <div className="contact-projects">
                    <a 
                        href="#contact"
                        className="contact-button">
                        Contact
                    </a>
                    <a 
                        href="#projects"
                        className="projects-button">
                        Past Projects
                    </a>
                </div>
                <div className="about-img">
                    <img 
                        alt="Logan"
                        src={selfImage.default}
                    />
                </div>
            </div>
        </section>
    )
}