import React from "react";
import Navbar from "./Navbar";
import Feed from "./Feed";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Feed />
      </div>
    </div>
  );
}

export default App;