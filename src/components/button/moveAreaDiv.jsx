import React from 'react'
import './moveAreaDiv.css'

import translate from './translate'

export default props => {
    const style = {
        width: `${props.width}`,
        top: `${props.top}`,
        bottom: `${props.bottom}`,
        left: `${props.left}`,
        right: `${props.right}`,
        transform: `rotate(${props.rotate}deg)`,
    }

    return (
        <div onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}
            onClick={ () => translate(props.area) } className="move-area-btn" style={style} 
        >{props.children}</div>
    )
}