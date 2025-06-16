import { useContext, useState } from "react";
import "./SGPA.css";
import { BranchContext } from "../context/BranchContext";
import coursesByBranch from "../data/coursesByBranch"; // wherever you stored it

function SGPA() {
  const { selectedBranch } = useContext(BranchContext);

  const branchCourses = coursesByBranch[selectedBranch] || [];
  const [grades, setGrades] = useState(Array(branchCourses.length).fill(""));

  const handleChange = (index, value) => {
    const updated = [...grades];
    updated[index] = value.toUpperCase();
    setGrades(updated);
  };

  const calculateSGPA = () => {
    const gradePoints = {
      O: 10,
      A: 9,
      B: 8,
      C: 7,
      D: 6,
      E: 5,
      F: 0,
    };

    let totalPoints = 0;
    let totalCredits = 0;

    branchCourses.forEach((course, i) => {
      const grade = grades[i];
      const points = gradePoints[grade];
      if (points !== undefined) {
        totalPoints += points * course.credits;
        totalCredits += course.credits;
      }
    });

    const sgpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "Invalid";
    alert(`Your SGPA is: ${sgpa}`);
  };

  return (
    <div className="sgpa-container">
      <h1 className="sgpa-title">SGPA Calculator</h1>

      {branchCourses.length === 0 ? (
        <p>Please select your branch from the home page.</p>
      ) : (
        branchCourses.map((course, index) => (
          <div key={index} className="course-box">
            <label>{course.course_name} ({course.credits} credits)</label>
            <input
              type="text"
              maxLength="1"
              placeholder="Enter Grade (O-A-B-C-D-E-F)"
              value={grades[index]}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        ))
      )}

      {branchCourses.length > 0 && (
        <button className="calculate-btn" onClick={calculateSGPA}>
          Calculate SGPA
        </button>
      )}
    </div>
  );
}

export default SGPA;
