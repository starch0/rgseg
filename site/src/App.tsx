import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import QuemSomosPage from './pages/QuemSomosPage'
import ServicosPage from './pages/ServicosPage'
import ContatoPage from './pages/ContatoPage'

function App() {
  const location = useLocation()
  return (
    <Layout>
      <div key={location.pathname} className="page-transition">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/quem-somos" element={<QuemSomosPage />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Layout>
  )
}

export default App
