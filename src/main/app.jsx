import React, { Fragment } from 'react'
import './app.css'
import translate from './translate'

export default props => {
    return (
        <div className="main">
            <div className="title">
                <button onClick={ () => translate('one') }>one</button>
            </div>

            <div className="one">
                <button onClick={ () => translate('title')}>title</button>
            </div>

            <div className="three">three</div>
            <div className="four">four</div>
            <div className="six">six</div>
            <div className="seven">seven</div>
            <div className="eight">eight</div>
            <div className="nine">nine</div>
        </div>
    )
}