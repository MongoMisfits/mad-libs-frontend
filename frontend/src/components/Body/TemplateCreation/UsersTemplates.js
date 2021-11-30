import "./UsersTemplates.css";
import { useState } from "react";
const UsersTemplates = (props) => {
  const [temp, setTemp] = useState();
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

  const handleClick = (temp) => {
    setTemp(temp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/templates/${temp._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    }).then(() => {
      fetch("http://localhost:5000/templates")
        .then((res) => res.json())
        .then((data) => {
          props.setAddTemplate(data);
          setUserInput({
            title: "",
            blanks: [],
            value: [],
          });
          event.target.parentElement.style.display = 'none'
        });
    });
  };

  if(props.addTemplate && props.addTemplate.length >= 16){
      props.addTemplate.splice(0,16)
  }
  const templatesArr =
    props.addTemplate &&
    props.addTemplate.map((template, index) => {
      if (!template) {
        return <p>User's Templates</p>;
      } else {
        return (
          <ul className="dropdown" key={index}>
            <li>
              <span>Title:</span> {template.title}
            </li>
            <li>
              <span>Blanks:</span> {template.blanks}
            </li>
            <li>
              <span>Value:</span> {template.value}
            </li>
            <button
              type="submit"
              onClick={(event) => {
                props.handleEdit(event);
                handleClick(template);
              }}
              className="ed-button"
            >
              Edit
            </button>
            <button
              type="submit"
              onClick={() => {
                props.handleDelete(template);
              }}
              className="ed-button"
            >
              Delete
            </button>
            <div className="dropdown-content">
              <form id="updatetempform" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={userInput.title}
                  onChange={handleChange}
                />
                <textarea
                  name="blanks"
                  form="updatetempform"
                  value={userInput.blanks}
                  onChange={handleChange}
                  placeholder="Blanks"
                />
                <textarea
                  name="value"
                  form="updatetempform"
                  value={userInput.value}
                  onChange={handleChange}
                  placeholder="Value"
                />
                <button type="submit">Update Template</button>
              </form>
            </div>
          </ul>
        );
      }
    });

  return <div className="users-templates">{templatesArr}</div>;
};

export default UsersTemplates;
