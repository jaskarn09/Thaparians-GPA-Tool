import React, { createContext, useContext, useState } from "react";

const BranchContext = createContext();

export const BranchProvider = ({ children }) => {
  const [selectedBranch, setSelectedBranch] = useState("select");
  const [activeCalculator, setActiveCalculator] = useState(null); // "sgpa", "cgpa", etc.

  return (
    <BranchContext.Provider value={{ 
      selectedBranch, 
      setSelectedBranch,
      activeCalculator,
      setActiveCalculator 
    }}>
      {children}
    </BranchContext.Provider>
  );
};

export const useBranch = () => useContext(BranchContext);
