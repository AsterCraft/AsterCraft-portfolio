// RailsStateContext.tsx
import { createContext, useState, type ReactNode } from "react";

interface RailStateContextType {
  activeRailId: number;
  setActiveRailId: (id: number) => void;
}

export const RailStateContext = createContext<RailStateContextType>({
  activeRailId: 0,
  setActiveRailId: () => {},
});

export default function RailStateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeRailId, setActiveRailId] = useState(0);

  return (
    <RailStateContext.Provider value={{ activeRailId, setActiveRailId }}>
      {children}
    </RailStateContext.Provider>
  );
}