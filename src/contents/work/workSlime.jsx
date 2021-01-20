import React from 'react'
import './workSlime.css'

import SlimeAnimationContainer from '../../components/slime/slimeAnimationContainer'

import slimeConfig from '../../config/slimeConfig'
import slimeSvgData from '../../data/slimeSvgData/slime_1'

export default props => (
    <SlimeAnimationContainer
        width="140vw" height="125vh" 
        containerId={slimeConfig.work.containerId}

        dur="3s" 
        slimeId={slimeConfig.work.slimeId} 
        values={slimeSvgData.animationPath} viewBox={slimeSvgData.viewBox} 
    ></SlimeAnimationContainer>
)