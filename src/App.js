import logo from './logo.svg';
import './App.css';
import About from "./components/About/About";
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <main>
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
