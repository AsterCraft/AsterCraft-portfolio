import ButtonStartProject from "../../../shared/ui/buttons/ButtonStartProject/ButtonStartProject";
import LightDivider from "../../../shared/ui/lines/LightDivider/LightDivider";

const Footer = () => {
  return (
    <footer className="Container">
      <section>
        <h2>
          Let’s talk about your project – and make something really good out of
          it!
        </h2>
        <ButtonStartProject />
      </section>

      <LightDivider />

      <section>
        <div>
          <p>phone</p>
          <a href="tel:+48790839872">+48 790 839 872</a>
        </div>
        <div>
          <p>e-mail</p>
          <a href="mailto:astercraft.dev@gmail.com">astercraft.dev@gmail.com</a>
        </div>
        <div>
          <p>© 2025</p>

          {/* to do: <Link /> to page DataProtection */}
          <div>Data protection</div>
        </div>
      </section>

      <h2>ASTERCRAFT</h2>
    </footer>
  );
};

export default Footer;
