import { Route, Routes } from 'react-router-dom';
import Rout from '../admin/Rout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Rout />} />
    </Routes>
  );
}

export default App;