import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Integrantes from './pages/Integrantes';
import IntegranteDetalhe from './pages/IntegrantesDetalhe.tsx';


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paginas/faq" element={<FAQ />} />
          <Route path="/paginas/contato" element={<Contato />} />
          <Route path="/paginas/sobre" element={<Sobre />} />
          <Route path="/paginas/integrantes" element={<Integrantes />} />
          <Route path="/paginas/integrantes/:rm" element={<IntegranteDetalhe />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}