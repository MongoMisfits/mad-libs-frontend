import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import './resultPage.css'


function Results(props) {
  const [fullSentence, setFullSentence] = useState([]);
  const [usersData, setUsersData] = useState([])
  const [usersDataSentence, setUsersDataSentence] = useState([])
  const [userStory, setUserStory] = useState([])
  const [usernameValue, setUsernameValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserStory([{user: usernameValue, template: [props.gameBodyResults]}])
    setUsernameValue('')
  }

  const handleChange = (e) => {
    setUsernameValue(e.target.value)
  }

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

  const saveData = () => {
    fetch("https://mongo-misfits.herokuapp.com/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userStory)
    })
      .then((res) => res.json())
  };

  const otherUserFetch = () => {
    fetch('https://mongo-misfits.herokuapp.com/users')
    .then(res => res.json())
    .then(data => setUsersData(data))
  }

  useEffect(() => {
    otherUserFetch()
  }, [])

  useEffect(() => {
    if (userStory) {
      saveData()
    }
  }, [userStory])

  useEffect(() => {
    if (usersData[0] && usersData[0].template && usersData[0].template[0]) {
      for (let i=0; i < usersData.length; i++) {
        concatFunction(usersData[i].template[0].blanks, usersData[i].template[0].value)
      } 
    }
  }, [usersData])

  console.log(props.gameBodyResults)

  useEffect(() => {
    concatFunction(props.gameBodyResults.blanks, props.gameBodyResults.value);
  }, [props.gameBodyResults]);

  return (
    <div className="resultsMain">
      <div className="resultsBody">
        {props.gameBodyResults && <h1>{props.gameBodyResults.title}</h1>}
        {fullSentence}
      </div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={usernameValue}placeholder='Enter a name to save your story'/>
        <button type='submit'>Save Your Story</button>
      </form>
      <div className='resultsBtnArr'>
        <Link to='/game-page' > <button>Play Again</button></Link>
        <Link to='/thank-you-page' > <button>Done</button></Link>
      </div>
    </div>
  );
}

export default Results;
