import React, { Component } from 'react'
import SectionHeader from '../SectionHeader'

export default function Contact()  {
        return (
            <section className="section" id="contact">
                <div className="container">
                <SectionHeader title={"Contact"} subtitle={"Call me maybe"}/>
                   
                    <br/>
                    <div className="columns">
                        <div className="column is-6 is-offset-3">
                            <div className="box">
                                <form action="mailto:tvolpatto@gmail.com" method="post" enctype="text/plain">
                                    <div className="field">
                                        <label className="label">Name</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="Text input" />
                                            </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control has-icons-left">
                                            <input className="input" type="email" placeholder="Email input" value="" />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Message</label>
                                        <div className="control">
                                            <textarea className="textarea" placeholder="Textarea"></textarea>
                                        </div>
                                    </div>

                                    <div className="field is-grouped has-text-centered">
                                        <div className="control">
                                            <button type="submit" className="button is-link is-changeable is-large"><span className="icon">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                                <span>Send</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
  
}

