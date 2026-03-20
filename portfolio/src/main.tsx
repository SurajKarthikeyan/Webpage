import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

function LoadingScreen({ show }: { show: boolean }) {
  const [visible, setVisible] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (show) {
      setVisible(true)
      setFading(false)
      const fadeTimer = setTimeout(() => setFading(true), 400)
      const hideTimer = setTimeout(() => setVisible(false), 900)
      return () => {
        clearTimeout(fadeTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [show])

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: '#111111',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.5s ease',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#E8E8E8', fontSize: '20px', fontWeight: 500, fontFamily: 'monospace', letterSpacing: '0.05em' }}>
          Suraj Karthikeyan
        </p>
        <div style={{ marginTop: '16px', width: '120px', height: '1px', backgroundColor: '#2A2A2A', margin: '16px auto 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: 0, left: 0,
            height: '100%',
            backgroundColor: '#06B6D4',
            animation: fading ? 'none' : 'loadBar 0.6s ease forwards',
            width: fading ? '100%' : '0%',
          }} />
        </div>
      </div>
    </div>
  )
}

function RouteWatcher({ onRouteChange }: { onRouteChange: () => void }) {
  const location = useLocation()

  useEffect(() => {
    onRouteChange()
  }, [location.pathname])

  return null
}

function App() {
  const [loadKey, setLoadKey] = useState(0)

  const triggerLoad = () => setLoadKey(k => k + 1)

  return (
    <StrictMode>
      <LoadingScreen show={loadKey > 0} key={loadKey} />
      <BrowserRouter>
        <RouteWatcher onRouteChange={triggerLoad} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(<App />)