import React, { useEffect } from 'react'
import './main.css'

/* jsx component */
/* components */
import MoveAreaButton from '../components/button/moveAreaButton'
// import _MoveAreaButton from '../components/button/_moveAreaButton'

/* contents */
import LeftSlime from '../contents/profile/profileSlime'
import WorkSlime from '../contents/work/workSlime'
import ContactSlime from '../contents/contact/contactSlime'
import Profile from '../contents/profile/profile'

/* func */
import moveArea from '../components/button/moveArea'
import { highlightSlime, lowlightSlime } from '../components/fluidSlime/highlightSlimeAnimation'

/* config file */
import gridAreaName from '../config/gridAreaName'


export default props => {
    const initPos = gridAreaName.title
    useEffect(() => moveArea(initPos), [])

    return (
        <div id="main">
            <div id="title">
                <MoveAreaButton area={gridAreaName.profile} label="Profile" 
                    top="44vh" left="-6.0rem" rotate="-90"
                    onMouseEnter={ () => highlightSlime('profile-slime') } 
                    onMouseLeave={ () => lowlightSlime('profile-slime') }
                ></MoveAreaButton>
                <MoveAreaButton area={gridAreaName.work} label="Work" 
                    top="14vh" right="-6.0rem" rotate="90"
                    onMouseEnter={ () => highlightSlime('work-slime') } 
                    onMouseLeave={ () => lowlightSlime('work-slime') }
                ></MoveAreaButton>
                <MoveAreaButton area={gridAreaName.contact} label="Contact" 
                    bottom="17vh" right="-6.0rem" rotate="90"
                    onMouseEnter={ () => highlightSlime('contact-slime') } 
                    onMouseLeave={ () => lowlightSlime('contact-slime') }
                ></MoveAreaButton>
            </div>

            <div id="profile">
                <MoveAreaButton area={gridAreaName.title} label="Back"
                    top="1vh" right="0rem" width="9rem" rotate="0"
                ></MoveAreaButton>
                <Profile></Profile>

                {/*  */}
                {/*  */}
                <LeftSlime width="140vw" height="125vh"></LeftSlime>
                {/*  */}
                {/*  */}

            </div>

            <div id="work">
                <MoveAreaButton area={gridAreaName.title} label="Back"  
                    top="1vh" left="0rem" width="8rem" rotate="0"
                ></MoveAreaButton>
                <WorkSlime width="140vw" height="125vh"></WorkSlime>
            </div>

            <div id="contact">
                <MoveAreaButton area={gridAreaName.title} label="Back"  
                    top="1vh" left="0rem" width="8rem" rotate="0"
                ></MoveAreaButton>
                <ContactSlime width="140vw" height="125vh"></ContactSlime>
            </div>

            <div id="none1">none1</div>
            <div id="none2">none2</div>
        </div>
    )
}