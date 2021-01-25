import React from 'react'
import './profile.scss'

import LoremIpsum from '../../components/text/genLoremIpsum'

export default props => {
    const times = 8 // for debug

    return (
        <div id="profile-container">
            <LoremIpsum times={times}></LoremIpsum>
        </div>
    )
}