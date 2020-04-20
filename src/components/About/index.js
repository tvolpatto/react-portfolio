import React from 'react'
import ProfilePicture from "../ProfilePicture"
import Profile from "../Profile"
import ProfileSkills from "../ProfileSkills"
import SectionHeader from '../SectionHeader'


export default function About() {

        return (         
            <section className="section has-background-white-ter" id="about">
                {/* <!-- Title --> */}
                <SectionHeader title={"About Me"} subtitle={"A Brazilian without soccer skills"}/>
                
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
