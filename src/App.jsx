import './App.css';
import { Route, Switch } from 'react-router-dom'
import CarAdv from './Components/CarAdvertisement/CarAdv';
// import CarCarousel from './Components/CarCarousel.jsx/CarCarousel';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Rating from './Components/Ratings/Rating';
import Sanatized from './Components/Sanatized/Sanatized';
import SearchBar from './Components/Search/SearchBar';
import SuperClub from './Components/SuperClub/SuperClub';
import ZoomGo from './Components/ZoomGo/ZoomGo';
import ZoomWorks from './Components/Zoomworks/ZoomWorks';


function App() {
  return (
    <div className="App" style={{overflowX:"hidden"}}>

      {/* <SearchBar /> */}
      <Switch>

        <Route exact path="/">
          <div style={{ backgroundColor:"rgb(249, 249, 249)"}}>
          <Navbar />
          <Sanatized />
          <CarAdv />
          <SuperClub />
          {/* <CarCarousel /> */}
          <ZoomWorks />
          <ZoomGo />
          <Rating />
          <Footer />
          </div>
        </Route>
        <Route path="/search">
          <SearchBar />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
