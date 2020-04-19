import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (

            <section className="section has-background-white-ter" id="about">
                {/* <!-- Title --> */}
                <div className="section-heading">
                    <h3 className="title is-2">About Me</h3>
                    <h4 className="subtitle is-5">A Brazilian without soccer skills</h4>
                </div>

                <div className="columns has-same-height is-gapless">
                    <div className="column is-one-quarter">
                        {/* <!-- Profile picture --> */}
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-1by1">
                                    <img src="./assets/images/photo.jpg" alt="Thyago photo" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        {/* <!-- Profile --> */}
                        <div className="card">
                            <div className="card-content">
                                <h3 className="title is-4">Profile</h3>
                                <div className="content">
                                    <table className="table-profile">
                                        <tr>
                                            <th colspan="1"></th>
                                            <th colspan="2"></th>
                                        </tr>
                                        <tr>
                                            <td>Address:</td>
                                            <td>Bluffdale - UT</td>
                                        </tr>
                                        <tr>
                                            <td>Phone:</td>
                                            <td>(801) 792-9776</td>
                                        </tr>
                                        <tr>
                                            <td>Email:</td>
                                            <td>tvolpatto@gmail.com</td>
                                        </tr>
                                    </table>
                                </div>
                                <br />
                                <div className="buttons has-addons is-centered">
                                    <a href="https://github.com/tvolpatto" target="_blank" className="button is-link is-changeable">
                                        <span className="icon">
                                            <i className="fab fa-github"></i>
                                        </span>
                                        <span>Github</span>
                                    </a>
                                    <a href="https://www.linkedin.com/in/thyago-volpatto-9b697539/" target="_blank" className="button is-link is-changeable">
                                        <span className="icon">
                                            <i className="fab fa-linkedin"></i>
                                        </span>
                                        <span>
                                            LinkedIn
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        {/* <!-- Skills --> */}
                        <div className="card">
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
                                                    <hr />
                                                </p>
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
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
