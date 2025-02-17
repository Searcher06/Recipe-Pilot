import { createContext, useRef, useContext } from "react";

const ResultContext = createContext(null);

export const ResultProvider = ({ children }) => {
  const resultRef = useRef(null); // Storing the ref

  return (
    <ResultContext.Provider value={{ resultRef }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
