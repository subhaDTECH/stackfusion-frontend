import logo from './logo.svg';
import './App.css';
import UserPage from "./UserPage.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js"
import Navbar from "./components/Navbar"

function App() {
  return (


    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/user-form" element={<UserPage />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
