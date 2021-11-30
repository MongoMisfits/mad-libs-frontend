import Results from "./ResultsPage/Results";
import React, { useEffect, useState } from "react";
import BacktotheFuture from "../../image/BacktotheFuture.jpeg";
import Batman from "../../image/Batman.jpeg";
import DragonBall from "../../image/DragonBall.jpeg";
import FullmetalAlchemist from "../../image/FullmetalAlchemist.jpeg";
import Ghostbusters from "../../image/Ghostbusters.jpeg";
import Godzilla from "../../image/Godzilla.jpeg";
import JurassicPark from "../../image/JurassicPark.jpeg";
import LordoftheRings from "../../image/Lordoftherings.jpeg";
import Marvel from "../../image/Marvel.jpeg";
import Matrix from "../../image/Matrix.jpeg";
import RickandMorty from "../../image/RickandMorty.jpeg";
import SpiderMan from "../../image/SpiderMan.jpeg";
import StarWars from "../../image/StarWars.jpeg";
import Superman from "../../image/Superman.jpeg";
import Supernatural from "../../image/Supernatural.jpeg";
import XMen from "../../image/XMen.jpeg";
import "./Body.css";

function ResultsBody(props) {
  if (document.querySelector(".result-page")) {
    if (props.gameBodyResults.title === "Star Wars") {
      const imageURL = StarWars;
      document.querySelector(
        ".result-page"
      ).style.backgroundImage = `url('${imageURL}')`;
    }
    if (props.gameBodyResults.title === "Dragon Ball") {
      const imageURL = DragonBall;
      document.querySelector(
        ".result-page"
      ).style.backgroundImage = `url('${imageURL}')`;
    }
    if (props.gameBodyResults.title === "Marvel") {
      const imageURL = Marvel;
      document.querySelector(
        ".result-page"
      ).style.backgroundImage = `url('${imageURL}')`;
    }
    if (props.gameBodyResults.title === "Rick and Morty") {
      const imageURL = RickandMorty;
      document.querySelector(
        ".result-page"
      ).style.backgroundImage = `url('${imageURL}')`;
    }
    if (props.gameBodyResults.title === "The Lord of the Rings") {
      const imageURL = LordoftheRings;
      document.querySelector(
        ".result-page"
      ).style.backgroundImage = `url('${imageURL}')`;
    }
    if (props.gameBodyResults.title === "Superman") {
      const imageURL = Superman;
      document.querySelector(
        ".result-page"
      ).style.backgroundImage = `url('${imageURL}')`;
    }
    if (props.gameBodyResults.title === "Batman") {
      const imageURL = Batman;
      document.querySelector(
        ".result-page"
      ).style.backgroundImage = `url('${imageURL}')`;
    }
    if (props.gameBodyResults.title === "X-Men") {
      const imageURL = XMen;
      document.querySelector(
        ".result-page"
      ).style.backgroundImage = `url('${imageURL}')`;
    }
    if (props.gameBodyResults.title === "Spider-Man") {
      const imageURL = SpiderMan;
      document.querySelector(
        ".result-page"
      ).style.backgroundImage = `url('${imageURL}')`;
    }
    if (props.gameBodyResults.title === "Godzilla") {
      const imageURL = Godzilla;
      document.querySelector(
        ".result-page"
      ).style.backgroundImage = `url('${imageURL}')`;
    }
    if (props.gameBodyResults.title === "The Matrix") {
      const imageURL = Matrix;
      document.querySelector(
        ".result-page"
      ).style.backgroundImage = `url('${imageURL}')`;
    }
    if (props.gameBodyResults.title === "Supernatural") {
      const imageURL = Supernatural;
      document.querySelector(
        ".result-page"
      ).style.backgroundImage = `url('${imageURL}')`;
    }
    if (props.gameBodyResults.title === "Jurassic Park") {
      const imageURL = JurassicPark;
      document.querySelector(
        ".result-page"
      ).style.backgroundImage = `url('${imageURL}')`;
    }
    if (props.gameBodyResults.title === "Back to the Future") {
      const imageURL = BacktotheFuture;
      document.querySelector(
        ".result-page"
      ).style.backgroundImage = `url('${imageURL}')`;
    }
    if (props.gameBodyResults.title === "Fullmetal Alchemist") {
      const imageURL = FullmetalAlchemist;
      document.querySelector(
        ".result-page"
      ).style.backgroundImage = `url('${imageURL}')`;
    }
    if (props.gameBodyResults.title === "Ghostbusters") {
      const imageURL = Ghostbusters;
      document.querySelector(
        ".result-page"
      ).style.backgroundImage = `url('${imageURL}')`;
    }
  }

  return (
    <div className="result-page">
      <Results gameBodyResults={props.gameBodyResults} />
    </div>
  );
}
export default ResultsBody;
