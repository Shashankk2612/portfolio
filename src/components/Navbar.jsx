import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const links = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Resume",
    "Contact",
  ];

  return (
    <nav
      className="
        sticky
        top-0
        w-full
        z-50
        border-b
        border-[var(--border)]
        bg-[var(--bg)]/85
        backdrop-blur-xl
        shadow-sm
      "
    >
      <div
        className="
          section-container
          h-[80px]
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}
        <a
          href="#home"
          className="
            text-[1.15rem]
            lg:text-[1.25rem]
            font-extrabold
            tracking-tight
            whitespace-nowrap
          "
        >
          Shashank Suryavanshi
          <span className="gradient-text">.</span>
        </a>

        {/* NAV LINKS */}
        <div
          className="
            hidden
            lg:flex
            items-center
            gap-8
          "
        >

          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="
                text-[0.95rem]
                font-medium
                muted
                hover:text-[var(--text)]
                transition-all
                duration-300
                relative
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-[var(--primary)]
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {link}
            </a>
          ))}

        </div>

        {/* THEME BUTTON */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="
            w-11
            h-11
            rounded-2xl
            surface
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:scale-105
          "
        >
          {darkMode ? (
            <FiSun size={18} />
          ) : (
            <FiMoon size={18} />
          )}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;