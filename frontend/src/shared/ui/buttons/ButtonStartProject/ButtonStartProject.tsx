import cn from "classnames";

import { useIsContactFormModalOpenStore } from "../../../lib/store/isContactFormModalOpen";

type ButtonStartProjectProps = {
  className?: string;
  text?: string;
};

const ButtonStartProject = ({ className, text }: ButtonStartProjectProps) => {
  const { toggleIsOpen } = useIsContactFormModalOpenStore();

  return (
    <button
      onClick={toggleIsOpen}
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
