import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />

      <h1 style={{ textAlign: "center", padding: "30rem" }}>
        THIS IS THE BODY
      </h1>
    </div>
  );
}

export default App;
