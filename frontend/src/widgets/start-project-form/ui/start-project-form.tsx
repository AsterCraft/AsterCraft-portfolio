import classNames from "classnames";
import { useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import { useNavigate } from "react-router";

import NameField from "./inputs/name-field";
import TelegramField from "./inputs/telegram-field";
import EmailField from "./inputs/email-field";
import PhoneField from "./inputs/phone-field";
import MessageField from "./inputs/message-field";
import { ButtonSubmit } from "./button-submit/button-submit";

import { useIsContactFormModalOpenStore } from "../../../shared/lib/store/isContactFormModalOpen";

import s from "./start-project-form.module.scss";

const StartProjectForm = () => {
  const { isOpen, close } = useIsContactFormModalOpenStore();
  const navigate = useNavigate();

  const { t } = useTranslation("startProjectForm");

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modalOpen");
    } else {
      document.body.classList.remove("modalOpen");
    }
  }, [isOpen]);

  const onHandleCloseModal = () => {
    close();
    // TODO: write better logic
    // this most likely cause bugs in the future
    navigate("/", { preventScrollReset: true });
  };

  const cn = classNames;

  return (
    <>
      {isOpen && (
        <div
          role="dialog"
          aria-labelledby="modal-start-project__title"
          aria-modal={true}
          className={cn(s.startProjectModal)}
        >
          <div
            className={s.modalBlur}
            onClick={onHandleCloseModal}
          ></div>

          <div className={s.startProjectForm}>
            {/* div for animating the fading* in/out of the modal window content */}
            {/* <div> */}
            <div className={s.closeBtnContainer}>
              <button
                onClick={onHandleCloseModal}
                className={s.closeBtn}
              >
                {t("contactForm.close")}
              </button>
            </div>

            <header className={s.header}>
              <h2
                id="modal-start-project__title"
                className={s.heading}
              >
                {t("contactForm.title")}
              </h2>

              <p className={s.subtitle}>
                <Trans
                  i18nKey="contactForm.subtitleFull"
                  ns="startProjectForm"
                  components={{
                    email: (
                      <a
                        href="mailto:astercraft.dev@gmail.com"
                        className={s.subtitleLink}
                        target="_blank"
                      />
                    ),
                    telegram: (
                      <a
                        href="https://t.me/AsterCraft"
                        className={s.subtitleLink}
                        target="_blank"
                      />
                    ),
                  }}
                />
              </p>
            </header>

            <form className={s.form}>
              <div className={s.credentials}>
                {/* each div inside <form> row is a wrapper for <label> + <input> */}
                <div className={s.fieldWrapper}>
                  <label
                    htmlFor="first-name"
                    className={s.fieldLabel}
                  >
                    {t("contactForm.fields.firstName.label")}
                  </label>
                  <NameField className={s.fieldInput} />
                </div>

                <div className={s.fieldWrapper}>
                  <label
                    htmlFor="telegram"
                    className={s.fieldLabel}
                  >
                    {t("contactForm.fields.telegram.label")}
                  </label>

                  <TelegramField className={s.fieldInput} />
                </div>

                <div className={s.fieldWrapper}>
                  <label
                    htmlFor="e-mail"
                    className={s.fieldLabel}
                  >
                    E-Mail
                  </label>
                  <EmailField className={s.fieldInput} />
                </div>

                <div className={s.fieldWrapper}>
                  <label
                    htmlFor="Phone"
                    className={s.fieldLabel}
                  >
                    {t("contactForm.fields.phone.label")}
                  </label>
                  <PhoneField className={s.fieldInput} />
                </div>
              </div>

              <div className={cn(s.projectDetailsField, s.fieldWrapper)}>
                <label
                  htmlFor="Project-Details"
                  className={s.fieldLabel}
                >
                  {t("contactForm.fields.projectDetails.label")}
                </label>
                <MessageField className={cn(s.messageInput, s.fieldInput)} />
              </div>

              <ButtonSubmit />
            </form>
          </div>
          {/* </div> */}
        </div>
      )}
    </>
  );
};

export default StartProjectForm;
