import classNames from "classnames";

import ButtonStartProject from "../../../shared/ui/buttons/ButtonStartProject/ButtonStartProject";
import DividerBetweenSections from "../../../shared/ui/lines/DividerBetweenSections";

const Footer = () => {
  return (
    <footer className="Container mt-30">
      <section className="sm: flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <h2 className={"max-w-[900px] text-[clamp(1.5rem,4vw,2.5rem)]"}>
          Let’s talk about your project – and make something really good out of
          it!
        </h2>
        <ButtonStartProject
          className={classNames(
            "ml-auto transition-transform duration-300",
            "xl:origin-right xl:scale-150"
          )}
        />
      </section>

      <DividerBetweenSections className="mt-10 mb-10" />

      <section>
        <div>
          <p className="text-zinc-600">phone</p>
          <a href="tel:+48790839872">+48 790 839 872</a>
        </div>
        <div>
          <p className="text-zinc-600">e-mail</p>
          <a href="mailto:astercraft.dev@gmail.com">astercraft.dev@gmail.com</a>
        </div>
        <div>
          <p className="text-zinc-600">© 2025</p>

          {/* to do: <Link /> to page DataProtection */}
          <div>Data protection</div>
        </div>
      </section>

      <h2>ASTERCRAFT</h2>
    </footer>
  );
};

export default Footer;
