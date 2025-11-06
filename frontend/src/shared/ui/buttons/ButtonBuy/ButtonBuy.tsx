import { useNavigate } from "react-router";
import { useIsContactFormModalOpenStore } from "../../../lib/store/isContactFormModalOpen";

type Props = {
  text: string;
  className?: string;
};

const ButtonBuy = ({ text, className }: Props) => {
  const { open } = useIsContactFormModalOpenStore();
  const navigate = useNavigate();

  const onHandleModalOpen = () => {
    open();
    navigate("?contact=true", { preventScrollReset: true });
  };

  return (
    <div
      className={className}
      onClick={onHandleModalOpen}
    >
      <button className="bg-ac-btn-action inline-block w-fit cursor-pointer rounded-md px-2 py-1 text-lg whitespace-nowrap text-black">
        {text}
      </button>
    </div>
  );
};

export default ButtonBuy;
