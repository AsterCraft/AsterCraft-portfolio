import { ContactItem } from "../contact-item/contact-item";

import s from "./section-contact.module.scss";

export const SectionContact = () => {
  return (
    <section
      className={s.sectionContact}
      id="SectionContact"
    >
      <ul className={s.contactList}>
        <ContactItem
          label="phone"
          value="+48 790 839 872"
          link="tel:+48790839872"
        />

        <ContactItem
          label="e-mail"
          value="astercraft.dev@gmail.com"
          link="mailto:astercraft.dev@gmail.com"
        />

        <ContactItem
          label="telegram"
          value="@AsterCraft"
          link="https://t.me/AsterCraft"
        />
      </ul>

      <div>
        <p className="mb-1 text-zinc-600">© 2025</p>

        {/* to do: <Link /> to page DataProtection */}
        <div className="cursor-pointer">Данні захищені</div>
      </div>
    </section>
  );
};
