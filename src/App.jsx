import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  const [page, setPage] = useState("home");

  const background = {
    backgroundImage: `url("/assets/${page}/background-${page}-desktop.jpg")`,
  };

  const navigator = (link) => setPage(link);
  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "destination":
        return <Destination />;
      case "crew":
        return <Crew />;
      case "technology":
        return <Technology />;
      default:
    }
  };

  return (
    <div className={`background background-${page}`}>
      <Header navigator={navigator} />
      {renderPage()}
    </div>
  );
}

export default App;
