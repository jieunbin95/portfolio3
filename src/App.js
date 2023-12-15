import "./App.css";
import About from "./component/About";
import Project from "./component/Project";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Skill from "./component/Skill";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Footer />
    </>
  );
}

export default App;
