type ContactItemProps = {
  label: string;
  value: string;
  link: string;
};

const ContactItem = ({ label, value, link }: ContactItemProps) => {
  return (
    <div>
      <p className="mb-1 text-zinc-600">{label}</p>
      <a href={link}>{value}</a>
    </div>
  );
};

export default ContactItem;
