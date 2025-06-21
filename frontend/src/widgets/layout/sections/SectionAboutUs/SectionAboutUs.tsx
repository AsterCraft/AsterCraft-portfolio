import classNames from "classnames";

import web_agency_author from "../../../../app/img/web_agency_author.avif";

const SectionAboutUs = () => {
  return (
    <section className={classNames("container flex flex-col pt-8 pb-16")}>
      <div className="mb-16 flex items-start justify-between">
        <div className="flex items-center gap-1">
          {/* black square */}
          <span className="size-2 bg-black"></span>
          <h3 className="font-normal uppercase">About Us</h3>
        </div>

        <img
          src={web_agency_author}
          alt="Aster Craft author"
          // make css clamp() for the image
          className="w-[35vw] max-w-[180px] min-w-[100px] rounded-lg"
        />
      </div>

      <h2 className="mb-6 text-2xl">Hi, we’re Aster Craft</h2>
      <p className="text-lg text-zinc-600">
        A small web studio from Łódź. <br />
        We design and build modern websites using React, TypeScript, and clean
        code. <br />
        Every project is fast, focused, and fully tailored to the client — from
        personal sites to full business solutions.
      </p>
    </section>
  );
};

export default SectionAboutUs;
