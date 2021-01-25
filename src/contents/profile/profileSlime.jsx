import React from 'react'

import SlimeAnimationContainer from '../../components/slime/slimeAnimationContainer'

import slimeConfig from '../../utils/js/slimeConfig'
import slimeSvgData from '../../utils/slimeSvgData/slime_1'

import './profileSlime.scss'

export default props => (
    <SlimeAnimationContainer
        dur="3s" // animation duration

        // configuracao do style esta no './profieSlime.scss'
        containerId={slimeConfig.profile.containerId}
        slimeId={slimeConfig.profile.slimeId} 

        values={slimeSvgData.animationPath} 
        viewBox={slimeSvgData.viewBox} 
    ></SlimeAnimationContainer>
)