import "./App.css";
import dummyData from "./dummyData";
import GameBody from "./components/Body/GameBody";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import ResultsBody from "./components/Body/ResultsBody";
import Instructions from "./components/Body/InstructionPage/Instructions";
import ThankYou from "./components/Body/ThankYouPage/ThankYou";
import TemplateCreation from "./components/Body/TemplateCreation/TemplateCreation"

function App() {
  const data = dummyData;

  console.log('dummyData', dummyData);

  return (
    <div className="App">
      <Header />
      {/* <Route path='/'exact element={<Header />} /> */}

      <Routes>
        <Route path="/" exact element={<Instructions />} />
        <Route path="/game-page" exact element={<GameBody data={data} />} />
        <Route path="/result-page" exact element={<ResultsBody />} />
        <Route path="/thank-you-page" exact element={<ThankYou />} />
        <Route path="/create-template" exact element={<TemplateCreation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
