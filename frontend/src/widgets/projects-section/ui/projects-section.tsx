import cn from "classnames";
import { useTranslation } from "react-i18next";

import { ProjectCard } from "@shared/ui/cards";

import s from "./projects-section.module.scss";
import gs from "@shared/styles/global.module.scss";

const ProjectsSection = () => {
  const { t } = useTranslation("projectsSection");

  return (
    <section className={s.projectsSection}>
      <div className={cn(s.wrapper, gs.container)}>
        <h2>{t("title")}</h2>

        <ul className={s.projectList}>
          {t("projects", { returnObjects: true }).map((project, i) => (
            <li
              className={s.project}
              key={project.name}
            >
              <ProjectCard
                content={{
                  url: project.url,
                  imgPath: project.img,
                  name: project.name,
                  description: project.description,
                }}
                direction={i & 1 ? "title-right" : "title-left"}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
