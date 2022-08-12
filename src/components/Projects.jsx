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
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos est aperiam numquam dolorum, maxime totam velit, id itaque inventore in aspernatur architecto sint perspiciatis quia doloremque harum nobis illum?"
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
            urlImg: "/images/logo-big.png",
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