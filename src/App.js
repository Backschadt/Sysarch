import './App.css';
import Navbar from "./Components/Navbar";
import {Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "C:/Users/74539-20201984/backschadt_react/src/Pages/login";
import Registration from "./Pages/Registration";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element ={<Home />} />
        <Route path="/login" element ={<Login />} />
        <Route path="/Registration" element ={<Registration />} />
      </Routes>
      </>
  );
}

export default App;
