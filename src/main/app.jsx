import React, { useEffect } from 'react'
import './app.css'

import translate from '../components/button/translate'

import MoveBtn from '../components/button/translateBtn'
import LeftSlime from '../components/slimeshape/leftSlime'
import Profile from '../components/profile/profile'
import MoveDiv from '../components/button/moveAreaDiv'


export default props => {
    const initPos = 'title'
    useEffect(() => translate(initPos), [])

    return (
        <div className="main">
            <div className="title">
                <MoveBtn move='profile'>left</MoveBtn>
                <MoveBtn move='work'>topRight</MoveBtn>
                <MoveBtn move='contact'>bottomRight</MoveBtn>

                <MoveDiv area="profile" top="44vh" left="-7rem" rotate="-90" >
                    Profile
                </MoveDiv>
            </div>

            <div className="profile">
                <MoveBtn move='title' style={{ zIndex: '100', position: 'absolute', top: '-0vh', left: '0vw'}}>move to title</MoveBtn>

                <Profile></Profile>

                <LeftSlime width="140vw" height="125vh" style={{
                    fill: '#e8a2a0',
                    // zIndex: '-2',
                    // backgroundColor: 'gray',
                    // opacity: '0.5',
                }}></LeftSlime>
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