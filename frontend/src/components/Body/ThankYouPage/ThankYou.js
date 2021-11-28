import { useState } from "react";
import "./ThankYou.css";

const ThankYou = () => {
  const [counter, setCounter] = useState(0);
  const [userInput, setUserInput] = useState({
    title: "",
    blanks: [],
    value: [],
  });

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  console.log('counter', counter)
  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setUserInput({ ...userInput, [name]: value });
    // if (name === "title") {
    //   setUserInput({ ...userInput, [name]: value });
    // } else {
    //   setUserInput({ ...userInput, [name]: value.split(',') });
    // }
  };

  console.log("userInputs", userInput);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked Submit");
  };
  return (
    <div className="template-inputs">
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleChange}
        value={userInput.title}
      />
      <button onClick={handleClick}> Add more lines +</button>
      <form onSubmit={handleSubmit}>
        <div className="single-template-input">
          <input
            type="text"
            placeholder="Sentence"
            name="value"
            onChange={handleChange}
            value={userInput.value}
          />
          <input
            type="text"
            placeholder="Word"
            name="blanks"
            onChange={handleChange}
            value={userInput.blanks}
          />
        </div>

        {Array.from(Array(counter)).map((c, index) => {
          return (
            <div key={index} className="single-template-input">
              <input
                type="text"
                placeholder="Sentence"
                name="value"
                onChange={handleChange}
                value={userInput.value}
              />
              <input
                type="text"
                placeholder="Word"
                name="blanks"
                onChange={handleChange}
                value={userInput.blanks}
              />
            </div>
          );
        })}
        <button type="submit">Add Template</button>
      </form>
    </div>
  );
};

export default ThankYou;
