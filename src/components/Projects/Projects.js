import { CodeIcon } from "@heroicons/react/solid";
import React from 'react';
import { projects } from './data';

export default function Projects() {
    return(
    <section id="projects">
        <div className="project-container">
            <div className="project-header">
                <h1>My Projects</h1>
            </div>
            <div className="projects">
                {projects.map((project) => (
                    <a  
                        href={project.link}
                        key={project.image}>
                        <div className="">
                            <img 
                                alt="project"
                                src={project.image} 
                            />
                        </div>
                        <div className="hoverItem">
                            <h2>{project.subtitle}</h2>
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
    )
}
