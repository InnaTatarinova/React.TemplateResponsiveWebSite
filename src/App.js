import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import { Products } from "./pages/Products";
import { Services } from "./pages/Services";
import { SignUp } from "./pages/SignUp";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path ="/products" element={<Products/>} />
          <Route path ="/services" element={<Services/>} />
          <Route path ="/sign-up" element={<SignUp/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
