import React, { useEffect } from 'react'
import './main.scss'

/* jsx component */
import AreaMovementButton from '../components/button/AreaMovementBtn'

import Profile from '../contents/profile/profile'
import ProfileSlime from '../contents/profile/profileSlime'
import WorkSlime from '../contents/work/workSlime'
import ContactSlime from '../contents/contact/contactSlime'

/* func */
import AreaMovement from '../components/button/AreaMovement'
import { highlightSlime, lowlightSlime } from '../components/slime/highlightSlime'

/* config file */
import gridAreaData from '../utils/js/gridAreaData'
import slimeConfig from '../utils/js/slimeConfig'


export default props => {
    const initArea = gridAreaData.home.name // for debug
    // useEffect(() => AreaMovement(initArea), []) // for debug

    return (
        <div id="main">
            <div id="home">
                <AreaMovementButton area={gridAreaData.profile.name} label="Profile" 
                    top="44vh" left="-6.0rem" rotate="-90"
                    onMouseEnter={ () => highlightSlime(slimeConfig.profile) } 
                    onMouseLeave={ () => lowlightSlime(slimeConfig.profile) }
                ></AreaMovementButton>

                <AreaMovementButton area={gridAreaData.work.name} label="Work" 
                    top="14vh" right="-6.0rem" rotate="90"
                    onMouseEnter={ () => highlightSlime(slimeConfig.work) } 
                    onMouseLeave={ () => lowlightSlime(slimeConfig.work) }
                ></AreaMovementButton>
                
                <AreaMovementButton area={gridAreaData.contact.name} label="Contact" 
                    bottom="17vh" right="-6.0rem" rotate="90"
                    onMouseEnter={ () => highlightSlime(slimeConfig.contact) } 
                    onMouseLeave={ () => lowlightSlime(slimeConfig.contact) }
                ></AreaMovementButton>
            </div>

            <div id="profile">
                <ProfileSlime></ProfileSlime>

                <Profile></Profile>

                <AreaMovementButton area={gridAreaData.home.name} label="Back"
                    top="1vh" right="0rem" width="9rem" rotate="0"
                ></AreaMovementButton>
            </div>

            <div id="work">
                <WorkSlime></WorkSlime>

                <AreaMovementButton area={gridAreaData.home.name} label="Back"  
                    top="1vh" left="0rem" width="8rem" rotate="0"
                ></AreaMovementButton>
            </div>

            <div id="contact">
                <ContactSlime></ContactSlime>

                <AreaMovementButton area={gridAreaData.home.name} label="Back"  
                    top="1vh" left="0rem" width="8rem" rotate="0"
                ></AreaMovementButton>
            </div>

            {/* <div id="none1">none1</div>
            <div id="none2">none2</div> */}
        </div>
    )
}