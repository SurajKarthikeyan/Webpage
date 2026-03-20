import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
  const fadeTimer = setTimeout(() => setFading(true), 600)
  const hideTimer = setTimeout(() => setVisible(false), 1100)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

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
            animation: 'loadBar 0.6s ease forwards',
            width: '0%',
          }} />
        </div>
      </div>
      <style>{`
        @keyframes loadBar {
          to { width: 100%; }
        }
      `}</style>
    </div>
  )
}