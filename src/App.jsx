import "./App.css";
import Homepage from "./components/Home/Homepage";
import Navbar from "./components/Navbar/Navbar";
import ProductsPage from "./components/Products/ProductsPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <Homepage /> */}
        <ProductsPage />
      </main>
    </div>
  );
};

export default App;
