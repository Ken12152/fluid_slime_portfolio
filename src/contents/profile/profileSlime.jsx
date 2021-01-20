import React from 'react'

import SlimeAnimation from '../../components/slime/slimeAnimation'

import slimeConfig from '../../config/slimeConfig'
import slimeSvgData from '../slimeSvgData/slime_1'

export default props => (
    <SlimeAnimation
        width="140vw" height="125vh" dur="3s" 

        slimeId={slimeConfig.profile.slimeId} 
        containerId={slimeConfig.profile.containerId}

        values={slimeSvgData.animationPath} viewBox={slimeSvgData.viewBox} 
    ></SlimeAnimation>
)
