import { useTranslation } from "react-i18next";

import { useModalStartProjectStore } from "../../model/store";
import { validateFieldOnBlur } from "../../lib/validateFields";

import s from "../styles.module.scss";

const PhoneField = () => {
  const { phone, setPhone, errors, touchedFields } =
    useModalStartProjectStore();

  const { t } = useTranslation("startProjectForm");

  const handleBlur = () => {
    validateFieldOnBlur("phone", phone);
  };

  return (
    <>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        onBlur={handleBlur}
        aria-invalid={!!errors.phone}
        aria-describedby={errors.phone ? "phone-error" : undefined}
        type="text"
        id="phone"
        placeholder={t("contactForm.fields.phone.placeholder")}
        className="h-9 outline-none"
      />

      {touchedFields.has("phone") && errors.phone && (
        <span
          className={s.error}
          id="phone-error"
        >
          {t(errors.phone)}
        </span>
      )}
    </>
  );
};

export default PhoneField;
