import cn from "classnames";
import { useTranslation } from "react-i18next";

import type { ButtonSubmitProps } from "../model/types";

const ButtonSubmit = ({ onClick, disabled }: ButtonSubmitProps) => {
  const { t } = useTranslation("features");

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
      {t("contactForm.submit")}
    </button>
  );
};

export default ButtonSubmit;
