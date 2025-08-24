import { textAreaStyles } from "../lib/styles";
// import { useModalStartProjectStore } from "../model/store";
import { useSelector, useDispatch } from "react-redux";
import { type StoreType, setMessage } from "../../../app/store";

const MessageField = () => {
  // const { message, setMessage } = useModalStartProjectStore();

  const dispatch = useDispatch();

  const valueMessage = useSelector(
    (state: StoreType) => state.contactForm.message
  );

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setMessage(e.target.value));
  };

  return (
    <textarea
      // value={message}
      // onChange={(e) => setMessage(e.target.value)}
      value={valueMessage}
      onChange={handleMessageChange}
      name="Project_Details"
      id="Project-Details"
      placeholder="Describe your project"
      className={textAreaStyles}
    ></textarea>
  );
};

export default MessageField;
