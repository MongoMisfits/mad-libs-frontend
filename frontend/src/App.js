import "./App.css";
import dummyData from "./dummyData";
import GameBody from "./components/Body/GameBody";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import ResultsBody from "./components/Body/ResultsBody";
import Instructions from "./components/Body/InstructionPage/Instructions";
import ThankYou from "./components/Body/ThankYouPage/ThankYou";
import TemplateCreation from "./components/Body/TemplateCreation/TemplateCreation";
import UsersTemplates from "./components/Body/TemplateCreation/UsersTemplates";
import { useState } from "react";

export default function App() {
  const [gameBodyResults, setGameBodyResults] = useState([]);

  const data = dummyData;
  const [addTemplate, setAddTemplate] = useState();
  const [templates, setTemplates] = useState([]);
  const [deleteTemplate, setDeleteTemplate] = useState()

  if (!templates.includes(addTemplate)) {
    setTemplates([...templates, addTemplate]);
  }

  const handleDelete = (event) => {
    console.log("Delete Clicked");
    setDeleteTemplate(
      [...templates].filter((template) => {
        return template === addTemplate;
      })
    )
    event.preventDefault();
    fetch("http://localhost:5000/templates", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deleteTemplate),
    }).then(() => {
      console.log(deleteTemplate)
  })};

  console.log("Templates", templates);
  return (
    <div className="App">
      <div className="banner"></div>
      <Header />
      {/* <Route path='/'exact element={<Header />} /> */}

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
              templates={templates}
              setTemplates={setTemplates}
              addTemplate={addTemplate}
              handleDelete={handleDelete}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
