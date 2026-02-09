import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './componentes/layout';
import Landing from './pages/Landing';
import SolDiurno from './pages/SolDiurno';
import SolVespertino from './pages/SolVespertino';
import Perfil from './pages/Perfil';
import DiasSolicitados from './pages/DiasSolicitados';
import Ausencias from './pages/Ausencias';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Landing /></Layout>} />
        <Route path="/SolDiurno" element={<Layout><SolDiurno /></Layout>} />
        <Route path="/SolVespertino" element={<Layout><SolVespertino /></Layout>} />
        <Route path="/Perfil" element={<Layout><Perfil /></Layout>} />
        <Route path="/DiasSolicitados" element={<Layout><DiasSolicitados /></Layout>} />
        <Route path="/Ausencias" element={<Layout><Ausencias /></Layout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}