import { Children, createContext, useEffect, useState } from "react";

export const LangueContext = createContext();

export default function ContextProvider({ children }) {
  const [langue, setLangue] = useState("uzb");
  const [langUzb, Setlanguzb] = useState();
  const [langRu, Setlangru] = useState();
  const [num, setNum] = useState();

  return (
    <LangueContext.Provider
      value={{ langue, setLangue, num, setNum, Setlanguzb, Setlangru }}
    >
      {children}
    </LangueContext.Provider>
  );
}
