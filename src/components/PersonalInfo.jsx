const details = [
  {
    title: "Marital Status",
    value: "Married",
  },
  {
    title: "Languages Known",
    value: "Hindi, English",
  },
];

const PersonalInfo = () => {
  return (
    <section
      id="personal"
      className="section-spacing"
    >
      <div className="section-container">

        <div className="max-w-3xl mb-16">

          <div className="section-label mb-4">
            PERSONAL INFORMATION
          </div>

          <h2 className="heading-lg mb-6">
            Additional personal and
            professional details.
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {details.map((item) => (
            <div
              key={item.title}
              className="project-enterprise-card"
            >

              <div className="text-sm muted mb-3">
                {item.title}
              </div>

              <div className="heading-md">
                {item.value}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PersonalInfo;