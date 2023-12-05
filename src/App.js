import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Feature from './component/Feature';
import Feedback from './component/Feedback';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Support from './component/Support';

function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Support/>
     <Feature/>
     <Feedback/>
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;
