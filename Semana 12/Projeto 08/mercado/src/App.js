import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import BuyProducts from "./routes/buyProducts";
import Products from "./routes/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<BuyProducts />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
