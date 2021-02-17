import React from 'react'
import './workSlime.scss'

import AnimationSlime from '../../components/slime/AnimationSlimeCtnr'

import slimeConfig from '../../utils/js/slimeConfig'
import slimeSvgData from '../../utils/slimeSvgData/slime_1'

export default props => (
    <AnimationSlime
        dur="3s" 

        containerId={slimeConfig.work.containerId}
        slimeId={slimeConfig.work.slimeId} 

        values={slimeSvgData.animationPath} viewBox={slimeSvgData.viewBox} 
    ></AnimationSlime>
)