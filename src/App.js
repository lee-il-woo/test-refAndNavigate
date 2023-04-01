
import './App.css';
import { useRef, useEffect } from 'react';
import PrevRef from './component/PrevRef';
import DomRef from './component/DomRef';
import RoteNavigate from './component/RoteNavigate';
import { Routes, Route } from 'react-router-dom';
import LocationState from './component/LocationState';
import { Link } from 'react-router-dom';
function App() {

  return (
    <div className="App">
    <DomRef/>
    <PrevRef/>
    <Link to="/navi"><button>/navi</button></Link>
    <Routes>
      <Route path="/navi" element={<RoteNavigate/>}></Route>
      <Route path="/location" element={<LocationState/>}></Route>
    </Routes>


    </div>
  );
}

export default App;
