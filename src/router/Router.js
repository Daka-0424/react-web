import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from '../App';
import Info from './InfoRouter';
import Cheat from './CheatRouter';
import Admin from './AdminRouter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/info/*" element={<Info />} />
        <Route path="/cheat/*" element={<Cheat />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;