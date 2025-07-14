import classNames from "classnames";
import { useWriteUsModal } from "../../../../widgets/modals/write-us-popup/store/useWriteUsModal";

type ButtonStartProjectProps = {
  className?: string;
  text?: string;
};

const ButtonStartProject = ({ className, text }: ButtonStartProjectProps) => {
  const { open } = useWriteUsModal();

  return (
    <button
      className={classNames(
        "bg-ac-btn-action inline-block w-fit cursor-pointer rounded-md px-8 py-4 text-lg whitespace-nowrap text-black",
        className
      )}
      onClick={open}
    >
      {text || "Start a project"}
    </button>
  );
};

export default ButtonStartProject;
