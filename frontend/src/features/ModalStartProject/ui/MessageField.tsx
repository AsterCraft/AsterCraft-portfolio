import { textAreaStyles } from "../lib/styles";
import { useModalStartProjectStore } from "../model/store";

const MessageField = () => {
  const { message, setMessage } = useModalStartProjectStore();

  return (
    <textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      name="Project_Details"
      id="Project-Details"
      placeholder="Describe your project"
      className={textAreaStyles}
    ></textarea>
  );
};

export default MessageField;
