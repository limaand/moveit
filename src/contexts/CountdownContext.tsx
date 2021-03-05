import { createContext, ReactNode } from "react";

interface CountdownContextData {}

interface CountdownProviderProps {
  children: ReactNode;
}

const CountdownContext = createContext({} as CountdownContextData);

export function CountDownProvider({ children }: CountdownProviderProps) {
  
  
  return (
    <CountdownContext.Provider value={{}}>
        {children}
    </CountdownContext.Provider>
  );
}
