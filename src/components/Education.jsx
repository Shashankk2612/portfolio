const educationList = [
  "MCA from Indira Gandhi National Open University.",
  "BCA from Indira Gandhi National Open University.",
  "GNIIT Diploma from NIIT.",
  "12th from Central Board of Secondary Education.",
  "10th from Central Board of Secondary Education.",
];

const Education = () => {
  return (
    <section
      id="education"
      className="section-spacing"
    >
      <div className="section-container">

        <div className="max-w-3xl mb-16">

          <div className="section-label mb-4">
            EDUCATION
          </div>

          <h2 className="heading-lg mb-6">
            Academic background and
            professional learning.
          </h2>

        </div>

        <div className="project-enterprise-card">

          <div className="space-y-5">

            {educationList.map((item, index) => (
              <div
                key={index}
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
    </section>
  );
};

export default Education;