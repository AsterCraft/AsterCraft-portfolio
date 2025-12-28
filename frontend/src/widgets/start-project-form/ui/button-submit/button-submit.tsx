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
        s.btn,
        { [s.success]: isSentSuccessfully },
        { [s.validationFailed]: !validated }
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
