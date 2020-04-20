import React from 'react'
import Project from "../Project"

export default function Portfolio(props) {
    return (
        <section className="section has-background-white-ter" id="portfolio">
                <div className="container">
                    <div className="section-heading">
                        <h3 className="title is-2">Portfolio</h3>
                        <h4 className="subtitle is-5">My latest works</h4>
                    </div>
                    <br />
                    <div className="container portfolio-container">
                        <div className="columns is-multiline">
                            {props.projects.map(project =>
                                <div className="column is-4">
                                    <Project project={project}/>
                                </div>
                             )}
                        </div>
                        
                    </div>
                </div>
            </section>
    )
}
