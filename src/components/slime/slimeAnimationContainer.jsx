import React from 'react'
import './slimeAnimationContainer.scss'

const defaultAnimationDuration = "8s"

export default props => {
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