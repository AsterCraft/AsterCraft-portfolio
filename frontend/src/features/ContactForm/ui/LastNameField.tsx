import { useSelector, useDispatch } from "react-redux";
import { setLastName, type StoreType } from "../../../app/store";

// import { useModalStartProjectStore } from "../model/store";

const LastNameField = () => {
  // const { lastName, setLastName } = useModalStartProjectStore();

  const dispatch = useDispatch();

  const valueLastName = useSelector(
    (state: StoreType) => state.contactForm.lastName
  );

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLastName(e.target.value));
  };

  return (
    <input
      // value={lastName}
      // onChange={(e) => setLastName(e.target.value)}
      value={valueLastName}
      onChange={handleLastNameChange}
      type="text"
      id="last-name"
      placeholder="Mokriakov"
      className="h-9 outline-none"
    />
  );
};

export default LastNameField;
