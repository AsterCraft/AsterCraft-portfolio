type Props = {
  text: string;
  className?: string;
};

const ButtonBuy = ({ text, className }: Props) => {
  return (
    <div className={className}>
      <button className="bg-ac-btn-action w-fit rounded px-2 py-1 font-medium text-black">
        {text}
      </button>
    </div>
  );
};

export default ButtonBuy;
