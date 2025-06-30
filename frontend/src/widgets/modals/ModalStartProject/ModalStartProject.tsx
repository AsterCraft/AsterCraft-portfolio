import classNames from "classnames";

type ModalStartProjectProps = {
  isOpen: boolean;
};

const ModalStartProject = ({ isOpen }: ModalStartProjectProps) => {
  return (
    <>
      {isOpen && (
        <div className={classNames("fixed inset-0 z-[1111]")}>temp</div>
      )}
    </>
  );
};

export default ModalStartProject;
