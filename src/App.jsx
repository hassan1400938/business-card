import React from "react";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="center">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}
