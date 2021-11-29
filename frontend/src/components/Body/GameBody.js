import React from 'react'
import Game from './GamePage/Game'
import './Body.css'

function Body(props) {
    return (
        <div className='body-page'>
            <Game data={props.data} setGameBodyResults={props.setGameBodyResults}/>
        </div>
    )
}

export default Body