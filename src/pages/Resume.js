import React, { Component } from 'react';

export default class Resume extends Component {
    render() {
        return (
            <section className="section has-background-white-ter" id="resume">
                <div className="section-heading">
                    <h3 className="title is-2">Resume</h3>
                    <h4 className="subtitle is-5">More about my past</h4>
                    <a href="./assets/docs/resume-en - Thyago Volpatto.pdf" target="_blank" className="is-changeable button is-link is-medium">
                        <span className="icon">
                            <i className="fas fa-file-alt"></i>
                        </span>
                        <span>Download My Resume</span>
                    </a>
                </div>
            </section>
        )
    }
}

