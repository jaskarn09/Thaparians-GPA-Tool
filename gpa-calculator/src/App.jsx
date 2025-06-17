// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SGPA from "./pages/SGPA";
import CGPA from "./pages/CGPA";
import GPAConverter from "./pages/GPAConverter";
import Attendance from "./pages/Attendance";
import { BranchProvider } from "./context/BranchContext";

function App() {
  return (
    <BranchProvider>
      <Router>
        <div style={{ padding: 20 }}>
          <h1>Thaparian|GPA-Tool</h1>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sgpa" element={<SGPA />} />
            <Route path="/cgpa" element={<CGPA />} />
            <Route path="/gpa-converter" element={<GPAConverter />} />
            <Route path="/attendance" element={<Attendance />} />
          </Routes>
        </div>
      </Router>
    </BranchProvider>
  );
}

export default App;
