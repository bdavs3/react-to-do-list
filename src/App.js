import React from "react";
import "./reset.css";
import "./App.scss";

import Header from "./components/header";
import List from "./components/list";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default App;
