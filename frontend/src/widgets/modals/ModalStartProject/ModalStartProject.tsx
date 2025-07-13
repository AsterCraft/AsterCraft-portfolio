import classNames from "classnames";
import { useContext } from "react";
import ContextModalStartProject from "../../../shared/store/ContextModalStartProject";

const ModalStartProject = () => {
  const { isOpen, setIsOpen } = useContext(ContextModalStartProject);

  return (
    <>
      {isOpen && (
        <div className={classNames("fixed inset-0 z-[1111]")}>
          <div
            className={classNames(
              "hidden",
              "lg:fixed lg:inset-y-0 lg:left-0 lg:block lg:w-1/2 lg:bg-black/50 lg:text-white"
            )}
            onClick={() => setIsOpen(false)}
          ></div>

          <div
            className={classNames(
              "fixed inset-y-0 right-0 w-full bg-white p-6",
              "lg:w-1/2"
            )}
          >
            <div className="mb-8 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-xl"
              >
                Close
              </button>
            </div>

            <header>
              <h2>Start a project</h2>
              <p>
                Tell me a bit about your project! Just fill out the form or drop
                me an [email] — I’ll get back to you as soon as possible.
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
                    className="flex h-40 justify-start align-top outline-none"
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
                    className="flex h-40 justify-start align-top outline-none"
                    placeholder="Any additional notes?"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalStartProject;
