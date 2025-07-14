import classNames from "classnames";
import { motion, AnimatePresence } from "motion/react";
import { useContext } from "react";

import ContextModalStartProject from "../../../shared/store/ContextModalStartProject";

const ModalStartProject = () => {
  const { isOpen, setIsOpen } = useContext(ContextModalStartProject);

  const textAreaStyles = classNames(
    "flex h-[24vw] max-h-48 min-h-36 justify-start align-top outline-none",
    "lg:h-[12vw]"
  );

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
                "lg:fixed lg:inset-y-0 lg:left-0 lg:block lg:w-1/2 lg:bg-black/50 lg:text-white"
              )}
              onClick={() => setIsOpen(false)}
            ></motion.div>

            <motion.div
              className={classNames(
                "fixed inset-y-0 right-0 w-full bg-white p-6",
                "lg:w-1/2"
              )}
            >
              <div className="mt-6 mb-12 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
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
                      "modal-start-project__field-wrapper",
                      "bg-ac-input-start-projec flex flex-col rounded-md px-5 pt-4 pb-3"
                    )}
                  >
                    <label
                      htmlFor="first-name"
                      className="text-sm"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      placeholder="Maksym"
                      className="h-9 outline-none"
                    />
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
                    <input
                      type="text"
                      id="last-name"
                      placeholder="Mokriakov"
                      className="h-9 outline-none"
                    />
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
                    <input
                      type="email"
                      id="e-mail"
                      placeholder="me@gmail.com"
                      className="h-9 outline-none"
                    />
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
                    <input
                      type="text"
                      id="phone"
                      placeholder="+48790833877"
                      className="h-9 outline-none"
                    />
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
                    <textarea
                      name="Project_Details"
                      id="Project-Details"
                      className={textAreaStyles}
                      placeholder="Describe your project"
                    ></textarea>
                  </div>

                  <div
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
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalStartProject;
