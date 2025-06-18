// src/pages/Home.jsx
import React, { useContext } from "react";
import { BranchContext } from "../context/BranchContext";
import SGPACalculator from "./SGPA";
import CGPACalculator from "./CGPA";
import AttendanceManager from "./Attendance";
import GPAConverter from "./GPAConverter";

export default function Home() {
  const { selectedBranch, setSelectedBranch, activeCalculator, setActiveCalculator } = useContext(BranchContext);

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const showCalculator = (calculatorType) => {
    // Only show calculator if branch is selected
    if (selectedBranch === "select") {
      alert("Please select your branch first!");
      return;
    }
    
    setActiveCalculator(calculatorType);
    
    // Smooth scroll to calculator section
    setTimeout(() => {
      const section = document.getElementById(`${calculatorType}-section`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div>
      <h2>Welcome to Thaparian GPA Tool!</h2>

      <label>Select Your Branch: </label>
      <select value={selectedBranch} onChange={handleBranchChange}>
        <option value="select">SELECT</option>
        <option value="eec">EEC</option>
        <option value="cse">CSE</option>
        <option value="mech">Mechanical</option>
        <option value="coe">COE</option>
        <option value="mechatronics">Mechatronics</option>
        <option value="biomedical">BioMedical</option>
        <option value="enc">ENC</option>
        <option value="ece">ECE</option>
        <option value="civil">CIVIL</option>
        <option value="civilwithcomp">CIVIL&COMPUTER</option>
        <option value="elec">ELECTRICAL</option>
        <option value="eic">EIC</option>
        <option value="chemical">CHEMICAL</option>
        <option value="biotechno">BIOTECHNOLOGY</option>
        <option value="csbs">CSBS</option>
        <option value="aiml">AI&ML</option>
        <option value="Vlsi_design">VLSI_Design</option>
      </select>

      {/* Show calculator buttons only when branch is selected */}
      {selectedBranch !== "select" && (
        <div className="calculator-buttons">
          <div className="card">
            SGPA Calculator 
            <button onClick={() => showCalculator('sgpa')}>Start</button>
          </div>
          <div className="card">
            CGPA Calculator 
            <button onClick={() => showCalculator('cgpa')}>Start</button>
          </div>
          <div className="card">
            Attendance Manager 
            <button onClick={() => showCalculator('attendance')}>Start</button>
          </div>
          <div className="card">
            GPA Converter 
            <button onClick={() => showCalculator('gpa-converter')}>Start</button>
          </div>
        </div>
      )}

      {/* Calculator Sections - Show based on activeCalculator */}
      {activeCalculator === 'sgpa' && (
        <div id="sgpa-section" className="calculator-section">
          <SGPACalculator />
        </div>
      )}

      {activeCalculator === 'cgpa' && (
        <div id="cgpa-section" className="calculator-section">
          <CGPACalculator />
        </div>
      )}

      {activeCalculator === 'attendance' && (
        <div id="attendance-section" className="calculator-section">
          <AttendanceManager />
        </div>
      )}

      {activeCalculator === 'gpa-converter' && (
        <div id="gpa-converter-section" className="calculator-section">
          <GPAConverter />
        </div>
      )}
    </div>
  );
}