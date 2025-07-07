import Section from "./components/Section";
import avatar from "../src/assets/AvatarMaker.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./scss/General.scss";

function App() {
  return (
    <div className="background">
      <div className="header">
        <button className="menu-button" aria-label="Menu">
          <FontAwesomeIcon icon={faBars} size="lg" color="#E96269" />
        </button>
      </div>
      <Section>
        <div className="flex-container">
          <div className="text-block">
            <h1 className="headline-text">
              Hello! <span>I'm Paulina 👋</span>
            </h1>
            <p className="small-text">
              {" "}
              Aspiring{" "}
              <span className="small-text-pink">front-end developer</span>{" "}
              currently developing skills<br></br> in React and TypeScript.✨
            </p>
          </div>
          <img className="avatar" src={avatar} alt="avatar" />
        </div>

        <button className="scroll-down-arrow">
          <FontAwesomeIcon icon={faChevronDown} size="2x" />
        </button>
      </Section>

      <Section>
        <div className="projects-grid">
          <div className="project-card">Project 1</div>
          <div className="project-card">Project 2</div>
          <div className="project-card">Project 3</div>
          <div className="project-card">Project 4</div>
        </div>

        <button className="scroll-down-arrow">
          <FontAwesomeIcon icon={faChevronDown} size="2x" />
        </button>
      </Section>

      <Section>
        <div className="flex-container">
          <div className="text-block">
            <h1 className="headline-text">About me 🌸</h1>
            <p className="small-text">
              {" "}
              Aspiring currently developing skills<br></br> in React and
              TypeScript.✨
            </p>
          </div>
          <img className="avatar" src={avatar} alt="avatar" />
        </div>

        <button className="scroll-down-arrow">
          <FontAwesomeIcon icon={faChevronDown} size="2x" />
        </button>
      </Section>
    </div>
  );
}

export default App;
