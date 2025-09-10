import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomeContents from "./pages/home/HomeContents";
import Products from "./pages/products/ProductsPage";
import AboutUs from "./pages/about/AboutContents";
import PuttuHouse from "./pages/PuttuHouse/PuttuHouse";
import Resort from "./pages/resort/Resort";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomeContents />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/puttu-house" element={<PuttuHouse/>} />
              <Route path="/avees-resort" element={<Resort/>} />
              
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
