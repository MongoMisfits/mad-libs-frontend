import React from 'react'
import Theme from './ThemePage/Theme'
import Results from './ResultsPage/Results'
import { Link } from 'react-router-dom'

function ResultsBody(props) {
    return (
        <div>
            <h1>Hello from Results Page</h1>
            {/* <Theme /> */}
            <Results gameBodyResults={props.gameBodyResults}/>
            <div>
                <Link to='/game-page' > <button>Play Again</button></Link>
                <Link to='/thank-you-page' > <button>Done</button></Link>
            </div>
        </div>
       
    )
}

export default ResultsBody
