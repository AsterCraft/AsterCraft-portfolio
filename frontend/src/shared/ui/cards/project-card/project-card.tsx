import cn from "classnames";

import s from "./project-card.module.scss";

interface Props {
  content: {
    url: string;
    imgPath: string;
    name: string;
    description: string;
  };

  direction?: "title-left" | "title-right";
}

const ProjectCard = ({ content, direction = "title-left" }: Props) => {
  return (
    <article
      className={cn(s.projectCard, {
        [s.titleRight]: direction === "title-right",
      })}
    >
      <h3 className={s.projectName}>
        <a
          href={content.url}
          className={s.projectNameLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.name}
        </a>
      </h3>

      <figure className={s.projectFigure}>
        <a
          href={content.url}
          className={s.projectImgLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${content.name} website`}
        >
          <img
            src={content.imgPath}
            alt={content.description}
            className={s.projectImg}
            loading="lazy"
            decoding="async"
          />
        </a>

        <figcaption className={s.projectDescription}>
          {content.description}
        </figcaption>
      </figure>
    </article>
  );
};

export default ProjectCard;
