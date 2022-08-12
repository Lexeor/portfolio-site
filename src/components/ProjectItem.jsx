import React, {useEffect} from 'react';

function ProjectItem(props) {
    const comps = props.item.compatibilities;
    
    function renderCompatibilities() {
        return (
            <div className="project-comps">
                <i className={`ri-computer-line${comps && comps.indexOf("Desktop") > -1 ? ' active' : ''}`}></i>
                <i className={`ri-tablet-line${comps && comps.indexOf("Tablet") > -1 ? ' active' : ''}`}></i>
                <i className={`ri-smartphone-line${comps && comps.indexOf("Mobile") > -1 ? ' active' : ''}`}></i>
            </div>
        )
    }

    return (
        <div className="project-item-container">
            <img src={props.item.urlImg} />
            <div className="project-content">
                <h3>{props.item.name}</h3>
                {renderCompatibilities()}
                {props.item.description}
            </div>
            <div className="project-controls">
                {props.item.urlCode && <a href={props.item.urlCode} className="link-btn"><i className="ri-github-fill"></i>Code</a>}
                {props.item.urlDemo && <a href={props.item.urlDemo} className="link-btn"><i className="ri-global-line"></i>Demo</a>}
            </div>
        </div>
    )
}

export default ProjectItem