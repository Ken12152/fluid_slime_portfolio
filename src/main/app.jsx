import React, { useEffect } from 'react'
import './app.css'

import MoveBtn from '../components/button/translateBtn'
import LeftSlime from '../components/slimeshape/leftSlime'
import Profile from '../profile/profile'
import translate from '../components/button/translate'

export default props => {
    const initPos = 'profile'
    useEffect(() => translate(initPos), [])

    return (
        <div className="main">
            <div className="title">
                <MoveBtn move='profile'>left</MoveBtn>
                <MoveBtn move='work'>topRight</MoveBtn>
                <MoveBtn move='contact'>bottomRight</MoveBtn>
            </div>

            <div className="profile">
                <MoveBtn move='title' style={{ zIndex: '100', position: 'absolute', top: '-0vh', left: '0vw'}}>move to title</MoveBtn>

                <Profile></Profile>

                <LeftSlime width="140vw" height="125vh" opacity="0.5"></LeftSlime>
            </div>

            <div className="work">
                <MoveBtn move='title'>move to title</MoveBtn>
            </div>

            <div className="contact">
                <MoveBtn move='title'>move to title</MoveBtn>
            </div>

            <div className="none1">none1</div>
            <div className="none2">none2</div>
        </div>
    )
}