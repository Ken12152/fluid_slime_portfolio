import React from 'react'
import './highlightSlimeAnimation.css'

export default props => {
    const svgStyle = {
        position: 'absolute',
        width: '100%', 
        height: '100%',
        zIndex: '-1',
    }

    const containerStyle = {
        position: 'absolute',
        width: `${props.width}`,
        height: `${props.height}`,
    }

    return (
        <div id={props.containerId} className="slime-container" style={{ ...containerStyle, ...props.style }}>
            <svg id={props.slimeId} className="slime" style={svgStyle} 
                viewBox={props.viewBox} preserveAspectRatio="none"
                version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path>
                    <animate values={props.values}
                        dur={props.dur ? props.dur : "10s"} repeatCount="indefinite" attributeName="d"
                    ></animate>
                </path>
            </svg>
        </div>
    )
}