import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar";
import "./index.css";
import Service from "./Pages/Service";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./components/footer";
import TemplateCharacter from "./Pages/Templates/TemplateCharacter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/*" element={<h1>404</h1>}></Route>
        </Routes>
        <div className="flex justify-center">
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
