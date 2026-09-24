import { useState } from "react";
import profileImageFallback from "../assets/image.png";
import backgroundCard from "../assets/images/mypic.jpg";
import useReveal from "../hooks/useReveal";

const skills = [
  { name: "React.js", mark: "R", tone: "react" },
  { name: "Java", mark: "J", tone: "java" },
  { name: "Spring Boot", mark: "S", tone: "spring" },
  { name: "Docker", mark: "D", tone: "docker" },
  { name: "Vue.js", mark: "V", tone: "vue" },
  { name: "Laravel", mark: "L", tone: "laravel" },
];

function Home({
  isKhmer,
  profileImage = profileImageFallback,
  secondaryImage,
  role,
  location,
}) {
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [sectionRef, isRevealed] = useReveal();

  return (
    <section
      id="home"
      ref={sectionRef}
      className={`reveal-section mx-auto grid min-h-[calc(100vh-81px)] max-w-6xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] ${isRevealed ? "is-revealed" : ""}`}
    >
      <div className="home-copy-entrance order-2 max-w-2xl lg:order-1">
        <p className="section-kicker">Portfolio</p>
        <div className="mt-8">
          <div className="mt-4">
            <div className="fx-typewriter">WEBDEVELOPER</div>
          </div>
          <div className="mt-4">
            <h1 className="fx-aurora font-extrabold leading-tight">
              "Hi, I'm Seum Sokneth. I build modern web experiences with React
              and Spring Boot."
            </h1>
          </div>
        </div>
        <p className="mt-6 max-w-xl text-base leading-8 text-(--muted)">
          {isKhmer
            ? "ខ្ញុំចូលចិត្តសាងសង់ UI ស្អាតៗ និង backend services ដែលមានរចនាសម្ព័ន្ធច្បាស់លាស់ សម្រាប់ projects ដែលអាចប្រើការពិតបាន។"
            : "I enjoy building polished interfaces and structured backend services for projects that solve real problems."}
        </p>
        <a
          href="/resume.pdf"
          download="SeumSokneth_Cv.pdf"
          className="mt-8 inline-flex items-center rounded-full border border-(--accent) px-5 py-3 text-sm font-semibold text-(--accent) transition hover:bg-(--accent) hover:text-(--surface)"
        >
          Download CV
        </a>
        <div className="mt-10 flex flex-wrap gap-8 text-sm text-(--muted)">
          <div>
            <p className="font-semibold text-(--text)">01+</p>
            <p>{isKhmer ? "ឆ្នាំនៃការអនុវត្ត" : "Years practicing"}</p>
          </div>
          <div>
            <p className="font-semibold text-(--text)">React + Java</p>
            <p>{role}</p>
          </div>
          <div>
            <p className="font-semibold text-(--text)">Remote</p>
            <p>{location}</p>
          </div>
        </div>
      </div>

      <div className="student-card-stage student-card-arrival order-1 relative flex justify-center lg:order-2 lg:justify-end">
        <div className="student-card-hanging">
          <img
            className="student-card-background-image"
            src={backgroundCard}
            alt=""
            aria-hidden="true"
          />
          <button
            type="button"
            className={`student-card ${isCardFlipped ? "is-flipped" : ""}`}
            onClick={() => setIsCardFlipped((current) => !current)}
            aria-label={
              isCardFlipped
                ? "Show student card front"
                : "Show student card skills"
            }
            aria-pressed={isCardFlipped}
          >
            <span className="student-card-hook" aria-hidden="true" />

            {/* Card Front Side */}
            <div className="student-card-side student-card-front">
              <span className="student-card-hole" />
              <h2 className="student-card-title">
                STUDENT
                <br />
                DEVELOPER CARD
              </h2>
              <img
                className="student-card-profile-image"
                src={profileImage}
                alt="Seum Sokneth"
              />
              <div className="student-card-secondary-content">
                <img
                  className="student-card-secondary-image"
                  src="https://images.prismic.io/turing/aAsoBPIqRLdaBmLZ_016-Blog_Hero_1232-770.png?auto=format,compress"
                  alt="Spring and Spring Boot"
                />
              </div>
              <span className="student-card-name">SEUM SOKNETH</span>
              <span className="student-card-role">{role}</span>
            </div>

            {/* Card Back Side */}
            <div
              className="student-card-side student-card-back"
              aria-hidden={!isCardFlipped}
            >
              <h2 className="student-card-back-title">MY SKILLS</h2>
              <div className="student-skill-grid">
                {skills.map((skill) => (
                  <div className="student-skill" key={skill.name}>
                    <span
                      className={`student-skill-mark student-skill-${skill.tone}`}
                    >
                      {skill.mark}
                    </span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
              <span className="student-card-back-name">SEUM / 2026</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
