import "./input.scss";

type Props = {
  value: string;
  onChange: (value: string) => void;
  type: string;
  name: string;
  placeholder: string;
};

const Input = ({ value, onChange, type, name, placeholder }: Props) => {
  const className = "input light";
  return (
    <>
      <input
        className={className}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
