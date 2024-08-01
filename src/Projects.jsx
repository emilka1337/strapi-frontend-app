import { useState, useEffect } from "react";
import Flickity from "react-flickity-component";
import UsedTechnologies from "./UsedTechnologies";

import "./scss/flickity.min.css"

const flickityOptions = {
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    autoPlay: 3000,
    selectedAttraction: 0.005,
    friction: 0.15,
    imagesLoaded: true,
    arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 65,
        y2: 45,
        x3: 20,
    },
};

function Projects() {
    let [projects, setProjects] = useState([]);

    useEffect(() => {
        getPosts();
        setInterval(getPosts, 5000);
    }, []);

    const getPosts = () => {
        fetch("https://celebrated-crystal-10515e05db.strapiapp.com/api/projects?populate=*")
            .then((response) => response.json())
            .then((data) => {
                setProjects(data.data);
            });
    };

    return (
        <main className="projects">
            <h1>Projects</h1>
            <div className="projects-container">
                {projects.map((project, index) => {
                    return (
                        <div className="project" key={index}>
                            <div className="description">
                                <h3>{project.attributes.Project_Name}</h3>
                                <UsedTechnologies data={project.attributes.Used_Technologies} />
                                <p>{project.attributes?.Project_Descriprion?.[0].children[0].text}</p>
                                <div className="actions">
                                    <a href={project.attributes.Links.visit} target="_blank" className="visit">
                                        <span className="translatable-text">Visit Site</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-box-arrow-up-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href={project.attributes.Links.github}
                                        target="_blank"
                                        className="view-code translatable-text"
                                    >
                                        View code on GitHub
                                    </a>
                                </div>
                            </div>
                            <div className="photos">
                                <Flickity
                                    className={"carousel"}
                                    elementType={"div"}
                                    options={flickityOptions}
                                    disableImagesLoaded={false}
                                    reloadOnUpdate
                                    static
                                >
                                    {project.attributes.Project_Screenshots.data.map((item, index) => {
                                        return <img src={`${item.attributes.url}`} key={index}/>;
                                    })}
                                </Flickity>
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}

export default Projects;
