import React from "react";
import { useState } from "react";
const App = function () {
  const [dice, setDiceNum] = useState(6);
  //   const randInt = (min, max) =>
  //     Math.trunc(Math.random() * (max - min) + 1) + min;
  const randInt = function () {
    const num = Math.trunc(Math.random() * 6) + 1;
    setDiceNum(num);
  };
  return (
    <div>
      <img src={require(`./assets/${dice}.png`)}></img>
      <br />
      <button onClick={() => randInt()}> ROLL</button>
    </div>
  );
};

export default App;
