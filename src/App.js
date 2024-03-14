import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [myStyle, setMyStyle] = useState({
    backgroundColor: "#1E1E1E",
    color: "white",
  });

  const black = () => {
    if (
      myStyle.backgroundColor === "white" ||
      myStyle.backgroundColor === "#e0f0e3"
    ) {
      setMyStyle({
        backgroundColor: "#1E1E1E",
        color: "white",
      });
      document.title = "Wordcount-DarkMode";
    }
  };

  const green = () => {
    if (
      myStyle.backgroundColor === "white" ||
      myStyle.backgroundColor === "#1E1E1E"
    ) {
      setMyStyle({
        backgroundColor: "#e0f0e3",
        color: "#1E1E1E",
      });
    }
  };

  const white = () => {
    if (
      myStyle.backgroundColor === "#e0f0e3" ||
      myStyle.backgroundColor === "#1E1E1E"
    ) {
      setMyStyle({
        backgroundColor: "white",
        color: "#1E1E1E",
      });
    }
  };

  return (
    <Router>
      <div className="h-screen" style={myStyle}>
        <Navbar title="YOYO" green={green} black={black} white={white} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm />} />
        </Routes>
        {/* <div className="container my-5">
          <TextForm />
        </div> */}
      </div>
    </Router>
  );
}

export default App;
