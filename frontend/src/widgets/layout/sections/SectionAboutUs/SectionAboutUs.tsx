import classNames from "classnames";

import web_agency_author from "../../../../app/img/web_agency_author.avif";

const SectionAboutUs = () => {
  return (
    <section className={classNames("container flex flex-col pt-8 pb-16")}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-1">
          <span className="size-2 bg-black"></span>
          <h2 className="font-normal uppercase">About Us</h2>
        </div>

        <img
          src={web_agency_author}
          alt="Aster Craft author"
          // make css clamp() for the image
          className="w-[35vw] max-w-[180px] min-w-[100px] rounded-lg"
        />
      </div>
    </section>
  );
};

export default SectionAboutUs;
