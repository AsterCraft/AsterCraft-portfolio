import { useIsContactFormModalOpenStore } from "../../../lib/store/isContactFormModalOpen";

type Props = {
  text: string;
  className?: string;
};

const ButtonBuy = ({ text, className }: Props) => {
  const { toggleIsOpen } = useIsContactFormModalOpenStore();

  return (
    <div
      className={className}
      onClick={toggleIsOpen}
    >
      <button className="bg-ac-btn-action inline-block w-fit cursor-pointer rounded-md px-2 py-1 text-lg whitespace-nowrap text-black">
        {text}
      </button>
    </div>
  );
};

export default ButtonBuy;
