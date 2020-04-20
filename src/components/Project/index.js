import React from 'react'
import ProjectHeader from '../ProjectHeader'

export default function Project(props) {
    return (
            <div className="card">
                <ProjectHeader title={props.title} env={props.env} techs={props.tech} />
                <div className="card-content">
                    <figure className="image is-3by2">
                        <img src={props.image.url} alt={props.image.alt} />
                    </figure>
                </div>
                <footer className="card-footer">
                    <a href={props.preview} target="_blank" className="card-footer-item">
                        Preview
                    </a>
                    <a href={props.code} target="_blank" className="card-footer-item">
                        Source Code
                    </a>
                </footer>
            </div>
    )
}
