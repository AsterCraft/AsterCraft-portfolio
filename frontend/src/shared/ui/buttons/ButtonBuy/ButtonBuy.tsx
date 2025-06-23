type Props = {
  text: string;
  className?: string;
};

// blue color: bg-[#00bcd4];

const ButtonBuy = ({ text, className }: Props) => {
  return (
    <div className={className}>
      <button className="w-fit rounded bg-[#cfd1d1] px-2 py-1 font-medium text-black">
        {text}
      </button>
    </div>
  );
};

export default ButtonBuy;
