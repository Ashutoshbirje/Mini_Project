import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Login from "./Component/Login/Login";
import Signup from "./Component/SignUp/SignUp";
import Profile from "./Component/Profile/Profile";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Help from './Component/Help/help/Help';
import Check from './Component/Services/SymptomChecker/Check';
import Chatbot from './Component/Services/VirtualAssistant/Chatbot';
import Exercise from "./Component/Exersice/Exersice";
import HelpGuide from './Component/Exersice/Help-Guide/HelpGuide';
import GetStarted from "./Component/GetStarted/GetStarted";
import FirstAid from "./Component/Help/First-aid/First-aid";
import ImportantContacts from "./Component/Help/Contact/ImportantContacts";
import Medical from "./Component/Help/Medical/medical";
import GetAppoint from "./Component/GetAppoint/GetAppoint";

function App() {
  const [user, setUser] = useState(null); // Initialize user state

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) setUser(true); // Assume user is logged in if token exists
    console.log(user); // Log user state
  }, [user]);

  const ProtectedRoute = ({ element }) => {
    return user ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/profile" element={<Profile setUser={setUser} />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/get-started/FirstAid" element={<FirstAid />} />
          <Route path="/get-started/Contact" element={<ImportantContacts />} />
          <Route path="/get-started/Medical" element={<Medical />} />
          <Route path="/get-appoint" element={<ProtectedRoute element={<GetAppoint />} />} />
          <Route path="/services/symptom-checker" element={<Check />} />
          <Route path="/services/virtual-assistant" element={<Chatbot />} />
          <Route path="/Exercise" element={<Exercise />} />
          <Route path="/Exercise/Help" element={<HelpGuide />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
