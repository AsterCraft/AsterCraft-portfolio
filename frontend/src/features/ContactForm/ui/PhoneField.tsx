import { useModalStartProjectStore } from "../model/store";

const PhoneField = () => {
  const { phone, setPhone } = useModalStartProjectStore();

  return (
    <input
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      type="text"
      id="phone"
      placeholder="+48790833877"
      className="h-9 outline-none"
    />
  );
};

export default PhoneField;
