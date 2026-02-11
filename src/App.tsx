import { Routes, Route } from 'react-router-dom';
import Layout from './componentes/layout';
import Landing from './pages/Landing';
import SolDiurno from './pages/SolDiurno';
import SolVespertino from './pages/SolVespertino';
import Perfil from './pages/Perfil';
import DiasSolicitados from './pages/DiasSolicitados';
import Ausencias from './pages/Ausencias';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/SolDiurno" element={<SolDiurno />} />
        <Route path="/SolVespertino" element={<SolVespertino />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/DiasSolicitados" element={<DiasSolicitados />} />
        <Route path="/Ausencias" element={<Ausencias />} />
      </Routes>
    </Layout>
  );
}