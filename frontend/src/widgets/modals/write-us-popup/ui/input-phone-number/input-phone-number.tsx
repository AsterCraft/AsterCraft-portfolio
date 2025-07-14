import "./input-phone-number.scss";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const InputPhoneNumber = ({ value, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Удаляем все нецифровие символи
    const inputValue = e.target.value.replace(/\D/g, "").slice(0, 9);

    // Обновляем родительский компонент
    onChange(inputValue);
  };

  const className = "input-phone-number light";

  return (
    <div className="input-p-n">
      <input
        className={className}
        type="tel"
        id="phone"
        name="phone"
        value={value}
        onChange={handleChange}
        placeholder="Your telephone number"
        pattern="^[0-9]{9}$"
        autoComplete="tel"
        required
      />
    </div>
  );
};

export default InputPhoneNumber;
