import react from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const add = function () {
    setResult(Number(num1) + Number(num2));
    document.querySelector(".result").classList.remove("none");
  };
  const sub = function () {
    setResult(num1 - num2);
    document.querySelector(".result").classList.remove("none");
  };
  const mul = function () {
    setResult(num1 * num2);
    document.querySelector(".result").classList.remove("none");
  };
  const clearResult = function () {
    setNum1("");
    setNum2("");
    document.querySelector(".result").classList.add("none");
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Calculator
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="input-fields">
        <input
          type="text"
          class="inputText"
          placeholder="Enter num1"
          value={num1}
          onChange={(event) => setNum1(event.target.value)}
        ></input>
        <br />
        <input
          type="text"
          class="inputText"
          placeholder="Enter num2"
          value={num2}
          onChange={(event) => setNum2(event.target.value)}
        ></input>
        <div className="btn">
          <button onClick={add}>ADD</button>
          <button onClick={sub}>SUB</button>
          <button onClick={mul}>MUL</button>
          <button onClick={clearResult}>CLR</button>
        </div>

        <h1 className="result none">Result:{result}</h1>
      </div>
    </div>
  );
}

export default App;
