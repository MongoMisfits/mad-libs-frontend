import "./App.css";
import dummyData from "./dummyData";
import GameBody from "./components/Body/GameBody";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import ResultsBody from "./components/Body/ResultsBody";
import Instructions from "./components/Body/InstructionPage/Instructions";
import ThankYou from "./components/Body/ThankYouPage/ThankYou";
import TemplateCreation from "./components/Body/TemplateCreation/TemplateCreation";
import UsersTemplates from "./components/Body/TemplateCreation/UsersTemplates";
import { useEffect, useState } from "react";

export default function App() {
  const [gameBodyResults, setGameBodyResults] = useState([]);

  const data = dummyData;
  const [addTemplate, setAddTemplate] = useState();
  const [templates, setTemplates] = useState([]);
  

  if (!templates.includes(addTemplate)) {
    setTemplates([...templates, addTemplate]);
  }

  const handleDelete = (index) => {
    console.log("Delete clicked");
    fetch(`http://localhost:5000/templates/${index._id}`, { method: 'DELETE'})
    .then(()=>{
      fetch("http://localhost:5000/templates")
        .then((res) => res.json())
        .then((data)=>{
          setAddTemplate(data)
        })
    })
  };

  const handleEdit = () => {
    console.log("Edit Clicked");
    
  };

  return (
    <div className="App">
      <div className="banner"></div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Instructions />} />
        <Route
          path="/game-page"
          exact
          element={
            <GameBody data={data} setGameBodyResults={setGameBodyResults} />
          }
        />
        <Route
          path="/result-page"
          exact
          element={<ResultsBody gameBodyResults={gameBodyResults} />}
        />
        <Route path="/thank-you-page" exact element={<ThankYou />} />
        <Route
          path="/create-template"
          exact
          element={<TemplateCreation setAddTemplate={setAddTemplate} />}
        />
        <Route
          path="/user-templates"
          exact
          element={
            <UsersTemplates
              addTemplate={addTemplate}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          }
        />
      </Routes>
    </div>
  );
}
