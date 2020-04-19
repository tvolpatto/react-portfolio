import React, { Component } from 'react'

export default class Portfolio extends Component {
    render() {
        return (
            <section className="section has-background-white-ter" id="portfolio">
                <div className="container">
                    <div className="section-heading">
                        <h3 className="title is-2">Portfolio</h3>
                        <h4 className="subtitle is-5">My latest works</h4>
                    </div>
                    <br />
                    <div className="container portfolio-container">
                        <div className="columns">
                            <div className="column is-4">
                                <div className="card">
                                    <header className="card-header">
                                        <div className="card-header-title columns is-multiline">
                                            <div className="column is-full">
                                                <span className=" is-pulled-left">Mood.</span>
                                                <span className="is-pulled-right">
                                                    <span className="tag is-default is-link is-changeable"><i className="fas fa-desktop" title="Desktop Support"></i></span>
                                                    <span className="tag is-default is-link is-changeable"><i className="fas fa-mobile-alt"
                                                        title="Mobile Support"></i></span>
                                                </span>
                                            </div>
                                            <div className=" column is-full">
                                                <span className="tag is-primary">Foundation</span>
                                                <span className="tag is-default">JQuery</span>
                                            </div>
                                        </div>
                                    </header>
                                    <div className="card-content">
                                        <figure className="image is-3by2">
                                            <img src="./assets/images/mood.png" alt="Mood." />
                                        </figure>
                                    </div>
                                    <footer className="card-footer">
                                        <a href="https://matthewlgrimes94.github.io/mood./" target="_blank" className="card-footer-item">
                                            Preview
                                        </a>
                                        <a href="https://github.com/Matthewlgrimes94/mood." target="_blank" className="card-footer-item">
                                            Source Code
                                        </a>
                                    </footer>
                                </div>
                            </div>
                            <div className="column is-4">
                                <div className="card">
                                    <header className="card-header">
                                        <div className="card-header-title columns is-multiline">
                                            <div className="column is-full">
                                                <span className=" is-pulled-left">Master of JS</span>
                                                <span className="is-pulled-right">
                                                    <span className="tag is-default is-link is-changeable"><i className="fas fa-desktop" title="Desktop Support"></i></span>
                                                    <span className="tag is-default is-link is-changeable"><i className="fas fa-mobile-alt"
                                                        title="Mobile Support"></i></span>
                                                </span>
                                            </div>
                                            <div className="column is-full">
                                                <span className="tag is-primary">Bootstrap</span>
                                                <span className="tag is-default">JQuery</span>
                                            </div>
                                        </div>
                                    </header>
                                    <div className="card-content">
                                        <figure className="image is-3by2">
                                            <img src="./assets/images/quiz.png" alt="Master of JS" />
                                        </figure>
                                    </div>
                                    <footer className="card-footer">
                                        <a href="https://tvolpatto.github.io/master-of-js-quizz/" target="_blank" className="card-footer-item">
                                            Preview
                                        </a>
                                        <a href="https://github.com/tvolpatto/master-of-js-quizz" target="_blank" className="card-footer-item">
                                            Source Code
                                         </a>
                                    </footer>
                                </div>
                            </div>
                            <div className="column is-4">
                                <div className="card">
                                    <header className="card-header">
                                        <div className="card-header-title columns is-multiline">
                                            <div className="column is-full">
                                                <span className=" is-pulled-left">Weather Dashboard</span>
                                                <span className="is-pulled-right">
                                                    <span className="tag is-default is-link is-changeable"><i className="fas fa-desktop" title="Desktop Support"></i></span>
                                                    <span className="tag is-default is-link is-changeable"><i className="fas fa-mobile-alt"
                                                        title="Mobile Support"></i></span>
                                                </span>
                                            </div>
                                            <div className="column is-full">
                                                <span className="tag is-primary">Bootstrap</span>
                                                <span className="tag is-default">JQuery</span>
                                                <span className="tag is-danger">OpenWeather API</span>
                                            </div>
                                        </div>
                                    </header>
                                    <div className="card-content">
                                        <figure className="image is-3by2">
                                            <img src="./assets/images/weather.png" alt="Weather Dashboard" />
                                        </figure>
                                    </div>
                                    <footer className="card-footer">
                                        <a href="https://tvolpatto.github.io/weather-dashboard/" target="_blank" className="card-footer-item">
                                            Preview
                                        </a>
                                        <a href="https://github.com/tvolpatto/weather-dashboard" target="_blank" className="card-footer-item">
                                            Source Code
                                        </a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-4">
                                <div className="card">
                                    <header className="card-header">
                                        <div className="card-header-title columns is-multiline">
                                            <div className="column is-full">
                                                <span className=" is-pulled-left">Day planner</span>
                                                <span className="is-pulled-right">
                                                    <span className="tag is-default is-link is-changeable"><i className="fas fa-desktop" title="Desktop Support"></i></span>
                                                    <span className="tag is-default is-link is-changeable"><i className="fas fa-mobile-alt"
                                                        title="Mobile Support"></i></span>
                                                </span>
                                            </div>
                                            <div className=" column is-full">
                                                <span className="tag is-primary">Bootstrap</span>
                                                <span className="tag is-default">JQuery</span>
                                            </div>
                                        </div>
                                    </header>
                                    <div className="card-content">
                                        <figure className="image is-3by2">
                                            <img src="./assets/images/day-planner.PNG" alt="Day Planner" />
                                        </figure>
                                    </div>
                                    <footer className="card-footer">
                                        <a href="https://tvolpatto.github.io/day-planner/" target="_blank" className="card-footer-item">
                                            Preview
                                        </a>
                                        <a href="https://github.com/tvolpatto/day-planner" target="_blank" className="card-footer-item">
                                            Source Code
                                        </a>
                                    </footer>
                                </div>
                            </div>
                            <div className="column is-4">
                                <div className="card">
                                    <header className="card-header">
                                        <div className="card-header-title columns is-multiline">
                                            <div className="column is-full">
                                                <span className=" is-pulled-left">Salt City Services</span>
                                                <span className="is-pulled-right">
                                                    <span className="tag is-default is-link is-changeable"><i className="fas fa-desktop" title="Desktop Support"></i></span>
                                                    <span className="tag is-default is-link is-changeable"><i className="fas fa-mobile-alt" title="Mobile Support"></i></span>
                                                </span>
                                            </div>
                                            <div className="column is-full level-right ">
                                                <span className="tag is-primary">Materialize</span>
                                                <span className="tag is-default">JQuery</span>
                                                <span className="tag is-danger">MySql</span>
                                                <span className="tag is-warning">Sequelize</span>
                                            </div>
                                        </div>
                                    </header>
                                    <div className="card-content">
                                        <figure className="image is-3by2">
                                            <img src="./assets/images/salt.png" alt="First portfolio" />
                                        </figure>
                                    </div>
                                    <footer className="card-footer">
                                        <a href="https://salt-city-services.herokuapp.com/" target="_blank" className="card-footer-item">
                                            Preview
                                        </a>
                                        <a href="https://github.com/tvolpatto/salt." target="_blank" className="card-footer-item">
                                            Source Code
                                        </a>
                                    </footer>
                                </div>
                            </div>
                            <div className="column is-4">
                                <div className="card">
                                    <header className="card-header">
                                        <div className="card-header-title columns is-multiline">
                                            <div className="column is-full">
                                                <span className=" is-pulled-left">Engineering Team</span>
                                                <span className="is-pulled-right">
                                                    <span className="tag is-default is-link is-changeable"><i className="fas fa-terminal" title="Terminal"></i></span>
                                                </span>
                                            </div>
                                            <div className="column is-full level-right ">
                                                <span className="tag is-primary">CLI</span>
                                                <span className="tag is-default">Node</span>
                                                <span className="tag is-danger">InquirerJs</span>
                                            </div>
                                        </div>
                                    </header>
                                    <div className="card-content">
                                        <figure className="image is-3by2">
                                            <img src="./assets/images/team-profile.gif" alt="First portfolio" />
                                        </figure>
                                    </div>
                                    <footer className="card-footer">
                                        <a href="https://github.com/tvolpatto/engineering-team-generator/blob/master/extras/gif/team-profile.gif"
                                            target="_blank" className="card-footer-item">
                                            Preview
                                        </a>
                                        <a href="https://github.com/tvolpatto/engineering-team-generator/" target="_blank" className="card-footer-item">
                                            Source Code
                                        </a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
