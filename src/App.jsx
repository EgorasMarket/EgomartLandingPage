import { useState } from "react";
import "./App.css";
import NewFooter from "./Components/Footer/NewFooter";
import NewHeader from "./Components/Header/NewHeader";
import Home from "./Components/Home/Home";

function App() {
  const currentPage = window.location.pathname;
  const myArr = currentPage.split("/");

  return (
    <div className="App">
      <NewHeader />
      <Home />
      <NewFooter />
    </div>
  );
}

export default App;
