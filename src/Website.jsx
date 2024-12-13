import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import Aura from './Aura/Aura.jsx'
import Navigation from './Navigation/Navigation.jsx'
import NightMode from './NightMode/NightMode.jsx'
import ProjectScroller from './Projects/ProjectScroller.jsx'
import ContactForm from './ContactForm/ContactForm.jsx'
import UpArrow from './UpArrow/UpArrow.jsx'
import useLocalStorage from "use-local-storage";

function App() {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isNightMode, setIsNightMode] = useLocalStorage('IsNightMode', preference);

  return(
  <div className="Website" data-theme={isNightMode ? "dark" : "light"}>
    <div className="arrowButton">
      <UpArrow />
    </div>
    <div id="section1">
      <NightMode isNightMode={isNightMode} setIsNightMode={setIsNightMode}/>
    </div>
    <div className="desktopHeader">
      <Aura />
      <div className="header">
        <Header />
      </div>
    </div>
    <div className ="body">
      <Navigation />
      <div id="section2">
        <ProjectScroller />
      </div>
      <div id="section3">
        <ContactForm />
      </div>
    </div>
    
    <Footer />
    </div>
    
  );

}

export default App
