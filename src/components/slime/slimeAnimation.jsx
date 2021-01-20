import React from 'react'
import './highlightSlimeAnimation.css'

export default props => {
    const defaultAnimationDuration = "8s"

    const containerSize = {
        width: `${props.width}`,
        height: `${props.height}`,
    }

    return (
        <div id={props.containerId} className="slime-container" 
            style={{ ...containerSize, ...props.style }}>

            <svg id={props.slimeId} className="slime"
                viewBox={props.viewBox} preserveAspectRatio="none"
                version="1.1" xmlns="http://www.w3.org/2000/svg">

                <path>
                    <animate values={props.values}
                        attributeName="d" repeatCount="indefinite" 
                        dur={props.dur || defaultAnimationDuration} 
                    ></animate>
                </path>
            </svg>
        </div>
    )
}