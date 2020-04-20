import React from 'react'

export default function SectionHeader(props) {
    return (
        <div className="section-heading">
            <h3 className="title is-2">{props.title}</h3>
            <h4 className="subtitle is-5">{props.subtitle}</h4>
        </div>
    )
}
