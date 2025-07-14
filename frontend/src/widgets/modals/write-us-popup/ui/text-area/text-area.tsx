import "./text-area.scss";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const TextArea = ({ value, onChange }: Props) => {
  const className = "text-area light";
  return (
    <>
      <textarea
        className={className}
        name="message"
        placeholder="Any additional information that will help us contact you"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
      />
    </>
  );
};

export default TextArea;
