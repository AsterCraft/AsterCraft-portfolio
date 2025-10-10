import { useTranslation } from "react-i18next";

import { useModalStartProjectStore } from "../model/store";

const TelegramField = () => {
  const { telegram, setTelegram } = useModalStartProjectStore();

  const { t } = useTranslation("features");

  return (
    <input
      value={telegram}
      onChange={(e) => setTelegram(e.target.value)}
      type="text"
      id="telegram"
      placeholder={t("contactForm.fields.telegram.placeholder")}
      className="h-9 outline-none"
    />
  );
};

export default TelegramField;
