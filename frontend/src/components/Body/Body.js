import React from 'react'
import Instructions from './InstructionPage/Instructions'
import Theme from './ThemePage/Theme'
import Game from './GamePage/Game'
import Results from './ResultsPage/Results'

function Body(props) {
    return (
        <div>
            <Instructions />
            <Theme />
            <Game data={props.data}/>
            <Results />
            <h1>Hello</h1>
        </div>
    )
}

export default Body
