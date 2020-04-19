import React from 'react'

export default function Profile() {
    return (
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
    )
}
