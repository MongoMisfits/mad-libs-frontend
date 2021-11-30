import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './resultPage.css'


function Results(props) {
  const [fullSentence, setFullSentence] = useState([]);
  const [usersData, setUsersData] = useState([])
  const [usersDataSentence, setUsersDataSentence] = useState([])

  const concatFunction = (blanks, sentences) => {
    if (blanks) {
      let blankArr = blanks;
      let sentenceArr = sentences;
      let sentenceConcat = [];
      for (let i = 0; i < blankArr.length; i++) {
        sentenceConcat.push(<span>{sentenceArr[i]}</span>);
        sentenceConcat.push(
          <span className="underlinedWords">{blankArr[i]}</span>
        );
      }
      if (blankArr.length < sentenceArr.length) {
        sentenceConcat.push(<span>{sentenceArr[sentenceArr.length - 1]}</span>);
      }
      if (fullSentence.length >= 1) {
        setUsersDataSentence([...usersDataSentence, sentenceConcat])
      } else {
        setFullSentence([...fullSentence, sentenceConcat]);
      }
    }
  };

  // const saveData = () => {
  //   fetch("https://mongo-misfits.herokuapp.com/users", {
  //     method: 'POST',

  //   })
  //     .then((res) => res.json())
  // };

  const otherUserFetch = () => {
    fetch('https://mongo-misfits.herokuapp.com/users')
    .then(res => res.json())
    .then(data => setUsersData(data))
  }

  useEffect(() => {
    otherUserFetch()
  }, [])

  useEffect(() => {
    if (usersData) {
      for (let i=0; i < usersData.length; i++) {
        concatFunction(usersData[i].template[0].blanks, usersData[i].template[0].value)
      } 
    }
  }, [usersData])

  console.log(usersData)

  useEffect(() => {
    concatFunction(props.gameBodyResults.blanks, props.gameBodyResults.value);
  }, [props.gameBodyResults]);

  return (
    <div className="resultsMain">
      <div className="resultsBody">
        {props.gameBodyResults && <h1>{props.gameBodyResults.title}</h1>}
        {fullSentence}
      </div>
      <div className='resultsBtnArr'>
        <Link to='/game-page' > <button>Play Again</button></Link>
        <Link to='/thank-you-page' > <button>Done</button></Link>
        <button>Save Your Story</button>
      </div>
    </div>
  );
}

export default Results;
