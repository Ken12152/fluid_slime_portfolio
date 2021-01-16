import React from 'react'

export default props => (
    <svg id={props.id} viewBox={props.viewBox} version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path>
            <animate values={props.values}
                dur="10s" repeatCount="indefinite" attributeName="d"
            ></animate>
        </path>
    </svg>
)