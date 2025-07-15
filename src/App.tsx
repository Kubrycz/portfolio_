import Section from "./components/Section";
import avatar from "../src/assets/AvatarMaker.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./scss/General.scss";
import "./scss/components/Projects.scss";
import ScrollToSection from "./components/ScrollSection";
import ShopAppPhoto from "./assets/ShopAppPhoto.jpg";

function App() {
  function funcTEst(): void {
    throw new Error("Function not implemented.");
  }

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

        <button className="scroll-down-arrow" onClick={ScrollToSection}>
          <FontAwesomeIcon icon={faChevronDown} size="2x" />
        </button>
      </Section>
      <Section>
        <div className="scrollAbout-section" id="scrollAbout-section">
          <div className="projects-grid">
            <div className="project-card">
              <a href="https://shop-app-kubryczs-projects.vercel.app/">
                <button className="project-card">
                  <div className="image-container">
                    <img className="photo" src={ShopAppPhoto} alt="" />
                    <div className="project-name">Shop app</div>
                  </div>
                </button>
              </a>
            </div>

            <div className="project-card">
              <a href="https://list-app-amber.vercel.app/">
                <button className="project-card">Project 2</button>
              </a>
            </div>

            <div className="project-card">
              <a href="https://quiz-game-steel-six.vercel.app/">
                <button className="project-card">Project 3</button>
              </a>
            </div>

            <div className="project-card">
              <a href="https://shop-app-kubryczs-projects.vercel.app/">
                <button className="project-card">Project 4</button>
              </a>
            </div>
          </div>
        </div>
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
      </Section>
    </div>
  );
}

export default App;
