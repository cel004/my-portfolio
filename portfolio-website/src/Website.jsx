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
    <NightMode />
    <Aura />
    <Header />
    <Scroll />
    <Navigation />
    <Projects />
    <ContactForm />
    <Footer />
    </>
    
  );

}

export default App
