import { Routes, Route } from 'react-router-dom';
import Layout from './componentes/layout';
import Formulario from './componentes/formulario';
import Ausencias from './pages/Ausencias';
import SolDiurno from './pages/SolDiurno';
import SolVespertino from './pages/SolVespertino';
import Perfil from './pages/Perfil';
import DiasSolicitados from './pages/DiasSolicitados';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/sol-diurno" element={<SolDiurno />} />
        <Route path="/sol-vespertino" element={<SolVespertino />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/dias-solicitados" element={<DiasSolicitados />} />
        <Route path="/ausencias" element={<Ausencias />} />
      </Routes>
    </Layout>
  );
}