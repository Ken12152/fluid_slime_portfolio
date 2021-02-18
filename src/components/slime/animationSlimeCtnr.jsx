import React from 'react'
import styled from 'styled-components'

const defaultAnimationDur= "8s"

const AnimationSlime = props => (
    <SlimeContainer 
        id={props.ctnrId} 

        // normal style
        width={props.width}
        height={props.height}
        translate={props.translate}

        // highlight style
        highlightWidth={props.highlightWidth}
        highlightHeight={props.highlightHeight}
        highlightTranslate={props.highlightTranslate}
        >
        <Slime 
            id={props.slimeId} 
            viewBox={props.viewBox} 
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1" 

            // normal style
            color={props.color}
            opacity={props.opacity}
            rotate={props.rotate}

            // highlight style
            highlightColor={props.highlightColor}
            highlightOpacity={props.highlightOpacity}
            highlightRotate={props.highlightRotate}
            >
            <path>
                <animate 
                    values={props.values}
                    attributeName="d" 
                    repeatCount="indefinite" 
                    dur={props.dur || defaultAnimationDur} 
                ></animate>
            </path>
        </Slime>
    </SlimeContainer>
)


// styled-components
const SlimeContainer = styled.div`
    /* Base style */
    // possiton: absolute para sair do fluxo do flexbox
    // mas continua funcionando
    // justify-content: center e align-items: center
    position: absolute;
    transition: transform .7s ease;


    /* Custom style */
    // como componente filho <svg> 
    // possui width: 100% e height: 100%,
    // o size do container determina o size do slime
    width: ${props => props.width};
    height: ${props => props.height};

    transform: ${props => `translate(${props.translate || '0, 0'})`};

    &.highlight {
        width: ${props => props.highlightWidth || ''};
        height: ${props => props.highlightHeight || ''};

        transform: ${props => (
            props.highlightTranslate ? 
            `translate(${props.highlightTranslate})` : ''
        )};
    }
`

const Slime = styled.svg`
    /* Base style */
    width: 100%;
    height: 100%;
    
    position: relative;
    z-index: -10;

    // all: fill, opacity, transform...
    transition: all .7s ease;


    /* Custom style */
    fill: ${props => props.color};
    opacity: ${props => props.opacity || ''};

    transform: ${props => `rotate(${props.rotate || '0deg'})`};

    &.highlight {
        fill: ${props => props.highlightColor || ''};
        opacity: ${props => props.highlightOpacity || ''};

        transform: ${props => (
            props.highlightRotate ? 
            `rotate(${props.highlightRotate})` : ''
        )};
    }
`

export default AnimationSlime
