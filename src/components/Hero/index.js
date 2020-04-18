import React from 'react'

export default function HeroHeader() {
    return (
        <section className="hero is-link is-changeable is-light is-fullheight is-fullheight-with-navbar">
            <div className="hero-body">
                <div>
                    <span id="color-change">
                        <span className="has-click tag is-info" data-color="is-info"></span>
                        <br />
                        <span className="has-click tag is-primary" data-color="is-primary"></span>
                        <br />
                        <span className="has-click tag is-link" data-color="is-link"></span>
                        <br />
                        <span className="has-click tag is-success" data-color="is-success"></span>
                        <br />
                        <span className="has-click tag is-warning" data-color="is-warning"></span>
                    </span>
                </div>
                <div className="container has-text-centered">
                    <h1 className="title is-1">
                        Hi I am Thyago Volpatto!
                    </h1>
                    <h2 className="subtitle is-3">
                        Full Stack Web Developer
                    </h2>
                </div>
            </div>
        </section>
    )
}
