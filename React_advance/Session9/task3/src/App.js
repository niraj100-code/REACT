import React from "react";
import app from "./firebase";

function App() {
  console.log("Firebase App:", app);

  return (
    <div className="container mt-5">
      <h2>🔥 Firebase Connected Successfully</h2>
      <p>Open the browser console (F12) to see the Firebase app object.</p>
    </div>
  );
}

export default App;