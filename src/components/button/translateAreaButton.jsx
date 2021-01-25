import React from 'react'

import translateArea from './translateArea'
import './translateAreaButton.scss'

const btnClassName = 'translate-area-btn'

export default props => {
    // atrubuido diretamento no style
    // para nao precisar criar stylesheel .scss
    // pra cada componente
    const btnStyle = {
        top: `${props.top}`,
        bottom: `${props.bottom}`,
        left: `${props.left}`,
        right: `${props.right}`,
        transform: `rotate(${props.rotate}deg)`,
    }

    return (
        <div className={btnClassName} style={btnStyle} 
            // translateArea(gridAreaName)
            onClick={ () => translateArea(props.area) } 
            onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}
        >{props.label}</div>
    )
}