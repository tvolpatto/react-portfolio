import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (

            <section class="section has-background-white-ter" id="about">
                {/* <!-- Title --> */}
                <div class="section-heading">
                    <h3 class="title is-2">About Me</h3>
                    <h4 class="subtitle is-5">A Brazilian without soccer skills</h4>
                </div>

                <div class="columns has-same-height is-gapless">
                    <div class="column is-one-quarter">
                        {/* <!-- Profile picture --> */}
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-1by1">
                                    <img src="./assets/images/photo.jpg" alt="Thyago photo" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        {/* <!-- Profile --> */}
                        <div class="card">
                            <div class="card-content">
                                <h3 class="title is-4">Profile</h3>
                                <div class="content">
                                    <table class="table-profile">
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
                                <div class="buttons has-addons is-centered">
                                    <a href="https://github.com/tvolpatto" target="_blank" class="button is-link is-changeable">
                                        <span class="icon">
                                            <i class="fab fa-github"></i>
                                        </span>
                                        <span>Github</span>
                                    </a>
                                    <a href="https://www.linkedin.com/in/thyago-volpatto-9b697539/" target="_blank" class="button is-link is-changeable">
                                        <span class="icon">
                                            <i class="fab fa-linkedin"></i>
                                        </span>
                                        <span>
                                            LinkedIn
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        {/* <!-- Skills --> */}
                        <div class="card">
                            <div class="card-content skills-content">
                                <h3 class="title is-4">Skills</h3>
                                <div class="content">
                                    <article class="media">
                                        <div class="media-content">
                                            <div class="content">
                                                <p class="is-medium">
                                                    <i class="icons-padding fab fa-2x fa-java"></i>
                                                    <i class="icons-padding fab fa-2x fa-js-square"></i>
                                                    <i class="icons-padding fab fa-2x fa-html5"></i>
                                                    <i class="icons-padding fab fa-2x fa-node-js"></i>
                                                    <i class="icons-padding fab fa-2x fa-css3-alt"></i>
                                                    <i class="icons-padding fab fa-2x fa-bootstrap"></i>
                                                    <hr />
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                    <article class="media">
                                        <div class="media-content">
                                            <div class="content">
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
                                    <article class="media">
                                        <div class="media-content">
                                            <div class="content">
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
