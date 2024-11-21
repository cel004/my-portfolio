import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import Aura from './Aura/Aura.jsx'
import Navigation from './Navigation/Navigation.jsx'
import NightMode from './NightMode/NightMode.jsx'
import Scroll from './Scroll/Scroll.jsx'
import Projects from './Projects/Projects.jsx'
import ContactForm from './ContactForm/ContactForm.jsx'


function App() {

  return(
    <>
    <div id="section1">
      <NightMode />
    </div>
    <Aura />
    <Header />
    <Scroll />
    <Navigation />
    <div id="section2">
      <Projects />
    </div>
      <div id="section3">
    <ContactForm />
    </div>
    
    <Footer />
    </>
    
  );

}

export default App
