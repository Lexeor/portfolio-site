import React from 'react';
import ProjectItem from './ProjectItem';

function Projects() {

    const projects = [
        {
            id: 0,
            name: "Cadence Assistant",
            compatibilities: ["Desktop", "Tablet"],
            urlImg: "/images/cadence.png",
            urlCode: "https://github.com/Lexeor/cadence-assistant",
            urlDemo: "https://lexeor.github.io/cadence-assistant/",
            description: "A small tool to help keep pace when exercising on a stationary bike. For a long time I used music for these purposes, but at some point I got tired of looking for new tracks suitable for the right pace and decided to write this application to simplify the process."
        },
        {
            id: 1,
            name: 'Chrome "New Tab" Extension',
            compatibilities: ["Desktop"],
            urlImg: "/images/chrome-extension.png",
            urlCode: "",
            urlDemo: "",
            description: "Quod dignissimos est aperiam numquam dolorum, maxime totam velit, id itaque inventore in aspernatur architecto sint perspiciatis quia doloremque harum nobis illum?"
        },
        {
            id: 2,
            name: "This Portfolio site",
            compatibilities: ["Desktop", "Tablet", "Mobile"],
            urlImg: "/images/logo-big-green.png",
            urlCode: "https://github.com/Lexeor/portfolio-site",
            urlDemo: "",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos est aperiam numquam dolorum, maxime totam velit, id itaque inventore in aspernatur architecto sint perspiciatis quia doloremque harum nobis illum?"
        },
    ]

    const projectsItemsCollection = projects.map(item => {
        return <ProjectItem key={item.id} item={item} compatibilities={item.compatibilities} />
    })

    return (
        <section id="projects" className="contrast">
            <div className="container projects">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-container">
                    {projectsItemsCollection}
                </div>
            </div>
        </section>
    )
}

export default Projects