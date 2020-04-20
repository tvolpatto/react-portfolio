import React from 'react'
import ProjectHeader from '../ProjectHeader'

export default function Project(props) {
    const project = props.project;
    console.log(project);
    return (
            <div className="card">
                <ProjectHeader title={project.title} env={project.env} techs={project.techs} />
                <div className="card-content">
                    <figure className="image is-3by2">
                        <img src={project.image.url} alt={project.image.alt} />
                    </figure>
                </div>
                <footer className="card-footer">
                    <a href={project.preview} target="_blank" className="card-footer-item">
                        Preview
                    </a>
                    <a href={project.code} target="_blank" className="card-footer-item">
                        Source Code
                    </a>
                </footer>
            </div>
    )
}
