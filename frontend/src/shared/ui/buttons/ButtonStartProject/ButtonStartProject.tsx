import { useContext } from "react";
import ContextModalStartProject from "../../../store/ContextModalStartProject";

type ButtonStartProjectProps = {
  className?: string;
  text?: string;
};

const ButtonStartProject = ({ className, text }: ButtonStartProjectProps) => {
  const { setIsOpen } = useContext(ContextModalStartProject);

  return (
    <div className={className}>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-ac-btn-action inline-block w-fit cursor-pointer rounded-md px-8 py-4 text-lg whitespace-nowrap text-black"
      >
        {text || "Start a project"}
      </button>
    </div>
  );
};

export default ButtonStartProject;
