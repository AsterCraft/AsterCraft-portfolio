import { createContext, useState, type ReactNode } from "react";
import type { ModalContext } from "../types";

const ContextModalStartProject = createContext<ModalContext>({
  isOpen: false,
  setIsOpen: () => false,
});

export const ProviderModalStartProject = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ctxValue: ModalContext = {
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };

  return (
    <ContextModalStartProject.Provider value={ctxValue}>
      {children}
    </ContextModalStartProject.Provider>
  );
};

export default ContextModalStartProject;
