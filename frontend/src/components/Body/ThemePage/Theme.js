import React, { useEffect, useState } from "react";
import BacktotheFuture from "../../../themes/BacktotheFuture.jpeg";
import Batman from "../../../themes/Batman.jpeg";
import DragonBall from "../../../themes/DragonBall.jpeg";
import FullmetalAlchemist from "../../../themes/FullmetalAlchemist.jpeg";
import Ghostbusters from "../../../themes/Ghostbusters.jpeg";
import Godzilla from "../../../themes/Godzilla.jpeg";
import JurassicPark from "../../../themes/JurassicPark.jpeg";
import LordoftheRings from "../../../themes/Lordoftherings.jpeg";
import Marvel from "../../../themes/Marvel.jpeg";
import Matrix from "../../../themes/Matrix.jpeg";
import RickandMorty from "../../../themes/RickandMorty.jpeg";
import SpiderMan from "../../../themes/SpiderMan.jpeg";
import StarWars from "../../../themes/StarWars.jpeg";
import Superman from "../../../themes/Superman.jpeg";
import Supernatural from "../../../themes/Supernatural.jpeg";
import XMen from "../../../themes/XMen.jpeg";

function Theme(props) {
    const [data, setData] = useState([]);
    console.log("data", data)

  const themeImages = [
    "",
    BacktotheFuture,
    Batman,
    DragonBall,
    FullmetalAlchemist,
    Ghostbusters,
    Godzilla,
    JurassicPark,
    LordoftheRings,
    Marvel,
    Matrix,
    RickandMorty,
    SpiderMan,
    StarWars,
    Superman,
    Supernatural,
    XMen,
  ];

  const fetchData = () => {
    fetch("http://localhost:5000/templates")
      .then((res) => res.json())
      .then((title) => setData(title));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Back to the Future

  const backToTheFuture = (title) => {

  if 
    (title === 'Back to the Future' || title.includes(BacktotheFuture)){
        this.setState({
            backgroundStyle: {
                backgroundImage: themeImages[1]
            }
        })
  };

  return (
  <div>Themes Section</div>)
}
}

export default Theme;
