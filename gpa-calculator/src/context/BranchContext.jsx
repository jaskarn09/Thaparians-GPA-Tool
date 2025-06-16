import React, { createContext, useContext, useState } from "react";

const BranchContext = createContext();

export const BranchProvider = ({ children }) => {
  const [branch, setBranch] = useState(""); // Default is no branch selected

  return (
    <BranchContext.Provider value={{ branch, setBranch }}>
      {children}
    </BranchContext.Provider>
  );
};

// Custom hook to use context easily
export const useBranch = () => useContext(BranchContext);