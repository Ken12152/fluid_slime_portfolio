import React from 'react'
import './profile.css'

export default props => {
    return (
        <div className="profile-container">
            {Array(5).fill(0).map((_, i) => <p key={i}>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>)}
        </div>
    )
}