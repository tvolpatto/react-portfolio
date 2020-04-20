import React from 'react'

export default function ProfileSkills() {
    return (
        <div className="card-content skills-content">
            <h3 className="title is-4">Skills</h3>
            <div className="content">
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <p className="is-medium">
                                <i className="icons-padding fab fa-2x fa-java"></i>
                                <i className="icons-padding fab fa-2x fa-js-square"></i>
                                <i className="icons-padding fab fa-2x fa-html5"></i>
                                <i className="icons-padding fab fa-2x fa-node-js"></i>
                                <i className="icons-padding fab fa-2x fa-css3-alt"></i>
                                <i className="icons-padding fab fa-2x fa-bootstrap"></i>
                                <i className="icons-padding fab fa-2x fa-react"></i>
                            </p>
                            <hr />
                        </div>
                    </div>
                </article>
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>More Skills:</strong>
                                <br />
                                JQuery, Databases, Agile,
                                <br />
                                Bulma, Foundation
                            </p>
                        </div>
                    </div>
                </article>
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>Next learning objectives:</strong>
                                <br />
                                Python, GoLang
                                <br />
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}
