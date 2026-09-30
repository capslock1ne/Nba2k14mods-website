import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/About/about";
import Nba2k14 from "./pages/NBA2K14";
import { Routes, Route } from "react-router-dom";
import Cyberface from "./cyberface-lookup/cyberface-look-up";
import Roster from "./components/Roster/Roster";
import Categories from "./components/mod-categories";
import Court from "./components/Court-file/Court";
import ScoreBoard from "./components/Scoreboards/Scoreboard";
import Shoes from "./components/Shoes/Shoes";
import Jersey from "./components/Jerseys/jersey";
import Footer from "./components/footer";
import TutorialsGuide from "./pages/TutorialPage/tutorials";
import Community from "./pages/Community/community";
import './main.css';




function App() {
  return (
    <>
      <Navbar />

          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/Nba2k14" element={<Nba2k14 />} />
            <Route path="/Tutorials" element={<TutorialsGuide />} />
            <Route path="/Roster" element={<Roster />} />
            <Route path="/Court" element={<Court />} />
            <Route path="/Jersey" element={<Jersey />} />
             <Route path="/Shoes" element={<Shoes />} />
            <Route path="/ScoreBoard" element={<ScoreBoard />} />
            <Route path="/" element={<Categories />} />
            <Route path="/Cyberface" element={<Cyberface />} />
            <Route path="/community" element={<Community/>} />
            <Route path="/about" element={<About />} />
            
          </Routes>

      
       <Footer />
       
       
    </>
  );
}

export default App;