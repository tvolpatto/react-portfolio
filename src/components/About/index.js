import React from 'react'
import ProfilePicture from "../ProfilePicture"
import Profile from "../Profile"
import ProfileSkills from "../ProfileSkills"


export default function About() {

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
                            <ProfilePicture/>
                        </div>
                    </div>
                    <div className="column">
                        {/* <!-- Profile --> */}
                        <div className="card">
                            <Profile/>
                        </div>
                    </div>
                    <div className="column">
                        {/* <!-- Skills --> */}
                        <div className="card">
                            <ProfileSkills/>
                        </div>
                    </div>
                </div>
            </section>
        )
    
}
