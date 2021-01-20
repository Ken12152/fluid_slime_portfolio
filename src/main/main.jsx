import React, { useEffect } from 'react'
import './main.css'

/* jsx component */
// import _MoveAreaButton from '../components/button/_moveAreaButton'
import MoveAreaButton from '../components/button/moveAreaButton'

import Profile from '../contents/profile/profile'
import ProfileSlime from '../contents/profile/profileSlime'
import WorkSlime from '../contents/work/workSlime'
import ContactSlime from '../contents/contact/contactSlime'

/* func */
import moveArea from '../components/button/moveArea'
import { highlightSlime, lowlightSlime } from '../components/slime/highlightSlime'

/* config file */
import gridAreaName from '../config/gridAreaName'
import slimeConfig from '../config/slimeConfig'


export default props => {
    const initArea = gridAreaName.title
    useEffect(() => moveArea(initArea), [])

    return (
        <div id="main">
            <div id="title">
                <MoveAreaButton area={gridAreaName.profile} label="Profile" 
                    top="44vh" left="-6.0rem" rotate="-90"
                    onMouseEnter={ () => highlightSlime(slimeConfig.profile) } 
                    onMouseLeave={ () => lowlightSlime(slimeConfig.profile) }
                ></MoveAreaButton>

                <MoveAreaButton area={gridAreaName.work} label="Work" 
                    top="14vh" right="-6.0rem" rotate="90"
                    onMouseEnter={ () => highlightSlime(slimeConfig.work) } 
                    onMouseLeave={ () => lowlightSlime(slimeConfig.work) }
                ></MoveAreaButton>
                
                <MoveAreaButton area={gridAreaName.contact} label="Contact" 
                    bottom="17vh" right="-6.0rem" rotate="90"
                    onMouseEnter={ () => highlightSlime(slimeConfig.contact) } 
                    onMouseLeave={ () => lowlightSlime(slimeConfig.contact) }
                ></MoveAreaButton>
            </div>

            <div id="profile">
                <ProfileSlime></ProfileSlime>

                <Profile></Profile>

                <MoveAreaButton area={gridAreaName.title} label="Back"
                    top="1vh" right="0rem" width="9rem" rotate="0"
                ></MoveAreaButton>
            </div>

            <div id="work">
                <WorkSlime></WorkSlime>

                <MoveAreaButton area={gridAreaName.title} label="Back"  
                    top="1vh" left="0rem" width="8rem" rotate="0"
                ></MoveAreaButton>
            </div>

            <div id="contact">
                <ContactSlime></ContactSlime>

                <MoveAreaButton area={gridAreaName.title} label="Back"  
                    top="1vh" left="0rem" width="8rem" rotate="0"
                ></MoveAreaButton>
            </div>

            {/* <div id="none1">none1</div>
            <div id="none2">none2</div> */}
        </div>
    )
}