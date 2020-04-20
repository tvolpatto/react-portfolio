import React from 'react'

export default function ProjectHeader(props) {
    return (
        <header className="card-header">
            <div className="card-header-title columns is-multiline">
                <div className="column is-full">
                    <span className=" is-pulled-left">props.title</span>
                    <span className="is-pulled-right">
                    {props.env.map(env => {
                        <span className="tag is-default is-link is-changeable">
                            <i className={env.icon} title={env.text}></i>
                        </span>
                    })}             
                </span>
            </div>
            <div className=" column is-full">
                {props.techs.map( tech => <span className={tech.tag}>{tech.name}</span> )}
            </div>
        </div>
    </header>
    )
}
