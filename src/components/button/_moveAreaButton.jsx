import React from 'react'
import moveArea from './moveArea'

export default props => {
    const defaultStyle = {
        position: 'relative',
        top: `${props.top}`,
        bottom: `${props.bottom}`,
        left: `${props.left}`,
        right: `${props.right}`,
        zIndex: '10',
    }

    return (
        <button onClick={ () => moveArea(`${props.area}`) } 
            style={{ ...defaultStyle, ...props.style }}
        >{props.children}</button>
    )
}