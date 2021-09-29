import './App.css';
import CarAdv from './Components/CarAdvertisement/CarAdv';
import CarCarousel from './Components/CarCarousel.jsx/CarCarousel';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Rating from './Components/Ratings/Rating';
import Sanatized from './Components/Sanatized/Sanatized';
import SuperClub from './Components/SuperClub/SuperClub';
import ZoomGo from './Components/ZoomGo/ZoomGo';
import ZoomWorks from './Components/Zoomworks/ZoomWorks';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Sanatized />
      <CarAdv />
      <SuperClub />
      <CarCarousel />
      <ZoomWorks />
      <ZoomGo />
      <Rating />
      <Footer />
    </div>
  );
}

export default App;
