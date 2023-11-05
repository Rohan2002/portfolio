import IntroductionPage from "../src/components/introduction";
import AboutMe from "../src/components/aboutme";
import Experiences from "../src/components/experience";
import Projects from "../src/components/projects";

import './App.css';
import SideBar from '../src/components/sidebar';
import Footer from "./components/footer";
import Skills from "./components/skills";

function App() {
  return (
    <div className='root-container'>
      <div className='sidebar-container'>
        <SideBar />
        <div className='content-div'>
          <section id="home">
            <IntroductionPage />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="experience">
            <Experiences />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="footer">
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
