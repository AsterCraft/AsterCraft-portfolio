import cn from "classnames";

import { LabelToSection } from "@shared/ui/typography";

import { dataProjects } from "@shared/lib/constants";

const SectionProjects = () => {
  return (
    <section
      className="Container my-15"
      id="SectionProjects"
    >
      <LabelToSection text="проекти" />

      <section
        className={cn("grid grid-cols-1 gap-5", "md:grid-cols-2", "xl:gap-10")}
      >
        {dataProjects.map((project, index) => (
          <a
            href={project.url}
            target="_blank"
            key={index}
          >
            <div className="w-full] relative h-[300px]">
              {/* image wrapper */}
              <img
                className="h-full w-full rounded-lg object-cover"
                src={project.imgBg}
                alt={project.subtitle}
              />
              <img
                className="absolute top-1/2 left-1/2 max-h-[70%] max-w-[80%] min-w-[300px] -translate-x-1/2 -translate-y-1/2 transform rounded-lg"
                src={project.imgWebsite}
                alt={project.subtitle}
              />
            </div>
            <div>
              <h3 className="text-xl font-medium">{project.title}</h3>
              <h4 className="text-zinc-600">{project.subtitle}</h4>
            </div>
          </a>
        ))}
      </section>
    </section>
  );
};

export default SectionProjects;
