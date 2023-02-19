import "./App.css";
import Mainpage from "./components/mainpage/mainpage";
import Home from "./components/Home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./components/mainpage/project-page";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />

          <Route path="/home" element={<Home />} />

          <Route path="/home/projectpages" element={<ProjectPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
