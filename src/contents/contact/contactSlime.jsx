import React from 'react'
import './contactSlime.scss'

import AnimationSlime from '../../components/slime/animationSlimeCtnr'

import slimeConfig from '../../utils/js/slimeConfig'
import slimeSvgData from '../../utils/slimeSvgData/slime_1'

export default props => (
    <AnimationSlime
        dur="3s" 

        containerId={slimeConfig.contact.containerId}
        slimeId={slimeConfig.contact.slimeId} 

        values={slimeSvgData.animationPath} viewBox={slimeSvgData.viewBox} 
    ></AnimationSlime>
)