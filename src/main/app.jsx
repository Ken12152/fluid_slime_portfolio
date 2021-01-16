import React from 'react'
import './app.css'

import MoveBtn from '../components/button/translateBtn'
import WorkSlime from '../components/slimeshape/work'

export default props => {
    return (
        <div className="main">
            <div className="title">
                <MoveBtn move='work'>move to work</MoveBtn>
                <MoveBtn move='profile'>profile</MoveBtn>
                <MoveBtn move='contact'>contact</MoveBtn>
            </div>

            <div className="work">
                <MoveBtn move='title' style={{
                    // display: 'none',
                    // zIndex: '-200',
                }}>title</MoveBtn>

                <WorkSlime width="140vw" height="125vh"></WorkSlime>
            </div>

            <div className="profile">
                <MoveBtn move='title'>title</MoveBtn>
            </div>

            <div className="contact">
                <MoveBtn move='title'>title</MoveBtn>
            </div>

            <div className="none1">none1</div>
            <div className="none2">none2</div>
        </div>
    )
}