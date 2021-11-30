import { useState } from "react";
import './TemplateCreation.css'
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
      setUserInput({ ...userInput, [name]: value.split(",") });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://mongo-misfits.herokuapp.com/templates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    }).then(() => {
      fetch("https://mongo-misfits.herokuapp.com/templates")
        .then((res) => res.json())
        .then((data) => {
          props.setAddTemplate(data);
          setUserInput({
            title: "",
            blanks: [],
            value: [],
          });
        });
    });
  };

  return (
    <div>
      <h1>Create Your Own Template</h1>
      <div className="example-template">
        <h3>Example Template</h3>
        <p><span>Title:</span> How To Cross a Piranha-Infested River</p>
        <p><span>Blanks:</span> forein country, adverb, adjective, animal, verb ending in 'ing'</p>
        <p><span>Value:</span> If you are traveling in , and find yourself having to cross a piranha-filled river, here's how to do it, 
         Piranhas are more ,  during the day, so cross the river at night. Avoid areas with netted ,  traps--piranhas may be 
        
        </p>
      </div>
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
        <button type="submit">Add Template</button>
      </form>
    </div>
  );
};

export default TemplateCreation;
