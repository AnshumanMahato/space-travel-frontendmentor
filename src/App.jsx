import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

const background = {
  backgroundImage: `url("/assets/home/background-home-desktop.jpg")`,
  maxWidth: "100vw",
  minHeight: "100vh",
};

function App() {
  return (
    <div style={background}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
