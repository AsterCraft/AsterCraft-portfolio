import classNames from "classnames";
import { motion, AnimatePresence } from "motion/react";

import FirstNameField from "./FirstNameField";
import LastNameField from "./LastNameField";
import EmailField from "./EmailField";
import PhoneField from "./PhoneField";
import MessageField from "./MessageField";
import ButtonSubmit from "./ButtonSubmit";

// import { useIsContactFormModalOpenStore } from "../../../shared/lib/store/isContactFormModalOpen";
import { useSubmitModalStartProject } from "../model/useSubmitModalStartProject";

import { useSelector, useDispatch } from "react-redux";
import type { StoreType } from "../../../app/store";
import { setIsOpen } from "../../../app/store";

const ModalStartProject = () => {
  // const { isOpen, toggleIsOpen } = useIsContactFormModalOpenStore();

  const dispatch = useDispatch();

  const isOpen = useSelector(
    (state: StoreType) => state.isContactFormModalOpen.isOpen
  );

  const toggleIsOpen = () => {
    dispatch(setIsOpen(!isOpen));
  };

  const { handleSubmit, isSubmitting } = useSubmitModalStartProject();

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className={classNames("fixed inset-0 z-[1111] overflow-scroll")}>
            <motion.div
              initial={{ backdropFilter: "blur(0px)", opacity: 0 }}
              animate={{ backdropFilter: "blur(8px)", opacity: 1 }}
              exit={{ backdropFilter: "blur(0px)", opacity: 0 }}
              className={classNames(
                "hidden",
                "z-[-1000] lg:fixed lg:inset-y-0 lg:left-0 lg:block lg:w-full lg:bg-black/50 lg:text-white"
              )}
              onClick={toggleIsOpen}
            ></motion.div>

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 1.2, type: "spring", bounce: 0.1 }}
              className={classNames(
                "fixed inset-y-0 right-0 w-full bg-white p-6",
                "lg:w-1/2"
              )}
            >
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
                    onClick={toggleIsOpen}
                    className="text-xl"
                  >
                    Close
                  </button>
                </div>

                <header className="mb-16">
                  <h2
                    className={classNames(
                      "mb-4 text-[clamp(1.6rem,3.2vw+0.4rem,2rem)]",
                      "lg:text-[clamp(1.6rem,2vw+0.4rem,2.3rem)]"
                    )}
                  >
                    Start a project
                  </h2>
                  <p
                    className={classNames(
                      "text-ac-paragraph-light text-[clamp(1.2rem,1.9vw+0.4rem,1.4rem)]",
                      "lg:text-[clamp(1.3rem,1vw+0.4rem,1.4rem)]"
                    )}
                  >
                    Tell me a bit about your project! Just fill out the form or
                    drop me an{" "}
                    <a
                      href="#"
                      className="text-ac-link-email underline"
                    >
                      E-Mail
                    </a>{" "}
                    — I’ll get back to you as soon as possible.
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
                        First Name
                      </label>
                      <FirstNameField />
                    </div>

                    <div
                      className={classNames(
                        "modal-start-project__field-wrapper",
                        "bg-ac-input-start-projec flex flex-col rounded-md px-5 pt-4 pb-3"
                      )}
                    >
                      <label
                        htmlFor="last-name"
                        className="text-sm"
                      >
                        Last Name
                      </label>

                      <LastNameField />
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
                        Phone
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
                        Project Details
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

                    <ButtonSubmit
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    />
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

export default ModalStartProject;
