// src/App.jsx
import React from "react";
import { BranchProvider } from "./context/BranchContext";
import Home from "./pages/Home";

function App() {
  return (
    <BranchProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Thaparian | GPA Tool
        </h1>
        <Home />
      </div>
    </BranchProvider>
  );
}

export default App;
