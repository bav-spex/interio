import logo from "./logo.svg";
import "./App.css";
import "./SCSS/_base.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Category from "./Pages/Category";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./App.css"
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/products" element={<Products/>}></Route>
        <Route exact path="/category" element={<Category />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
