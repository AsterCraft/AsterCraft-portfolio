import { useDispatch, useSelector } from "react-redux";
import { setIsOpen, type StoreType } from "../../../../app/store";

// import { useIsContactFormModalOpenStore } from "../../../lib/store/isContactFormModalOpen";

type ButtonStartProjectProps = {
  className?: string;
  text?: string;
};

const ButtonStartProject = ({ className, text }: ButtonStartProjectProps) => {
  const dispatch = useDispatch();

  const isOpen = useSelector(
    (state: StoreType) => state.isContactFormModalOpen.isOpen
  );

  const toggleIsOpen = () => {
    dispatch(setIsOpen(!isOpen));
  };

  // const { toggleIsOpen } = useIsContactFormModalOpenStore();

  return (
    <div className={className}>
      <button
        onClick={toggleIsOpen}
        className="bg-ac-btn-action inline-block w-fit cursor-pointer rounded-md px-8 py-4 text-lg whitespace-nowrap text-black"
      >
        {text || "Start a project"}
      </button>
    </div>
  );
};

export default ButtonStartProject;
