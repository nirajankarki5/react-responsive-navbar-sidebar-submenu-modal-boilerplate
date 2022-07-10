import { useContext } from "react";
import { AppContext } from "./context";
import Modal from "./Modal";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App() {
  const data = useContext(AppContext);

  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Modal />

      <h1 style={{ textAlign: "center", padding: "3rem" }}>THIS IS THE BODY</h1>
      <button
        className="show-modal-btn"
        onClick={() => data.setIsModalOpen(true)}
      >
        Show Modal
      </button>
    </div>
  );
}

export default App;
