import React from 'react'
import './profile.scss'

import LoremIpsum from '../../components/text/genLoremIpsum'

export default props => {
    const times = 8

    return (
        <div className="profile-container">
            <LoremIpsum times={times}></LoremIpsum>
        </div>
    )
}