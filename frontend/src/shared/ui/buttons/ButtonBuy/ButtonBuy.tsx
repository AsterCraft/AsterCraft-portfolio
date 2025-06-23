type Props = {
  text: string;
};

const ButtonBuy = ({ text }: Props) => {
  return (
    <button className="rounded bg-[#00bcd4] px-2 py-1 font-medium text-black">
      {text}
    </button>
  );
};

export default ButtonBuy;
