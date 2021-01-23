import React from 'react'
import './moveAreaButton.scss'

import moveArea from './moveArea'

export default props => {
    const style = {
        top: `${props.top}`,
        bottom: `${props.bottom}`,
        left: `${props.left}`,
        right: `${props.right}`,
        transform: `rotate(${props.rotate}deg)`,
    }

    return (
        <div className="movearea-btn" style={style} 
            onClick={ () => moveArea(props.area) } 
            onMouseEnter={props.onMouseEnter} 
            onMouseLeave={props.onMouseLeave}
        >{props.label}</div>
    )
}