import "./App.css";
import { About } from "./components/About/About";
import { Navbar } from "./components/Navbar/Navbar";
import { WelcomeBanner } from "./components/WelcomeBanner/WelcomeBanner";
import { BrowserRouter as Router } from "react-router-dom";
import { Projects } from "./components/Projects";
import { ToolStack } from "./components/ToolStack";
import { Contacts } from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <WelcomeBanner />
        <About />
        <Projects />
        <ToolStack />
        <Contacts />
      </Router>
    </div>
  );
}

export default App;
