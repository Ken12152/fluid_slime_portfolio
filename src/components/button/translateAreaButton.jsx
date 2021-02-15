import React from 'react'
import styled from 'styled-components'

import translateArea from './translateArea'

// styled-componennts
const AreaMovementBtn = styled.button`
    width: 10rem;
    padding: 1rem 0rem;
    text-align: center;
    font-size: 1.3rem;

    position: absolute;
    z-index: 10;

    border: none;
    background: none;

    &:hover {
        color: white;
        transition: color .5s ease;
    }

    top:    ${props => `${props.top    || ''}`};
    bottom: ${props => `${props.bottom || ''}`};
    left:   ${props => `${props.left   || ''}`};
    right:  ${props => `${props.right  || ''}`};

    transform: ${props => `rotate(${props.rotate || 0}deg)`};
`

export default props => (
    <AreaMovementBtn 
        top={props.top} bottom={props.bottom}
        left={props.left} right={props.right}
        rotate={props.rotate}

        onClick={ () => translateArea(props.area) } 
        onMouseEnter={props.onMouseEnter} 
        onMouseLeave={props.onMouseLeave}

    >{props.label}</AreaMovementBtn>
)
