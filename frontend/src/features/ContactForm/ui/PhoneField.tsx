// import { useModalStartProjectStore } from "../model/store";

import { useSelector, useDispatch } from "react-redux";
import { type StoreType, setPhone } from "../../../app/store";

const PhoneField = () => {
  // const { phone, setPhone } = useModalStartProjectStore();
  const dispatch = useDispatch();

  const valuePhone = useSelector((state: StoreType) => state.contactForm.phone);

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPhone(e.target.value));
  };

  return (
    <input
      // value={phone}
      // onChange={(e) => setPhone(e.target.value)}
      value={valuePhone}
      onChange={handleMessageChange}
      type="text"
      id="phone"
      placeholder="+48790833877"
      className="h-9 outline-none"
    />
  );
};

export default PhoneField;
