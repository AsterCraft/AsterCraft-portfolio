import { useModalStartProjectStore } from "../model/store";

const LastNameField = () => {
  const { lastName, setLastName } = useModalStartProjectStore();

  return (
    <input
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      type="text"
      id="last-name"
      placeholder="Mokriakov"
      className="h-9 outline-none"
    />
  );
};

export default LastNameField;
