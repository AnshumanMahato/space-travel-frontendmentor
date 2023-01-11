import React from "react";
import Header from "./components/Header";

const background = {
  backgroundImage: `url("/assets/home/background-home-desktop.jpg")`,
  maxWidth: "100vw",
  minHeight: "100vh",
};

function App() {
  return (
    <div style={background}>
      <Header />
    </div>
  );
}

export default App;
