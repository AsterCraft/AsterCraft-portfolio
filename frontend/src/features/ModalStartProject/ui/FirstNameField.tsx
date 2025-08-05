import { useModalStartProjectStore } from "../model/store";

const FirstNameField = () => {
  const { firstName, setFirstName } = useModalStartProjectStore();

  return (
    <input
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      type="text"
      id="first-name"
      placeholder="Maksym"
      className="h-9 outline-none"
    />
  );
};

export default FirstNameField;
