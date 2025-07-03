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
            className="fixed inset-y-0 left-0 w-1/2 bg-black/50 text-white"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="fixed inset-y-0 right-0 w-1/2 bg-white">
            <button onClick={() => setIsOpen(false)}>Close</button>

            <form className={classNames("flex flex-col")}>
              {/* each grid inside form represents a single row inside form */}
              <div className="grid">
                {/* each div inside <form> row is a wrapper for <label> + <input> */}
                <div
                  className={classNames(
                    "modal-start-project__field-wrapper",
                    "relative bg-gray-400"
                  )}
                >
                  <label
                    htmlFor="Name"
                    className="absolute"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="Name"
                    placeholder="Maksym Mokriakov"
                  />
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
