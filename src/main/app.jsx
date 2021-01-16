import React, { Fragment } from 'react'
import './app.css'
import translate from './translate'

export default props => {
    return (
        <div className="main">
            <div className="title">
                <button onClick={ () => translate('work') }>work</button>
                <button onClick={ () => translate('profile') }>profile</button>
                <button onClick={ () => translate('contact') }>contact</button>
            </div>

            <div className="work">
                <button onClick={ () => translate('title') }>title</button>
            </div>

            <div className="profile">
                <button onClick={ () => translate('title') }>title</button>
            </div>

            <div className="contact">
                <button onClick={ () => translate('title') }>title</button>
            </div>

            <div className="none1">none1</div>
            <div className="none2">none2</div>
        </div>
    )
}