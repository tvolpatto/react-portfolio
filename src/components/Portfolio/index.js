import React from 'react'
import Project from "../Project"
import SectionHeader from '../SectionHeader'

export default function Portfolio(props) {
    return (
        <section className="section has-background-white-ter" id="portfolio">
                <div className="container">
                    <SectionHeader 
                        title={"Portfolio"}
                        subtitle={"My latest work"}
                        />
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
