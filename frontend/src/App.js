import "./App.css";
import dummyData from "./dummyData";
import GameBody from "./components/Body/GameBody";
import Header from "./components/Header/Header";
import { Route, Routes, Link } from "react-router-dom";
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
  
  const handleDelete = (template) => {
    fetch(`https://mongo-misfits.herokuapp.com/templates/${template._id}`, { method: 'DELETE'})
    .then(()=>{
      fetch("https://mongo-misfits.herokuapp.com/templates")
        .then((res) => res.json())
        .then((data)=>{
          setAddTemplate(data)
        })
    })
  };

  useEffect(() => {
    document.title = "Misfit Madlibs"
  }, [])

 
  const handleEdit = (event) => {
    event.target.parentElement.querySelector('.dropdown-content').style.display = 'block'
  };

  return (
    <div className="App">
      <Link to='/'>
        <div className="banner"></div>
      </Link>
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
              setAddTemplate={setAddTemplate}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          }
        />
      </Routes>
    </div>
  );
}
