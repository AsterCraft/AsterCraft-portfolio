import { useTranslation } from "react-i18next";

import { useModalStartProjectStore } from "../model/store";

const PhoneField = () => {
  const { phone, setPhone } = useModalStartProjectStore();

  const { t } = useTranslation("features");

  return (
    <input
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      type="text"
      id="phone"
      placeholder={t("contactForm.fields.phone.placeholder")}
      className="h-9 outline-none"
    />
  );
};

export default PhoneField;
