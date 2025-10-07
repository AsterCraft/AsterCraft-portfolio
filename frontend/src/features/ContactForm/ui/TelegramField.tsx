import { useTranslation } from "react-i18next";

import { useModalStartProjectStore } from "../model/store";

const TelegramField = () => {
  const { lastName, setLastName } = useModalStartProjectStore();

  const { t } = useTranslation("features");

  return (
    <input
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      type="text"
      id="telegram"
      placeholder={t("contactForm.fields.telegram.placeholder")}
      className="h-9 outline-none"
    />
  );
};

export default TelegramField;
