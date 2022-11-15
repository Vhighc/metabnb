import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./pages/Landing";
import Nft from "./pages/Nfts";
import data from './components/Constant/row2Data';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
// import items from '../components/Constant/row1Data';



function App() {

  const {nfts} = data;
  // const {data} = items;
  

  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Landing nfts={nfts} />} />
      <Route path="/nfts" element={<Nft />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
