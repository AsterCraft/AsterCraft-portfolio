import "./btn-send.scss";

type Props = {
  text: string;
};

const BtnSend = ({ text }: Props) => {
  return (
    <>
      <button
        className="btn-send"
        type="submit"
      >
        {text}
      </button>
    </>
  );
};

export default BtnSend;
