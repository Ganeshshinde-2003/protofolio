import "./App.css";
import Mainpage from "./components/mainpage/mainpage";
import Home from "./components/Home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./components/mainpage/project-page";
import Everything from "./components/Home/everything";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />

          <Route path="/home" element={<Home />} />

          <Route path="/home/projectpages" element={<ProjectPage />} />

          <Route path="*" element={<Everything />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
