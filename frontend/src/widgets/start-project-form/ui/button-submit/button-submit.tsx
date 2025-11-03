import cn from "classnames";
import { useTranslation } from "react-i18next";

import { useSubmitModalStartProject } from "../../model/useSubmitModalStartProject";

import s from "./button-submit.module.scss";

export const ButtonSubmit = () => {
  const { t } = useTranslation("startProjectForm");

  const { isSubmitting, isSentSuccessfully, validated, handleSubmit } =
    useSubmitModalStartProject();

  return (
    <button
      type="button"
      disabled={isSubmitting || !validated}
      onClick={handleSubmit}
      className={cn(
        { [s.success]: isSentSuccessfully },
        { [s.validationFailed]: !validated },
        "bg-ac-eerie-black rounded-md p-5 text-white",
        "disabled:bg-ac-btn-slider-navigation disabled:text-ac-eerie-black disabled:cursor-not-allowed"
      )}
    >
      {!validated && t("contactForm.submitButton.validationFailed")}
      {isSubmitting && "Відправляється..."}
      {isSentSuccessfully && "Відправлено успішно"}
      {!isSentSuccessfully &&
        !isSubmitting &&
        validated &&
        t("contactForm.submitButton.default")}
    </button>
  );
};
