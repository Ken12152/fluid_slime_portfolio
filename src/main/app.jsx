import React, { useEffect } from 'react'
import './app.css'

import translate from '../components/button/translate'

import MoveBtn from '../components/button/translateBtn'
import LeftSlime from '../components/contents/profile/leftSlime'
import WorkSlime from '../components/contents/work/workSlime'
import ContactSlime from '../components/contents/contact/contactSlime'
import Profile from '../components/contents/profile/profile'
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
                <MoveDiv area="work" top="14vh" right="-6.0rem" rotate="90"
                    onMouseEnter={ () => highlightSlime('work-slime') } 
                    onMouseLeave={ () => lowlightSlime('work-slime') }
                >Work</MoveDiv>
                <MoveDiv area="contact" bottom="17vh" right="-6.0rem" rotate="90"
                    onMouseEnter={ () => highlightSlime('contact-slime') } 
                    onMouseLeave={ () => lowlightSlime('contact-slime') }
                >Contact</MoveDiv>
            </div>

            <div className="profile">
                <MoveDiv top="1vh" right="0rem" width="9rem" rotate="0"
                    area="title" hover={1}
                >Back</MoveDiv>

                <Profile></Profile>

                <LeftSlime width="140vw" height="125vh"></LeftSlime>
            </div>

            <div className="work">
                <MoveDiv area="title" top="1vh" left="0rem" width="8rem" rotate="0">Back</MoveDiv>
                <WorkSlime width="140vw" height="125vh"></WorkSlime>
            </div>

            <div className="contact">
                <MoveDiv area="title" top="1vh" left="0rem" width="8rem" rotate="0">Back</MoveDiv>
                <ContactSlime width="140vw" height="125vh"></ContactSlime>
            </div>

            <div className="none1">none1</div>
            <div className="none2">none2</div>
        </div>
    )
}