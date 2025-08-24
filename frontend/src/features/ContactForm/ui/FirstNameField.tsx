// import { useModalStartProjectStore } from "../model/store";

import { useDispatch, useSelector } from "react-redux";
import { setFirstName, type StoreType } from "../../../app/store";

const FirstNameField = () => {
  // const { firstName, setFirstName } = useModalStartProjectStore();
  const dispatch = useDispatch();

  const valueFirstName = useSelector(
    (state: StoreType) => state.contactForm.firstName
  );

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFirstName(e.target.value));
  };

  return (
    <input
      // value={firstName}
      // onChange={(e) => setFirstName(e.target.value)}
      value={valueFirstName}
      onChange={handleFirstNameChange}
      type="text"
      id="first-name"
      placeholder="Maksym"
      className="h-9 outline-none"
    />
  );
};

export default FirstNameField;
