import React, { useEffect } from 'react'
import './app.css'

import translate from '../components/button/translate'

import MoveBtn from '../components/button/translateBtn'
import LeftSlime from '../components/slimeshape/leftSlime'
import Profile from '../components/profile/profile'
import MoveDiv from '../components/button/moveAreaDiv'

import { highlightSlime, lowlightSlime } from '../components/slimeshape/highlightSlimeAnimation'

export default props => {
    const initPos = 'title'
    useEffect(() => translate(initPos), [])

    return (
        <div className="main">
            <div className="title">
                <MoveDiv area="profile" top="44vh" left="-6.0rem" rotate="-90"
                    onMouseEnter={ () => highlightSlime('profile-slime') } 
                    onMouseLeave={ () => lowlightSlime('profile-slime') }
                >Profile</MoveDiv>
                <MoveDiv area="work" top="14vh" right="-6.0rem" rotate="90">Work</MoveDiv>
                <MoveDiv area="contact" bottom="17vh" right="-6.0rem" rotate="90">Contact</MoveDiv>
            </div>

            <div className="profile">
                <MoveDiv top="1vh" right="0rem" width="9rem" rotate="0"
                    area="title" hover={1}
                >Back</MoveDiv>

                <Profile></Profile>

                <LeftSlime width="140vw" height="125vh" style={{ 
                }}></LeftSlime>
            </div>

            <div className="work">
                <MoveDiv area="title" top="1vh" left="0rem" width="8rem" rotate="0">Back</MoveDiv>
            </div>

            <div className="contact">
                <MoveDiv area="title" top="1vh" left="0rem" width="8rem" rotate="0">Back</MoveDiv>
            </div>

            <div className="none1">none1</div>
            <div className="none2">none2</div>
        </div>
    )
}