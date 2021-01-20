import React from 'react'
import SlimeAnimation from '../../components/fluidSlime/slimeAnimation'

import slimeAnimationPath from '../slimeAnimationPath/slime_1'

export default props => (
    <SlimeAnimation containerId="profile-slime-container"
        width={props.width} height={props.height} style={props.style}

        slimeId="profile-slime" 

        dur="3s" values={slimeAnimationPath} viewBox="0 0 634.33 703.22" 
    ></SlimeAnimation>
)
