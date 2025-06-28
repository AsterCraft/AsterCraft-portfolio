import classNames from "classnames";

import ButtonStartProject from "../../../../shared/ui/buttons/ButtonStartProject";
import BulletBlackSquare from "../../../../shared/ui/bullets/BulletBlackSquare/BulletBlackSquare";

import imgWebAgencyAuthor from "../../../../app/img/web_agency_author.avif";

const SectionAboutUs = () => {
  return (
    <section
      className={classNames(
        "Container flex flex-col gap-18 pt-8 pb-16",
        "sm:flex-row"
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
          <h3 className="text-[clamp(1rem,0.6vw+0.5rem,1.4rem)] font-normal uppercase">
            About Us
          </h3>
        </div>

        <img
          src={imgWebAgencyAuthor}
          alt="Aster Craft author"
          // simulate css clamp() for the image
          // clamp() as an arbitrary value doesnt work properly for width with multiple breakpoints
          className={classNames(
            "w-[30vw] max-w-39 min-w-15 rounded-lg",
            "sm:w-[15vw] sm:min-w-25"
          )}
        />
      </div>

      {/* container with text */}
      <div className="mx-auto flex max-w-160 flex-col">
        <h2
          className={classNames(
            "mb-6 text-[clamp(1.5rem,5.5vw+0.25rem,1.75rem)] leading-snug",
            "sm:text-[clamp(1.75rem,3.5vw+0.25rem,2.25rem)]",
            "lg:text-[clamp(2.25rem,2.5vw+0.25rem,2.75rem)]"
          )}
        >
          Hi, we’re Aster Craft.
          <br />A small web studio from Łódź.
        </h2>

        <p className="text-lg text-zinc-600">
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
