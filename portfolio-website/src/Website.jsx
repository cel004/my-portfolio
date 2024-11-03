import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import Aura from './Aura/Aura.jsx'
import Navigation from './Navigation/Navigation.jsx'
import NightMode from './NightMode/NightMode.jsx';
import Scroll from './Scroll/Scroll.jsx'

function App() {

  return(
    <>
    <NightMode />
    <Aura />
    <Header />
    <Navigation />
    <Scroll />
    <Footer />
    </>
    
  );

}

export default App
