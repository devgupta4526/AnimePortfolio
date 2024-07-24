
import { useContext } from "react";
import { MobileContext } from "./utils/Context";
import NewHero from "./components/NewHero";
import ProjectSection from "./components/ProjectSection";
import AboutMe from "./pages/AboutMe";
import WorkExperience from "./pages/WorkExperience";
import LocomotiveScroll from 'locomotive-scroll';
import MouseCursor from "./components/MouseCursor";
import Skills from "./components/Skills";
import NavBar from "./components/NavBar";
import NewSkills from "./components/NewSkills";


const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

function App() {
  const { isLoading,isMobile} = useContext(MobileContext);
  const locomotiveScroll = new LocomotiveScroll();


  return (
    <>
    { !isMobile && <MouseCursor/>}
    { !isMobile && <NavBar navItems={navItems}/> }
    <NewHero/>
    <AboutMe/>
    <WorkExperience/>
    <Skills/>
    <ProjectSection/>
    <NewSkills/>

    </>
  )
}

export default App
