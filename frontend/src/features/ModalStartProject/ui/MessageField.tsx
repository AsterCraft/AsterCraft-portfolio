import { textAreaStyles } from "../lib/styles";

const MessageField = () => {
  return (
    <textarea
      name="Project_Details"
      id="Project-Details"
      placeholder="Describe your project"
      className={textAreaStyles}
    ></textarea>
  );
};

export default MessageField;
