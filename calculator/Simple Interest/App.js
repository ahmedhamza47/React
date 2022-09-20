// import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import { useState } from "react";
function App() {
  const [p, setPrinciple] = useState(0);
  const [t, settime] = useState(0);
  const [r, setRate] = useState(0);
  const [SI, setInterest] = useState("0");
  const calcSI = function() {
    setInterest((p * t * r) / 100);
    document.querySelector(".output").classList.remove("none");
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="tools">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <TextField
        className="text-field "
        id="outlined-basic"
        label="Principle"
        variant="outlined"
        onChange={(event) => setPrinciple(event.target.value)}
      />
      <br />
      <br />
      <TextField
        onChange={(event) => settime(event.target.value)}
        className="text-field "
        id="outlined-basic "
        label="Time"
        variant="outlined"
      />{" "}
      <br /> <br />
      <TextField
        className="text-field "
        id="outlined-basic"
        label="Rate"
        variant="outlined"
        onChange={(event) => setRate(event.target.value)}
      />
      <br /> <br />
      <Button onClick={() => calcSI()} className="btn--SI" variant="contained">
        Calculate Simple Interest
      </Button>{" "}
      <br /> <br />
      <Typography
        className="output none"
        variant="h6"
        gutterBottom
        component="div"
      >
        The Simple Interest is: {SI}
      </Typography>
    </div>
  );
}

export default App;
