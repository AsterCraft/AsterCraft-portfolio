import web_agency_author from "../../../../app/img/web_agency_author.avif";

const SectionAboutUs = () => {
  return (
    <section className="flex flex-col">
      <span className="label">About Us</span>
      <img
        src={web_agency_author}
        alt="Aster Craft author"
      />
    </section>
  );
};

export default SectionAboutUs;
