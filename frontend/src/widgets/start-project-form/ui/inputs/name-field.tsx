import { useTranslation } from "react-i18next";

import { useModalStartProjectStore } from "../../model/store";
import { validateFieldOnBlur } from "../../lib/validateFields";

import s from "../styles.module.scss";

const NameField = () => {
  const { firstName, setFirstName, errors, touchedFields } =
    useModalStartProjectStore();

  const { t } = useTranslation("startProjectForm");

  const handleBlur = () => {
    validateFieldOnBlur("firstName", firstName);
  };

  return (
    <>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        onBlur={handleBlur}
        aria-invalid={!!errors.firstName}
        aria-describedby={errors.firstName ? "firstName-error" : undefined}
        type="text"
        id="first-name"
        placeholder={t("contactForm.fields.firstName.placeholder")}
        className="h-9 outline-none"
      />

      {touchedFields.has("firstName") && errors.firstName && (
        <span
          className={s.error}
          id="firstName-error"
        >
          {t(errors.firstName)}
        </span>
      )}
    </>
  );
};

export default NameField;
