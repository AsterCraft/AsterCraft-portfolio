import { createContext, useState, type ReactNode } from "react";
import type { ModalContext } from "../types";

const ModalStartProjectContext = createContext<ModalContext | undefined>(
  undefined
);

export const ModalStartProjectProvider = ({
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
    <ModalStartProjectContext.Provider value={ctxValue}>
      {children}
    </ModalStartProjectContext.Provider>
  );
};

export default ModalStartProjectContext;
