import './App.css';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Principal from './components/Principal';
import Software from './components/Software';
import Works from './components/Works';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Principal />
      <AboutMe />
      <Works />
      <Software />
      <Footer />
    </div>
  );
}

export default App;
