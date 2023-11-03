import IntroductionPage from "../src/components/introduction";
import AboutMe from "../src/components/aboutme";
import Experiences from "../src/components/experience";

import './App.css';
import SideBar from '../src/components/sidebar';

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
          <section id="experience">
            <Experiences />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
