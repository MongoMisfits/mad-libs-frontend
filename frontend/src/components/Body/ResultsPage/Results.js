import React, { useEffect, useState } from 'react'

function Results(props) {
    const [fullSentence, setFullSentence] = useState('')

    const concatFunction = () => {
        if (props.gameBodyResults.blanks) {
            let blankArr = props.gameBodyResults.blanks
            let sentenceArr = props.gameBodyResults.value
            let sentenceConcat = []
            for (let i = 0; i < blankArr.length; i++) {
                sentenceConcat.push(<span>{sentenceArr[i]}</span>)
                sentenceConcat.push(<span className='underlinedWords'>{blankArr[i]}</span>)
            }
            if (blankArr.length < sentenceArr.length) {
                sentenceConcat.push(<span>{sentenceArr[sentenceArr.length - 1]}</span>)
            }
            setFullSentence(sentenceConcat)
        }
    }

    console.log(props.gameBodyResults)

    useEffect(() => {
        concatFunction()
    }, [props.gameBodyResults])

    return (
        <div className='resultsMain'>
            {props.gameBodyResults && <h1>{props.gameBodyResults.title}</h1>}
            <div className='resultsBody'>
                <h1>{fullSentence}</h1>
            </div>
        </div>
    )
}

export default Results
