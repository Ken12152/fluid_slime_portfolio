import React from 'react'
import './slimeAnimationContainer.scss'

const containerClassName = "slime-container"
const svgSlimeClassName = "slime-container__slime"

const defaultAnimationDuration = "8s"

export default props => (
    <div id={props.containerId} className={containerClassName}>
        <svg id={props.slimeId} className={svgSlimeClassName}
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
