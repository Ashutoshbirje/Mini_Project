import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navigation/Navbar';
import Home from './Component/Home/Home';
import Check from './Component/Services/SymptomChecker/Check';
import Chatbot from './Component/Services/SymptomChecker/Check';
import Call from './Component/Services/SymptomChecker/Check';
import GetStarted from "./Component/GetStarted/GetStarted";
import GetAppoint from "./Component/GetStarted/GetStarted"; 
import Exercise from "./Component/Exersice/Exersice"; 
import Login from './Component/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login  />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/get-appoint" element={<GetAppoint />} />
          <Route path="/services/symptom-checker" element={<Check />} />
          <Route path="/services/virtual-assistant" element={<Chatbot/>} />
          <Route path="/services/personalized-advice" element={<Call />} /> 
          <Route path="/Exercise" element={<Exercise />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
