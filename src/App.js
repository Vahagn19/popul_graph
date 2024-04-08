import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/ui/Navbar";
import ThemeToggle from "./theme/Changetheme";
import { Web3 } from "web3";
import { Button } from "./components/ui/button";

function App() {
 

  return (
    <div className="App">

      <Navbar />
    </div>
  );
}

export default App;
