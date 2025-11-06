import cn from "classnames";
import { useNavigate } from "react-router";

import { useIsContactFormModalOpenStore } from "../../../lib/store/isContactFormModalOpen";

type ButtonStartProjectProps = {
  className?: string;
  text?: string;
};

const ButtonStartProject = ({ className, text }: ButtonStartProjectProps) => {
  const { toggleIsOpen, isOpen } = useIsContactFormModalOpenStore();
  const navigate = useNavigate();

  const onHandleClick = () => {
    toggleIsOpen();
    navigate("/uk/contact", { replace: false });
  };

  return (
    <button
      onClick={() => onHandleClick()}
      className={cn(
        "bg-ac-btn-action inline-block w-fit cursor-pointer rounded-md px-8 py-4 text-lg whitespace-nowrap text-black",
        className
      )}
    >
      {text || "Start a project"}
    </button>
  );
};

export default ButtonStartProject;
