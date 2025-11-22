import { useTranslation } from "react-i18next";

import { validateFieldOnBlur } from "../../lib/validateFields";
import { useModalStartProjectStore } from "../../model/store";

import s from "../styles.module.scss";

const EmailField = () => {
  const { email, setEmail, errors, touchedFields } =
    useModalStartProjectStore();

  const { t } = useTranslation("startProjectForm");

  const handleBlur = () => {
    validateFieldOnBlur("email", email);
  };

  return (
    <>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleBlur}
        aria-invalid={!!errors.email}
        aria-describedby={errors.email ? "email-error" : undefined}
        type="email"
        id="e-mail"
        placeholder="me@gmail.com"
        className="h-9 outline-none"
      />

      {touchedFields.has("email") && errors.email && (
        <span
          className={s.error}
          id="email-error"
        >
          {t(errors.email)}
        </span>
      )}
    </>
  );
};

export default EmailField;
