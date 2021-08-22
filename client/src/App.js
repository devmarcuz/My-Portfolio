import React, { useEffect } from "react";
import Header from "./components/Header";
import MainHeader from "./components/MainHeader";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Introduction from "./components/Introduction";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <MainHeader />
        <Introduction />
        <Info />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
