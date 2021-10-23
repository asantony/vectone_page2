import logo from './logo.svg';
import './App.css';
import Headermenu from "./components/HeaderMenu";
import BannerHeader from "./components/BannerHeader";
import Maincontent from "./components/Maincontent";
import Footer from "./components/Footer";
import ComparePlans from "./components/ComparePlans";
import TableItems from "./components/TableItems"
import { isMobile, isTablet } from 'react-device-detect';


function App() {
  if (isMobile) {
    return (
      <div className="App">
        <Headermenu />
        <BannerHeader />
        <Maincontent />
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Headermenu />
        <BannerHeader />
        <Maincontent />
        <ComparePlans />
        <TableItems />
        <Footer />
      </div>
    );
  }

}

export default App;
