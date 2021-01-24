import React, { useEffect } from 'react'
import './main.scss'

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
import gridAreaData from '../utils/gridAreaData'
import slimeConfig from '../utils/slimeConfig'


export default props => {
    const initArea = gridAreaData.title.name
    useEffect(() => moveArea(initArea), [])

    return (
        <div id="main">
            <div id="title">
                <MoveAreaButton area={gridAreaData.profile.name} label="Profile" 
                    top="44vh" left="-6.0rem" rotate="-90"
                    onMouseEnter={ () => highlightSlime(slimeConfig.profile) } 
                    onMouseLeave={ () => lowlightSlime(slimeConfig.profile) }
                ></MoveAreaButton>

                <MoveAreaButton area={gridAreaData.work.name} label="Work" 
                    top="14vh" right="-6.0rem" rotate="90"
                    onMouseEnter={ () => highlightSlime(slimeConfig.work) } 
                    onMouseLeave={ () => lowlightSlime(slimeConfig.work) }
                ></MoveAreaButton>
                
                <MoveAreaButton area={gridAreaData.contact.name} label="Contact" 
                    bottom="17vh" right="-6.0rem" rotate="90"
                    onMouseEnter={ () => highlightSlime(slimeConfig.contact) } 
                    onMouseLeave={ () => lowlightSlime(slimeConfig.contact) }
                ></MoveAreaButton>
            </div>

            <div id="profile">
                <ProfileSlime></ProfileSlime>

                <Profile></Profile>

                <MoveAreaButton area={gridAreaData.title.name} label="Back"
                    top="1vh" right="0rem" width="9rem" rotate="0"
                ></MoveAreaButton>
            </div>

            <div id="work">
                <WorkSlime></WorkSlime>

                <MoveAreaButton area={gridAreaData.title.name} label="Back"  
                    top="1vh" left="0rem" width="8rem" rotate="0"
                ></MoveAreaButton>
            </div>

            <div id="contact">
                <ContactSlime></ContactSlime>

                <MoveAreaButton area={gridAreaData.title.name} label="Back"  
                    top="1vh" left="0rem" width="8rem" rotate="0"
                ></MoveAreaButton>
            </div>

            {/* <div id="none1">none1</div>
            <div id="none2">none2</div> */}
        </div>
    )
}