import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import profileImage from "../assets/shashank_img.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        pt-24
      "
    >
      <div className="section-container">

        <div
          className="
            hero-layout
          "
        >

          {/* LEFT CONTENT */}
          <motion.div
            className="
              hero-content
            "
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            <div className="section-label mb-5">
              SENIOR FULL STACK DEVELOPER
            </div>

            <h1
              className="
                heading-xl
                mb-6
              "
            >
              Building scalable
              enterprise software
              solutions with
              modern technologies.
            </h1>

            <p
              className="
                text-large
                muted
                hero-description
              "
            >
              {personalInfo.description}
            </p>

            {/* BUTTONS */}
            <div className="hero-buttons">

              <a
                href="#projects"
                className="btn-primary"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="btn-secondary"
              >
                Contact Me
              </a>

            </div>

            {/* STATS */}
            <div className="hero-stats">

              {[
                {
                  value: "7+",
                  label: "Years Experience",
                },

                {
                  value: "15+",
                  label: "Enterprise Projects",
                },

                {
                  value: "10+",
                  label: "Technologies",
                },

                {
                  value: "5+",
                  label: "Domains",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="stat-card"
                >

                  <div className="stat-value gradient-text">
                    {item.value}
                  </div>

                  <div className="stat-label">
                    {item.label}
                  </div>

                </div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="
              hero-image-section
            "
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >

            <div className="hero-image-wrapper">

              {/* BACKGROUND GLOW */}
              <div className="hero-image-glow"></div>

              {/* IMAGE */}
              <img
                src={profileImage}
                alt={personalInfo.name}
                className="hero-image"
              />

              {/* FLOATING CARD */}
              <div className="hero-floating-card">

                <div className="hero-floating-dot"></div>

                <div>

                  <div className="hero-floating-title">
                    Available for Work
                  </div>

                  <div className="hero-floating-subtitle">
                    Enterprise Projects & Freelance
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;