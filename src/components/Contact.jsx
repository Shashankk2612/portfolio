import { personalInfo } from "../data/portfolioData";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-spacing"
    >
      <div className="section-container">

        <div className="project-enterprise-card">

          <div className="max-w-3xl">

            <div className="section-label mb-4">
              CONTACT
            </div>

            <h2 className="heading-lg mb-6">
              Let’s build scalable
              enterprise solutions together.
            </h2>

            <p className="text-large muted mb-10">
              Open for enterprise projects,
              freelance opportunities and
              long-term collaborations.
            </p>

            <div className="space-y-6">

              <div>
                <div className="text-sm muted mb-2">
                  Email
                </div>

                <div className="heading-md">
                  <a
                    href="mailto:samshashank1995@gmail.com"
                    className="
                      text-[var(--primary)]
                      font-semibold
                      hover:underline
                    "
                  >
                    samshashank1995@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <div className="text-sm muted mb-2">
                  Location
                </div>

                <div className="heading-md">
                  {personalInfo.location}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;