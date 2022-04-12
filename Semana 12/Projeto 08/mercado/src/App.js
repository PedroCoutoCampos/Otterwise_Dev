import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import BuyProducts from "./routers/BuyProducts/BuyProducts";
import Products from "./routers/Products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<BuyProducts />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
