import React from 'react'
import Game from './GamePage/Game'
import './Body.css'

function Body(props) {
    return (
        <div className='body-page'>
            <h1>Hello from Game Page</h1>
            <Game data={props.data}/>
        </div>
    )
}

export default Body
