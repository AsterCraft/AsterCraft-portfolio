import classNames from "classnames";

import ButtonStartProject from "../../../../shared/ui/buttons/ButtonStartProject";
import BulletBlackSquare from "../../../../shared/ui/bullets/BulletBlackSquare/BulletBlackSquare";

import imgWebAgencyAuthor from "../../../../app/img/web_agency_author.avif";

const SectionAboutUs = () => {
  return (
    <section
      className={classNames(
        "Container flex flex-col gap-18 pt-8 pb-16",
        "sm:flex-row sm:gap-[15%]"
      )}
    >
      <div
        className={classNames(
          "flex items-start justify-between",
          "sm:flex-col"
        )}
      >
        <div className="flex items-center gap-1">
          <BulletBlackSquare />
          <h3 className="font-normal uppercase">About Us</h3>
        </div>

        <img
          src={imgWebAgencyAuthor}
          alt="Aster Craft author"
          // make css clamp() for the image
          className="w-[clamp(100px,35vw,170px)] rounded-lg"
        />
      </div>

      <div className="flex flex-col">
        <h2 className="mb-6 text-2xl">Hi, we’re Aster Craft.</h2>
        <p className="text-lg text-zinc-600">
          A small web studio from Łódź. <br />
          We design and build modern websites using React, TypeScript, and clean
          code.
        </p>
        <p className="mb-9 text-lg text-zinc-600">
          Every project is fast, focused, and fully tailored to the client —
          from personal sites to full business solutions.
        </p>

        <ButtonStartProject />
      </div>
    </section>
  );
};

export default SectionAboutUs;
