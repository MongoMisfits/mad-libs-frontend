import { useState } from "react";

const TemplateCreation = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    blanks: [],
    value: [],
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    if (name === "title") {
      setUserInput({ ...userInput, [name]: value });
    } else {
      setUserInput({ ...userInput, [name]: value.split(',') });
    }
  };
  console.log(userInput);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/templates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    }).then(() => {
      setUserInput({
        title: "",
        blanks: [],
        value: [],
      });
    });
  };

  return (
    <div>
      <h1>Welcome To Create Your Own Template Page</h1>
      <form id="tempform" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={userInput.title}
          onChange={handleChange}
        />
        <textarea
          name="blanks"
          form="tempform"
          value={userInput.blanks}
          onChange={handleChange}
          placeholder="Blanks"
        />
        <textarea
          name="value"
          form="tempform"
          value={userInput.value}
          onChange={handleChange}
          placeholder="Value"
        />
        <button type="submit" onClick={props.addTemplateOnCLick(userInput)}>Add Template</button>
      </form>
    </div>
  );
};

export default TemplateCreation;
