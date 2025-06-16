import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SGPA from "./pages/SGPA";
import CGPA from "./pages/CGPA";
import GPAConverter from "./pages/GPAConverter";
import Attendance from "./pages/Attendance";
import { BranchProvider } from "./context/BranchContext"; // ✅ Context added

function App() {
  return (
    <BranchProvider>
      <Router>
        <div style={{ padding: 20 }}>
          <h1>Thaparian | GPA Tool</h1>
          <nav>
            <Link to="/sgpa">SGPA Calculator</Link> |{" "}
            <Link to="/cgpa">CGPA Calculator</Link> |{" "}
            <Link to="/gpa-converter">GPA Converter</Link> |{" "}
            <Link to="/attendance">Attendance</Link>
          </nav>

          <Routes>
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
