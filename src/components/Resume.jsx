import { motion } from "framer-motion";
import {
  FiDownload,
  FiExternalLink,
  FiFileText,
} from "react-icons/fi";

import resumeFile from "../assets/resume.pdf";

const Resume = () => {
  return (
    <section
      id="resume"
      className="section-spacing"
    >
      <div className="section-container">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >

          <div className="section-label mb-4">
            RESUME
          </div>

          <h2 className="heading-lg mb-6">
            Professional Resume &
            Career Overview
          </h2>

          <p className="text-large muted">
            Explore my professional experience,
            enterprise projects, technical skills,
            and architecture expertise in a clean,
            downloadable resume format.
          </p>

        </motion.div>

        {/* RESUME CARD */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="resume-wrapper"
        >

          {/* TOP BAR */}
          <div className="resume-topbar">

            <div className="resume-title-wrapper">

              <div className="resume-icon">

                <FiFileText size={24} />

              </div>

              <div>

                <h3 className="resume-title">
                  Shashank_Suryavanshi_Resume.pdf
                </h3>

                <p className="resume-subtitle">
                  Enterprise Full Stack Developer Resume
                </p>

              </div>

            </div>

            <div className="resume-actions">

              <a
                href={resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn-primary"
              >
                <FiExternalLink />
                Open
              </a>

              <a
                href={resumeFile}
                download="Shashank_Suryavanshi_Resume.pdf"
                className="resume-btn-secondary"
              >
                <FiDownload />
                Download
              </a>

            </div>

          </div>

          {/* PDF PREVIEW */}
          <div className="resume-preview">

            <iframe
              src={resumeFile}
              title="Resume Preview"
              className="resume-iframe"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Resume;