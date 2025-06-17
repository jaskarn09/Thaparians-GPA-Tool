import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to Thaparian GPA Tool!</h2>
      <div className="card">
        SGPA Calculator <button onClick={() => navigate("/sgpa")}>Start</button>
      </div>
      <div className="card">
        CGPA Calculator <button onClick={() => navigate("/cgpa")}>Start</button>
      </div>
      <div className="card">
        Attendance Manager <button onClick={() => navigate("/attendance")}>Start</button>
      </div>
      <div className="card">
        GPA Converter <button onClick={() => navigate("/gpa-converter")}>Start</button>
      </div>
    </div>
  );
}
