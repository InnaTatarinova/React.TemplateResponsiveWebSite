import { Route, BrowserRouter, Routes} from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import { Products } from "./pages/Products";
import { Services } from "./pages/Services";
import { SignUp } from "./pages/SignUp";
import { Footer } from "./components/Footer/Footer";
import { Castles } from "./components/ProductComponent/Castles";
import { Beaches } from "./components/ProductComponent/Beaches";
import { Mountaines } from "./components/ProductComponent/Mountaines";
import { Cities } from "./components/ProductComponent/Cities";
import { Jungle } from "./components/ProductComponent/Jungle";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route path="/products/castles" element={<Castles />} />
          <Route path="/products/beaches" element={<Beaches/>} />
          <Route path="/products/mountains" element={<Mountaines/>} />
          <Route path="/products/cities" element={<Cities/>} />
          <Route path="/products/jungle" element={<Jungle/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
