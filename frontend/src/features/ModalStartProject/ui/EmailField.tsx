import { useModalStartProjectStore } from "../model/store";

const EmailField = () => {
  const { email, setEmail } = useModalStartProjectStore();

  return (
    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type="email"
      id="e-mail"
      placeholder="me@gmail.com"
      className="h-9 outline-none"
    />
  );
};

export default EmailField;
