import cn from "classnames";
import { useTranslation } from "react-i18next";

import { useSubmitModalStartProject } from "../../model/useSubmitModalStartProject";

import type { ButtonSubmitProps } from "../../model/types";

import s from "./button-submit.module.scss";

export const ButtonSubmit = ({ onClick, disabled }: ButtonSubmitProps) => {
  const { t } = useTranslation("features");

  const { isSubmitting, isSentSuccessfully, handleSubmit } =
    useSubmitModalStartProject();
  console.log(isSubmitting);
  console.log(isSentSuccessfully);

  return (
    <button
      type="button"
      disabled={isSubmitting}
      onClick={handleSubmit}
      // onClick={onClick}
      className={cn(
        { [s.success]: isSentSuccessfully },
        "bg-ac-eerie-black rounded-md p-5 text-white",
        "disabled:bg-ac-btn-slider-navigation disabled:text-ac-eerie-black disabled:cursor-not-allowed"
      )}
    >
      {isSubmitting && "Відправляється..."}
      {isSentSuccessfully && "Відправлено успішно ✓"}
      {!isSentSuccessfully && !isSubmitting && t("contactForm.submit")}
    </button>
  );
};
