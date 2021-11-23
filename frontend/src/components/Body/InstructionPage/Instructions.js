import React from "react";
import { Link } from "react-router-dom";

export default function Instructions() {
  return (
    <div>
      <h2>Instruction Page</h2>
      <ol>
        <li>Select a theme</li>
        <li>Fill in the word given the typ</li>
        <li>View your madlib</li>
        <li>Submit your own stories</li>
      </ol>
        <Link to='/game-page' ><button>Next</button></Link>
    </div>
  );
}
