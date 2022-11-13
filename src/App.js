import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./pages/Landing";
import Nft from "./pages/Nfts";




function App() {
  

  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/nfts" element={<Nft />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
