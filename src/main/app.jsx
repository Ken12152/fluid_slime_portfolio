import React, { useEffect } from 'react'
import './app.css'

/* func */
import moveArea from '../components/button/moveArea'

/* jsx component */
// import _MoveAreaButton from '../components/button/_moveAreaButton'
import MoveAreaButton from '../components/button/moveAreaButton'
import { highlightSlime, lowlightSlime } from '../components/slimeshape/highlightSlimeAnimation'

import LeftSlime from '../contents/profile/leftSlime'
import WorkSlime from '../contents/work/workSlime'
import ContactSlime from '../contents/contact/contactSlime'
import Profile from '../contents/profile/profile'


export default props => {
    const initPos = 'title'
    useEffect(() => moveArea(initPos), [])

    return (
        <div id="main">
            <div id="title">
                <MoveAreaButton label="Profile" area="profile" top="44vh" left="-6.0rem" rotate="-90"
                    onMouseEnter={ () => highlightSlime('profile-slime') } 
                    onMouseLeave={ () => lowlightSlime('profile-slime') }
                ></MoveAreaButton>
                <MoveAreaButton label="Work" area="work" top="14vh" right="-6.0rem" rotate="90"
                    onMouseEnter={ () => highlightSlime('work-slime') } 
                    onMouseLeave={ () => lowlightSlime('work-slime') }
                ></MoveAreaButton>
                <MoveAreaButton label="Contact" area="contact" bottom="17vh" right="-6.0rem" rotate="90"
                    onMouseEnter={ () => highlightSlime('contact-slime') } 
                    onMouseLeave={ () => lowlightSlime('contact-slime') }
                ></MoveAreaButton>
            </div>

            <div id="profile">
                <MoveAreaButton area="title" label="Back"
                    top="1vh" right="0rem" width="9rem" rotate="0"
                ></MoveAreaButton>
                <Profile></Profile>
                <LeftSlime width="140vw" height="125vh"></LeftSlime>
            </div>

            <div id="work">
                <MoveAreaButton area="title" label="Back"  
                    top="1vh" left="0rem" width="8rem" rotate="0"
                ></MoveAreaButton>
                <WorkSlime width="140vw" height="125vh"></WorkSlime>
            </div>

            <div id="contact">
                <MoveAreaButton area="title" label="Back"  
                    top="1vh" left="0rem" width="8rem" rotate="0"
                ></MoveAreaButton>
                <ContactSlime width="140vw" height="125vh"></ContactSlime>
            </div>

            <div id="none1">none1</div>
            <div id="none2">none2</div>
        </div>
    )
}