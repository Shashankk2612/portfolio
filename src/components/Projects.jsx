import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-spacing"
    >
      <div className="section-container">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">

          <div className="section-label mb-4">
            PROJECTS
          </div>

          <h2 className="heading-lg mb-6">
            Enterprise applications and
            scalable platforms built across
            multiple domains.
          </h2>

          <p className="text-large muted">
            Extensive experience developing
            banking systems, logistics platforms,
            manufacturing solutions, project
            management systems and AI-driven
            enterprise applications.
          </p>

        </div>

        {/* PROJECTS */}
        <div className="space-y-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                project-enterprise-card mb-4
              "
            >

              {/* TOP */}
              <div
                className="
                  flex
                  flex-col
                  lg:flex-row
                  lg:items-start
                  lg:justify-between
                  gap-6
                  mb-8
                "
              >

                <div>

                  <div className="project-category mb-3">
                    {project.category}
                  </div>

                  <h3 className="project-title mb-4">
                    {project.title}
                  </h3>

                  <p
                    className="
                      text-body
                      muted
                      max-w-3xl
                    "
                  >
                    {project.description}
                  </p>

                </div>

                <div className="project-duration">
                  {project.duration}
                </div>

              </div>

              {/* TECHNOLOGIES */}
              <div className="mb-8">

                <h4 className="project-subtitle mb-4">
                  Technologies
                </h4>

                <div className="flex flex-wrap gap-3">

                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="project-tech"
                    >
                      {tech}
                    </div>
                  ))}

                </div>

              </div>

              {/* HIGHLIGHTS */}
              <div className="mb-8">

                <h4 className="project-subtitle mb-4">
                  Key Highlights
                </h4>

                <div className="grid md:grid-cols-2 gap-4">

                  {project.highlights.map((item) => (
                    <div
                      key={item}
                      className="project-highlight"
                    >
                      {item}
                    </div>
                  ))}

                </div>

              </div>

              {/* RESPONSIBILITIES */}
              <div>

                <h4 className="project-subtitle mb-4">
                  Responsibilities
                </h4>

                <div className="space-y-3">

                  {project.responsibilities.map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >

                      <div className="project-dot"></div>

                      <p className="muted">
                        {item}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;