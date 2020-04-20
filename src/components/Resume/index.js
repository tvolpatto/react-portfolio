import React from 'react';
import SectionHeader from '../SectionHeader'

export default function Resume() {
    return (
        <section className="section has-background-white-ter" id="resume">
            <SectionHeader title={"Resume"} subtitle={"More about my past"}/>
            <div className="section-heading">
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