import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import LoadingScreen from './components/LoadingScreen'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoadingScreen />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)