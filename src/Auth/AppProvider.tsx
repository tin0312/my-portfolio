import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the type for the context values
interface AppContextType {
  isSent: boolean;
  setIsSent: (value: boolean) => void;
}

// Create Context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider Component
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isSent, setIsSent] = useState(false);

  return (
    <AppContext.Provider value={{ isSent, setIsSent }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
export function useAppContext(): AppContextType {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

export default AppContext;
