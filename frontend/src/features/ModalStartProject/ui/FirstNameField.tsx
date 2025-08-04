import { useModalStartProjectStore } from "../model/store";

const FirstNameField = () => {
  const { firstName, setFirstName } = useModalStartProjectStore();
  return (
    <input
      className="h-9 outline-none"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      type="text"
      id="first-name"
      placeholder="Maksym"
    />
  );
};

export default FirstNameField;
