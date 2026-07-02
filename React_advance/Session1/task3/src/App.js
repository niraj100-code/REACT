import React from "react";
import Feed from "./Feed";
import UserContext from "./UserContext";

function App() {
  const user = {
    name: "Niraj Patel",
    email: "niraj@gmail.com",
  };

  return (
    <UserContext.Provider value={user}>
      <div className="container mt-4">
        <h2>React Context API Example</h2>
        <Feed />
      </div>
    </UserContext.Provider>
  );
}

export default App;