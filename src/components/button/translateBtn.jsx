import React from 'react'
import translate from './translate'

const defaultStyle = {
    position: 'relative',
    zIndex: '10'
}

export default props => (
    <button onClick={ () => translate(`${props.move}`) } 
        style={{ ...defaultStyle, ...props.style }}
    >{props.children}</button>
)