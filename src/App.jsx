import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar";
import "./index.css";
import Service from "./Pages/Service";
import About from "./Pages/About";
import Login from "./Pages/Login";

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
          <Route path="/*" element={<h1>404</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
