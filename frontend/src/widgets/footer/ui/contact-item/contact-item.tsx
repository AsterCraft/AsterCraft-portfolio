import s from "./contact-item.module.scss";

type ContactItemProps = {
  label: string;
  value: string;
  link: string;
};

export const ContactItem = ({ label, value, link }: ContactItemProps) => {
  return (
    <li>
      <p className="mb-1 text-nowrap text-zinc-600">{label}</p>
      <a
        className={s.link}
        href={link}
        target="_blank"
      >
        {value}
      </a>
    </li>
  );
};
