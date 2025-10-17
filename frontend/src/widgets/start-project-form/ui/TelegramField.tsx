import { useTranslation } from "react-i18next";

import { useModalStartProjectStore } from "../model/store";

import s from "./styles.module.scss";
import { validateFieldOnBlur } from "../lib/validateFields";

const TelegramField = () => {
  const { telegram, setTelegram, errors, touchedFields } =
    useModalStartProjectStore();

  const { t } = useTranslation("startProjectForm");

  const handleBlur = () => {
    validateFieldOnBlur("telegram", telegram);
  };

  return (
    <>
      <input
        value={telegram}
        onChange={(e) => setTelegram(e.target.value)}
        onBlur={handleBlur}
        aria-invalid={!!errors.telegram}
        aria-describedby={errors.telegram ? "telegram-error" : undefined}
        type="text"
        id="telegram"
        placeholder={t("contactForm.fields.telegram.placeholder")}
        className="h-9 outline-none"
      />

      {touchedFields.has("telegram") && errors.telegram && (
        <span
          className={s.error}
          id="telegram-error"
        >
          {t(errors.telegram)}
        </span>
      )}
    </>
  );
};

export default TelegramField;
