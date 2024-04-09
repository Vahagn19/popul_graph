
import Navbar from "../widgets/Navbar/ui/Navbar";
import Modal from "../shared/Modal/ui/Modal";
import ErrorProvider from "../shared/Error/ui/ErrorProvider";



function App() {
 

  return (
    <ErrorProvider>
      <div className="App">
        <Modal/>
        <Navbar />
      </div>
    </ErrorProvider>
  );
}

export default App;
