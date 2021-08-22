import React, { useEffect } from "react";
import Header from "./components/Header";
import MainHeader from "./components/MainHeader";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Introduction from "./components/Introduction";
import Info from "./components/Info";
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-up";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <ScrollToTop showUnder={160}>
          <span>UP</span>
        </ScrollToTop>
        <MainHeader />
        <Introduction />
        <Info />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
