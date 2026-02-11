<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import Layout from './componentes/layout';
import Formulario from './componentes/formulario';
import Ausencias from './pages/Ausencias';
=======
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './componentes/layout';
import Landing from './pages/Landing';
>>>>>>> f31a73e210714bc3f67e105f80d3ef7d6f4bc1e1
import SolDiurno from './pages/SolDiurno';
import SolVespertino from './pages/SolVespertino';
import Perfil from './pages/Perfil';
import DiasSolicitados from './pages/DiasSolicitados';
<<<<<<< HEAD

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
=======
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
>>>>>>> f31a73e210714bc3f67e105f80d3ef7d6f4bc1e1
  );
}