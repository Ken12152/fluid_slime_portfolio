import React from 'react'
import './profile.css'
import LoremIpsum from '../text/genLoremIpsum'

export default props => {
    return (
        <div className="profile-container">
            <LoremIpsum times="5"></LoremIpsum>
        </div>
    )
}