import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Inicio';
import Proyectos from './pages/proyects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;