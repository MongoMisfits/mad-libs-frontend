import React from "react";
import { Link } from "react-router-dom";
import './instruction.css'

export default function Instructions() {
  return (
    <div className='instructionsMain'>
      <h1>Instructions</h1>
      <ol>
        <li>Fill in the word given the type.</li>
        <li>Submit your words and read your story.</li>
        <li>Save your story or make your own through a template.</li>
      </ol>
        <Link to='/game-page' ><button>Next</button></Link>
    </div>
  );
}
