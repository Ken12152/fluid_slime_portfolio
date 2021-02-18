import React from 'react'
import styled from 'styled-components'

import AnimationSlime from '../../components/slime/AnimationSlimeCtnr'

import slimeConfig from '../../utils/js/slimeConfig'
import slimeSvgData from '../../utils/slimeSvgData/slime_1'

const ProfileSlime = props => (
    <AnimationSlime
        /* Normal style */
        width="140vw"
        height="125vh"
        color="#e8a2a0"
        opacity="1"
        rotate="180deg"
        // translate=""

        /* Highlight style */
        highlightColor="rgb(204, 33, 33)"
        highlightOpacity="0.7"
        highlightTranslate="10vw, 0px"
        // highlightWidth=""
        // highlightHeight=""
        // highlightRotate=""

        dur="3s" // animation duration

        // id usado na hora de adcionar class .highlight
        ctnrId={slimeConfig.profile.containerId}
        slimeId={slimeConfig.profile.slimeId} 

        values={slimeSvgData.animationPath} 
        viewBox={slimeSvgData.viewBox} 
    ></AnimationSlime>
)

export default ProfileSlime