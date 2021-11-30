import React from 'react'
import Theme from './ThemePage/Theme'
import Results from './ResultsPage/Results'

function ResultsBody(props) {
    return (
        <div>
            {/* <Theme /> */}
            <Results gameBodyResults={props.gameBodyResults}/>
        </div>
       
    )
}

export default ResultsBody
