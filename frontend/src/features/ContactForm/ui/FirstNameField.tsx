import { useTranslation } from "react-i18next";

import { useModalStartProjectStore } from "../model/store";

const FirstNameField = () => {
  const { firstName, setFirstName } = useModalStartProjectStore();

  const { t } = useTranslation("features");

  return (
    <input
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      type="text"
      id="first-name"
      placeholder={t("contactForm.fields.firstName.placeholder")}
      className="h-9 outline-none"
    />
  );
};

export default FirstNameField;
