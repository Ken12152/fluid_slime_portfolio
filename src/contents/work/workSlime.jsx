import React from 'react'
import './workSlime.scss'

import SlimeAnimationContainer from '../../components/slime/slimeAnimationContainer'

import slimeConfig from '../../utils/js/slimeConfig'
import slimeSvgData from '../../utils/slimeSvgData/slime_1'

export default props => (
    <SlimeAnimationContainer
        dur="3s" 

        containerId={slimeConfig.work.containerId}
        slimeId={slimeConfig.work.slimeId} 

        values={slimeSvgData.animationPath} viewBox={slimeSvgData.viewBox} 
    ></SlimeAnimationContainer>
)