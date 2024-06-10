import { Route, Router, Routes } from 'react-router-dom';
import Rout from '../info/Rout';
import TestScrollMagic from '../info/test/ScrollMagic'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Rout />} />
      <Route path="/test/scroll_magic" element={<TestScrollMagic />} />
    </Routes>
  );
}

export default App;