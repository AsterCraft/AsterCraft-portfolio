import cn from "classnames";

import type { ButtonSubmitProps } from "../model/types";

const ButtonSubmit = ({ onClick, disabled }: ButtonSubmitProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "bg-ac-eerie-black rounded-md p-5 text-white",
        "disabled:bg-ac-btn-slider-navigation disabled:text-ac-eerie-black disabled:cursor-not-allowed"
      )}
    >
      Send
    </button>
  );
};

export default ButtonSubmit;
