import React from 'react'

export default props => {
    const svgStyle = {
        position: 'absolute',
        width: '100%', 
        height: '100%',
    }

    const containerStyle = {
        position: 'absolute',
        width: `${props.width}`,
        height: `${props.height}`,
    }

    return (
        <div style={containerStyle}>
            <svg id={props.id} viewBox={props.viewBox} version="1.1" xmlns="http://www.w3.org/2000/svg"
                style={svgStyle} preserveAspectRatio="none">
                <path>
                    <animate values={props.values}
                        dur={props.dur ? props.dur : "10s"} repeatCount="indefinite" attributeName="d"
                    ></animate>
                </path>
            </svg>
        </div>
    )
}