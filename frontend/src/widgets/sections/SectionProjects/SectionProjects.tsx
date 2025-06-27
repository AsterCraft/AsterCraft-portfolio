import BulletBlackSquare from "../../../shared/ui/bullets/BulletBlackSquare/BulletBlackSquare";

import dataProjects from "../../../shared/data/dataProjects";

const SectionProjects = () => {
  return (
    <section className="Container my-15">
      <h2>
        <BulletBlackSquare />
        <span className="uppercase">projects</span>
      </h2>

      <section>
        {dataProjects.map((project, index) => (
          <article key={index}>
            <div className="w-full] relative h-[300px]">
              {/* image wrapper */}
              <img
                className="h-full w-full rounded-lg object-cover"
                src={project.imgBg}
                alt={project.subtitle}
              />
              <img
                className="absolute top-1/2 left-1/2 max-h-[70%] max-w-[80%] -translate-x-1/2 -translate-y-1/2 transform"
                src={project.imgWebsite}
                alt={project.subtitle}
              />
            </div>
            <div>
              <h3 className="text-xl font-medium">{project.title}</h3>
              <h4 className="text-zinc-600">{project.subtitle}</h4>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default SectionProjects;
