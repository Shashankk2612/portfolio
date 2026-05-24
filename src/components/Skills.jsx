import { technologies } from "../data/portfolioData";

const sections = [
  {
    title: "Web Technologies",
    data: technologies.webTechnologies,
  },
  {
    title: "Frontend & Scripting",
    data: technologies.scripting,
  },
  {
    title: "Architecture",
    data: technologies.architectures,
  },
  {
    title: "Databases",
    data: technologies.databases,
  },
  {
    title: "Cloud & Deployment",
    data: technologies.cloud,
  },
  {
    title: "Tools & Utilities",
    data: technologies.tools,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="section-spacing"
    >
      <div className="section-container">

        <div className="max-w-3xl mb-16">

          <div className="section-label mb-4">
            TECHNICAL EXPERTISE
          </div>

          <h2 className="heading-lg mb-6">
            Technologies, architecture
            patterns and tools used in
            enterprise application development.
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {sections.map((section) => (
            <div
              key={section.title}
              className="project-enterprise-card"
            >

              <h3 className="heading-md mb-6">
                {section.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {section.data.map((item) => (
                  <div
                    key={item}
                    className="project-tech"
                  >
                    {item}
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

export default Skills;