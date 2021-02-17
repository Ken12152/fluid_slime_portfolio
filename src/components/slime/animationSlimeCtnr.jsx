import React from 'react'
import styled from 'styled-components'

const defaultAnimationDur= "8s"

const AnimationSlime = props => (
    <SlimeContainer id={props.containerId}>
        <Slime 
            id={props.slimeId} 
            viewBox={props.viewBox} 
            preserveAspectRatio="none"
            version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path>
                <animate 
                    values={props.values}
                    attributeName="d" repeatCount="indefinite" 
                    dur={props.dur || defaultAnimationDur} 
                ></animate>
            </path>
        </Slime>
    </SlimeContainer>
)

export default AnimationSlime


const SlimeContainer = styled.div`
    // possiton: absolute 
    // para sair do fluxo do flexbox
    // mas continua funcionando atributo
    // justify-content: center e align-items: center
    position: absolute;

    // pra voltar na posicao inicial
    // apos desaplicar animacao translate.
    // na hora de animacao vai ser atribuido classe.
    // classname esta configurado em 'utils/scss/constant'.
    // (class = highlight)
    transform: translate(0, 0);
    /* constants.$slime_container_moving_duration  */
    transition: transform .7s ease;
`
const Slime = styled.svg`
    width: 100%;
    height: 100%;
    
    // position: relative(ou outro fora static)
    // pra poder setar z-index
    position: relative;
    z-index: -10;

    // all = opcity, fill...
    /* constants.$slime_highlight_duration  */
    transition: all .7s ease;
`
