import React from 'react'
import styled from 'styled-components'

import translateArea from './translateArea'

const AreaMovementBtn = props => (
    <Button 
        top={props.top} bottom={props.bottom}
        left={props.left} right={props.right}
        rotate={props.rotate}

        onClick={ () => translateArea(props.area) } 
        onMouseEnter={props.onMouseEnter} 
        onMouseLeave={props.onMouseLeave}

    >{props.label}</Button>
)

export default AreaMovementBtn


const Button = styled.button`
    width: 10rem;
    padding: 1rem 0rem;
    text-align: center;
    font-size: 1.3rem;
    z-index: 10;

    border: none;
    background-color: transparent;

    &:hover {
        color: white;

        /* variavel: constants.$translate-button-highlight-duration  */
        transition: color .5s ease;
    }

    position: absolute;
    top:    ${props => `${props.top    || ''}`};
    bottom: ${props => `${props.bottom || ''}`};
    left:   ${props => `${props.left   || ''}`};
    right:  ${props => `${props.right  || ''}`};

    transform: ${props => `rotate(${props.rotate || 0}deg)`};
`
