import { useState } from "react";
import Navbar from "../widgets/Navbar/ui/Navbar";
import ThemeToggle from "./styles/theme/Changetheme";
import { Web3 } from "web3";
import { Button } from "./ui/button";
import Modal from "../shared/Modal/ui/Modal";


function App() {

const [open,setOpen] = useState(false)

  return (
    <div className="App">
      {/* <Modal open={open} setOpen={setOpen}/> */}
      <Navbar />
    </div>
  );
}

export default App;
