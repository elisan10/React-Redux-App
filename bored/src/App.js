import React from "react";
import Bored from "./components/Bored";

function App() {
  return (
    <main className="bg-blue-900 h-screen">
      <div className="max-w-screen-lg mx-auto bg-indigo-300 rounded-lg text-center">
        <h1 className="text-5xl lowercase">Are you bored?...</h1>
        <div className="pb-4">
          <Bored />
        </div>
      </div>
    </main>
  );
}

export default App;
