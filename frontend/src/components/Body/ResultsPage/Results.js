import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import './resultPage.css'


function Results(props) {
  const [fullSentence, setFullSentence] = useState([]);
  const [usersData, setUsersData] = useState([])
  const [usersDataSentence, setUsersDataSentence] = useState([])
  const [userStory, setUserStory] = useState([])
  const [usernameValue, setUsernameValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserStory([{user: usernameValue, template: [props.gameBodyResults]}])
    setUsernameValue('')
    if (usernameValue.length > 3) {
      saveData()
      setErrorMessage('')
    } else {
      setErrorMessage(<h1 className='errorMessage'>Your username is too short. Please try again.</h1>)
    }
  }

  const handleChange = (e) => {
    setUsernameValue(e.target.value)
  }

  const concatFunction = (blanks, sentences) => {
    if (blanks) {
      let sentenceConcat = [];
      for (let i = 0; i < blanks.length; i++) {
        sentenceConcat.push(<span>{sentences[i]}</span>);
        sentenceConcat.push(
          <span className="underlinedWords">{blanks[i]}</span>
        );
      }
      if (blanks.length < sentences.length) {
        sentenceConcat.push(<span>{sentences[sentences.length - 1]}</span>);
      }
      setFullSentence([sentenceConcat]);
    }
  };


  const concatFunctionUsers = (blanks, sentences) => {
    if (blanks) {
      let sentenceConcat = [];
      for (let i = 0; i < blanks.length; i++) {
        sentenceConcat.push(<span>{sentences[i]}</span>);
        sentenceConcat.push(
          <span className="underlinedWords">{blanks[i]}</span>
        );
      }
      if (blanks.length < sentences.length) {
        sentenceConcat.push(<span>{sentences[sentences.length - 1]}</span>);
      }
      setUsersDataSentence([...usersDataSentence, sentenceConcat])
    }
  };

  const createUserSentences = () => {
      for (let i=0; i < usersData.length; i++) {
        let index = usersData[i].template[0]
        let blanks = index.blanks
        let sentences = index.value
        concatFunctionUsers(blanks, sentences)
      } 
  }

  const otherUserFetch = () => {
    fetch('https://mongo-misfits.herokuapp.com/users')
    .then(res => res.json())
    .then(data => setUsersData(data))
  }

  const saveData = () => {
    fetch("https://mongo-misfits.herokuapp.com/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userStory)
    })
  };

  useEffect(() => {
    otherUserFetch()
  }, [])

  useEffect(() => {
    usersData && createUserSentences()
  }, [usersData])

  const otherUsersArr = usersData.map((user, index) => {
    return(
      <div className='otherUsers'>
        <h1>Username: {user.user}</h1>
        <h2>Story: {user.template[0].title}</h2>
        <p>{usersDataSentence[index]}</p>
      </div>

    )
  })

  useEffect(() => {
    concatFunction(props.gameBodyResults.blanks, props.gameBodyResults.value);
  }, [props.gameBodyResults]);

  return (
    <div className="resultsMain">
      <div className="resultsBody">
        {props.gameBodyResults && <h1 className='title'>{props.gameBodyResults.title}</h1>}
        {fullSentence}
      </div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={usernameValue}placeholder='Enter a name to save your story'/>
        <button type='submit'>Save Your Story</button>
      </form>
      {errorMessage}
      <div className='resultsBtnArr'>
        <Link to='/game-page' > <button>Play Again</button></Link>
        <Link to='/thank-you-page' > <button>Done</button></Link>
      </div>
      <div className='resultsDivider'>
        <h1>See other stories</h1>
      </div>
      <div className='otherUsersArrMain'>
        {otherUsersArr}
      </div>
    </div>
  );
}

export default Results;
