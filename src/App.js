import logo from './logo.svg';
// import "./Responsive.css";
import './App.css';

import HomePage from "./components/HomePage";
import StayConnected from './components/StayConnected';
import ContentNavigation from './components/ContentNavigation';
import Diversity from "./components/Diversity";
import CelebrateSuccess from "./components/CelebrateSuccess";
import EmployeeAppreciation from "./components/EmployeeAppreciation";
import ReadMyStory from "./components/ReadMyStory";
import Map from "./components/Map";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <HomePage />
      <ContentNavigation />
      <StayConnected />
      <Diversity />
      <CelebrateSuccess />
      <EmployeeAppreciation />
      <ReadMyStory />
      <Map />
      <Footer />
      

    </div>
  );
}

export default App;
