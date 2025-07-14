import { useWriteUsModal } from "../../../../widgets/modals/write-us-popup/store/useWriteUsModal";

type Props = {
  text: string;
  className?: string;
};

const ButtonBuy = ({ text, className }: Props) => {
  const { open } = useWriteUsModal();

  return (
    <div
      className={className}
      onClick={open}
    >
      <button className="bg-ac-btn-action inline-block w-fit cursor-pointer rounded-md px-2 py-1 text-lg whitespace-nowrap text-black">
        {text}
      </button>
    </div>
  );
};

export default ButtonBuy;
