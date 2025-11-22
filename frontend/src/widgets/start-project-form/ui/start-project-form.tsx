import classNames from "classnames";
import { motion, AnimatePresence } from "motion/react";
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

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div
            role="dialog"
            aria-labelledby="modal-start-project__title"
            aria-modal={true}
            className={classNames("fixed inset-0 z-[1111]")}
          >
            <motion.div
              initial={{ backdropFilter: "blur(0px)", opacity: 0 }}
              animate={{ backdropFilter: "blur(8px)", opacity: 1 }}
              exit={{ backdropFilter: "blur(0px)", opacity: 0 }}
              className={classNames(
                "hidden",
                "z-[-1000] lg:fixed lg:inset-y-0 lg:left-0 lg:block lg:w-full lg:bg-black/50 lg:text-white"
              )}
              onClick={onHandleCloseModal}
            ></motion.div>

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 1.3, type: "spring", bounce: 0 }}
              className={classNames(
                "fixed inset-y-0 right-0 w-full bg-white p-6",
                "overflow-y-auto lg:w-1/2"
              )}
            >
              {/* div for animating the fading* in/out of the modal window content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    opacity: {
                      duration: 0.3,
                      delay: 0.2,
                      type: "spring",
                      bounce: 0.1,
                    },
                    y: {
                      delay: 0.2,
                      duration: 0.3,
                      type: "spring",
                      bounce: 0.1,
                    },
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 15,
                  transition: {
                    y: { duration: 0.2, type: "spring", bounce: 0.1 },
                    opacity: {
                      delay: 0.1,
                      duration: 0.2,
                      type: "spring",
                      bounce: 0.1,
                    },
                  },
                }}
              >
                <div className="mt-6 mb-12 flex justify-end">
                  <button
                    onClick={onHandleCloseModal}
                    className="cursor-pointer text-xl"
                  >
                    {t("contactForm.close")}
                  </button>
                </div>

                <header className="mb-16">
                  <h2
                    id="modal-start-project__title"
                    className={classNames(
                      "mb-4 text-[clamp(1.6rem,3.2vw+0.4rem,2rem)]",
                      "lg:text-[clamp(1.6rem,2vw+0.4rem,2.3rem)]"
                    )}
                  >
                    {t("contactForm.title")}
                  </h2>
                  <p
                    className={classNames(
                      "text-ac-paragraph-light text-[clamp(1.2rem,1.9vw+0.4rem,1.4rem)]",
                      "lg:text-[clamp(1.3rem,1vw+0.4rem,1.4rem)]"
                    )}
                  >
                    <Trans
                      i18nKey="contactForm.subtitleFull"
                      ns="startProjectForm"
                      components={{
                        email: (
                          <a
                            href="mailto:astercraft.dev@gmail.com"
                            className="text-ac-link-email underline"
                            target="_blank"
                          />
                        ),
                        telegram: (
                          <a
                            href="https://t.me/AsterCraft"
                            className="text-ac-link-email underline"
                            target="_blank"
                          />
                        ),
                      }}
                    />
                  </p>
                </header>

                <form className={classNames("flex flex-col gap-y-4")}>
                  {/* each grid inside form represents a single row inside form */}
                  <div
                    className={classNames(
                      "grid grid-cols-1 gap-x-4 gap-y-4",
                      "sm:grid-cols-2"
                    )}
                  >
                    {/* each div inside <form> row is a wrapper for <label> + <input> */}
                    <div
                      className={classNames(
                        "modal-start-project__field-wrapper", // for animation
                        "bg-ac-input-start-projec flex flex-col rounded-md px-5 pt-4 pb-3"
                      )}
                    >
                      <label
                        htmlFor="first-name"
                        className="text-sm"
                      >
                        {t("contactForm.fields.firstName.label")}
                      </label>
                      <NameField />
                    </div>

                    <div
                      className={classNames(
                        "modal-start-project__field-wrapper",
                        "bg-ac-input-start-projec flex flex-col rounded-md px-5 pt-4 pb-3"
                      )}
                    >
                      <label
                        htmlFor="telegram"
                        className="text-sm"
                      >
                        {t("contactForm.fields.telegram.label")}
                      </label>

                      <TelegramField />
                    </div>

                    <div
                      className={classNames(
                        "modal-start-project__field-wrapper",
                        "bg-ac-input-start-projec flex flex-col rounded-md px-5 pt-4 pb-3"
                      )}
                    >
                      <label
                        htmlFor="e-mail"
                        className="text-sm"
                      >
                        E-Mail
                      </label>
                      <EmailField />
                    </div>

                    <div
                      className={classNames(
                        "modal-start-project__field-wrapper",
                        "bg-ac-input-start-projec flex flex-col rounded-md px-5 pt-4 pb-3"
                      )}
                    >
                      <label
                        htmlFor="Phone"
                        className="text-sm"
                      >
                        {t("contactForm.fields.phone.label")}
                      </label>
                      <PhoneField />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-y-4">
                    <div
                      className={classNames(
                        "modal-start-project__field-wrapper",
                        "bg-ac-input-start-projec flex flex-col rounded-md px-5 pt-4 pb-3"
                      )}
                    >
                      <label
                        htmlFor="Project-Details"
                        className="text-sm"
                      >
                        {t("contactForm.fields.projectDetails.label")}
                      </label>
                      <MessageField />
                    </div>

                    {/* <div
                      className={classNames(
                        "modal-start-project__field-wrapper",
                        "bg-ac-input-start-projec flex flex-col rounded-md px-5 pt-4 pb-3"
                      )}
                    >
                      <label
                        htmlFor="Message"
                        className="text-sm"
                      >
                        Project Details
                      </label>
                      <textarea
                        name="Message"
                        id="Message"
                        className={textAreaStyles}
                        placeholder="Any additional notes?"
                      ></textarea>
                    </div> */}

                    <ButtonSubmit />
                  </div>
                </form>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StartProjectForm;
