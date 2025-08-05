import type { ButtonSubmitProps } from "../model/types";

const ButtonSubmit = ({ onClick }: ButtonSubmitProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-ac-paragraph-light p-5"
    >
      Send
    </button>
  );
};

export default ButtonSubmit;
