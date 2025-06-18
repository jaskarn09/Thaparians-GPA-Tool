// src/pages/SGPA.jsx
import { useContext, useState } from "react";
import { BranchContext } from "../context/BranchContext";
import coursesByBranch from "../data/coursesByBranch";

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
    const gradePoints = { O: 10, A: 9, B: 8, C: 7, D: 6, E: 5, F: 0 };
    let totalPoints = 0,
      totalCredits = 0;

    branchCourses.forEach((course, i) => {
      const points = gradePoints[grades[i]];
      if (points !== undefined) {
        totalPoints += points * course.credits;
        totalCredits += course.credits;
      }
    });

    const sgpa =
      totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "Invalid";
    alert(`Your SGPA is: ${sgpa}`);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow">
      <h1 className="text-2xl font-semibold text-center mb-6">
        SGPA Calculator
      </h1>

      {branchCourses.length === 0 ? (
        <p className="text-center text-gray-600">
          Please select your branch on the home page.
        </p>
      ) : (
        branchCourses.map((course, index) => (
          <div key={index} className="mb-4">
            <label className="block font-medium mb-1">
              {course.course_name} ({course.credits} cr)
            </label>
            <input
              type="text"
              maxLength="1"
              placeholder="O/A/B/C/D/E/F"
              value={grades[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
        ))
      )}

      {branchCourses.length > 0 && (
        <button
          onClick={calculateSGPA}
          className="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Calculate SGPA
        </button>
      )}
    </div>
  );
}

export default SGPA;
