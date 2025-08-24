import { useSelector, useDispatch } from "react-redux";
import { setEmail, type StoreType } from "../../../app/store";

const EmailField = () => {
  const dispatch = useDispatch();

  const valueEmail = useSelector((state: StoreType) => state.contactForm.email);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };
  return (
    <input
      value={valueEmail}
      onChange={handleEmailChange}
      type="email"
      id="e-mail"
      placeholder="me@gmail.com"
      className="h-9 outline-none"
    />
  );
};

export default EmailField;
