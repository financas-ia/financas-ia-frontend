import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import LoginPage from '@/features/auth/pages/LoginPage'
import CadastroPage from '@/features/auth/pages/CadastroPage'
import ForgotPage from '@/features/auth/pages/ForgotPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/recuperar-senha" element={<ForgotPage />} />
        <Route path='*' element={<Navigate to="/login" replace />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
