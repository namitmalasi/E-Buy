import "./App.css";
import Homepage from "./components/Home/Homepage";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Homepage />
      </main>
    </div>
  );
};

export default App;
