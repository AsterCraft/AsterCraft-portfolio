import classNames from "classnames";

type ButtonStartProjectProps = {
  className?: string;
  text?: string;
};

const ButtonStartProject = ({ className, text }: ButtonStartProjectProps) => {
  return (
    <button
      className={classNames(
        "bg-ac-btn-action inline-block w-fit cursor-pointer rounded-md px-8 py-4 text-lg whitespace-nowrap text-black",
        className
      )}
    >
      {text || "Start a project"}
    </button>
  );
};

export default ButtonStartProject;
