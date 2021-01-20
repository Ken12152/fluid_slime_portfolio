import React from 'react'
import './profile.css'
import LoremIpsum from '../../components/text/genLoremIpsum'

export default props => {
    const times = 8
    return (
        <div className="profile-container">
            <LoremIpsum times={times}></LoremIpsum>
        </div>
    )
}