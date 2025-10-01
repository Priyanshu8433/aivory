"use client";
import { useState } from "react";
import ToolContext from "@/components/providers/ToolContext";
const ToolContextProvider = ({ children }) => {
  const [tool, setTool] = useState("dashboard");
  return (
    <ToolContext.Provider value={{ tool, setTool }}>
      {children}
    </ToolContext.Provider>
  );
};

export default ToolContextProvider;
