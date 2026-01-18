import Section from "./components/Section";
import avatar from "../src/assets/AvatarMaker.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "./scss/General.scss";
import "./scss/components/Projects.scss";
import ScrollToSection from "./components/ScrollSection";
import ShopAppPhoto from "./assets/ShopAppPhoto.jpg";
import ListAppPhoto from "./assets/ListAppPhoto.jpg";
import QuizAppPhoto from "./assets/QuizAppPhoto.jpg";
import photo from "./assets/photo.jpg";

function App() {
  return (
    <div className="background">
      <div className="header">
        <a href="/PaulinaKuberska.pdf" download>
          <button className="menu-button" aria-label="CV">
            <FontAwesomeIcon className="menu-icon" icon={faBars} size="lg" />
            <span className="menu-text">CV</span>
          </button>
        </a>
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
                    <img className="photo" src={ShopAppPhoto} alt="ShopApp" />
                    <div className="project-name">Shop App</div>
                    <div className="project-info">
                      <h3>Shop App</h3>
                      <p>
                        A minimalist e-commerce website. My latest project,
                        still in progress. Uses MockAPI to store products and
                        custom CSS for styling.
                      </p>
                    </div>
                  </div>
                </button>
              </a>
            </div>

            <div className="project-card">
              <a href="https://list-app-amber.vercel.app/">
                <button className="project-card">
                  <div className="image-container">
                    <img className="photo" src={ListAppPhoto} alt="ListApp" />
                    <div className="project-name">List App</div>
                    <div className="project-info">
                      <h3>List app</h3>
                      <p>Simple List app where u can add and delete tasks.</p>
                    </div>
                  </div>
                </button>
              </a>
            </div>

            <div className="project-card">
              <a href="https://quiz-game-steel-six.vercel.app/">
                <button className="project-card">
                  <div className="image-container">
                    <img className="photo" src={QuizAppPhoto} alt="QuizApp" />
                    <div className="project-name">Quizz App</div>
                    <div className="project-info2">
                      <h3>Quizz</h3>
                      <p>Simple Quizz app. Still to finish.</p>
                    </div>
                  </div>
                </button>
              </a>
            </div>

            <div className="project-card">
              <a href="img">
                <button className="project-card">
                  <div className="image-container">
                    <img className="" alt="" />
                    <div className="project-name"></div>
                    <div className="project-info2">
                      <h3>In progress</h3>
                    </div>
                  </div>
                </button>
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
              Thanks for scrolling all the way down! 🤗
            </p>

            <p className="small-text">
              The projects in my portfolio are some of my very first – I hope
              you enjoy them. Until recently, I worked in the game dev industry
              as a <strong>level designer</strong> for almost three years, but
              now I want to shift my focus and fully grow as a frontend
              developer.
            </p>

            <p className="small-text">
              I’m a graduate from a practice-oriented university – each year of
              my studies included internships at IT companies, which gave me my
              first experience in the field. Since developer positions weren’t
              available at that time, I started working in game dev, but now I’m
              focusing on building React applications and developing my frontend
              skills.
            </p>

            <p className="small-text">
              Feel free to browse my portfolio and share your thoughts – I hope
              my projects will inspire you! 💻✨
            </p>
          </div>
          <img className="photo-cv" src={photo} alt="face picture" />
        </div>
      </Section>
    </div>
  );
}

export default App;
