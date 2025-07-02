import classNames from "classnames";
import { useContext } from "react";
import ContextModalStartProject from "../../../shared/store/ContextModalStartProject";

const ModalStartProject = () => {
  const { isOpen, setIsOpen } = useContext(ContextModalStartProject);

  return (
    <>
      {isOpen && (
        <div className={classNames("fixed inset-0 z-[1111]")}>temp</div>
      )}
    </>
  );
};

export default ModalStartProject;
