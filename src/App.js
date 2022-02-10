import React from "react";
import PortfolioProvider from "./context";
import Header from "./components/Header";
import Main from "./components/Main";
import "./Global.css";

function App() {
  return (
    <div className="App">
      <PortfolioProvider>
        <Header />
        <Main />
      </PortfolioProvider>
    </div>
  );
}

export default App;
