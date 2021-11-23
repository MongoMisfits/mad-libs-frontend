import React from 'react'
import { Link } from 'react-router-dom'

function Game() {
    const handleCLick = ()=>{
        console.log('clicked')
    }

    return (
        <div>
            <h2>Game Page</h2>
            <Link to='/result-page' ><button onClick={handleCLick}>Submit</button></Link>
        </div>
    )
}

export default Game
