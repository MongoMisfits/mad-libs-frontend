import React, { useEffect, useState } from "react";

function Results(props) {
  const [fullSentence, setFullSentence] = useState([]);
  const [otherUserData, setOtherUserData] = useState([]);
  const [matchingUsers, setMatchingUsers] = useState([])

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
      setFullSentence([...fullSentence, sentenceConcat]);
    }
  };

  const fetchData = () => {
    fetch("https://mongo-misfits.herokuapp.com/users")
      .then((res) => res.json())
      .then((users) => setOtherUserData(users));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    concatFunction(props.gameBodyResults.blanks, props.gameBodyResults.value);
  }, [props.gameBodyResults]);


  console.log(matchingUsers)

  return (
    <div className="resultsMain">
      {props.gameBodyResults && <h1>{props.gameBodyResults.title}</h1>}
      <div className="resultsBody">
        <h1>{fullSentence}</h1>
      </div>
    </div>
  );
}

export default Results;
