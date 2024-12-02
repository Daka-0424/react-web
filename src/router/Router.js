import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import My from './MyRouter';
import Info from './InfoRouter';
import Cheat from './CheatRouter';
import Admin from './AdminRouter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<My />} />
        <Route path="/info/*" element={<Info />} />
        <Route path="/cheat/*" element={<Cheat />} />
        <Route path="/admin/*" element={<Admin />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;