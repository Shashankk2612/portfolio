import { experiences } from "../data/portfolioData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="section-spacing"
    >
      <div className="section-container">

        <div className="max-w-3xl mb-16">

          <div className="section-label mb-4">
            EXPERIENCE
          </div>

          <h2 className="heading-lg mb-6">
            Professional experience building
            scalable enterprise software solutions.
          </h2>

        </div>

        <div className="space-y-8">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="project-enterprise-card mb-4"
            >

              <div className="mb-8">

                <h3 className="project-title mb-2">
                  {exp.company}
                </h3>

                <div className="project-category">
                  {exp.role}
                </div>

              </div>

              <div className="space-y-4">

                {exp.description.map((item, idx) => (
                  <div
                    key={idx}
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
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;