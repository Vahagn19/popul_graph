import Modal from "shared/Modal/ui/Modal";
import ErrorProvider from "shared/Error/ui/ErrorProvider";
import DashBoard from "pages";



function App() {
 

  return (
    <ErrorProvider>
      <div className="App">
        <Modal/>
        <DashBoard />
      </div>
    </ErrorProvider>
  );
}

export default App;
