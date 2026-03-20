import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (anchor: string) => {
    setMenuOpen(false)
    if (isHome) {
      const el = document.querySelector(anchor)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        const el = document.querySelector(anchor)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <>
      <nav style={{ backgroundColor: 'rgba(17,17,17,0.95)', borderBottom: '1px solid #2A2A2A' }} className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-6 backdrop-blur-sm">
        <Link to="/" style={{ color: '#E8E8E8' }} className="font-medium text-lg">
          Suraj Karthikeyan
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-10 items-center">
          <button onClick={() => handleNavClick('#about')} style={{ color: '#A0A0A0', background: 'none', border: 'none', cursor: 'pointer' }} className="hover:opacity-70 text-base transition-opacity">About</button>
          <button onClick={() => handleNavClick('#projects')} style={{ color: '#A0A0A0', background: 'none', border: 'none', cursor: 'pointer' }} className="hover:opacity-70 text-base transition-opacity">Projects</button>
          <button onClick={() => handleNavClick('#skills')} style={{ color: '#A0A0A0', background: 'none', border: 'none', cursor: 'pointer' }} className="hover:opacity-70 text-base transition-opacity">Skills</button>
          <button onClick={() => handleNavClick('#contact')} style={{ color: '#A0A0A0', background: 'none', border: 'none', cursor: 'pointer' }} className="hover:opacity-70 text-base transition-opacity">Contact</button>
          <a href="/Suraj_Karthikeyan_Resume.pdf" target="_blank" rel="noreferrer" className="resume-btn" style={{ color: '#E8E8E8', border: '1px solid #3A3A3A', backgroundColor: '#1A1A1A', display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 20px 8px 14px', borderRadius: '8px', fontSize: '15px', textDecoration: 'none' }}>
            <span className="ping-wrap">
              <span className="ping-dot"></span>
              <span className="ping-ring"></span>
            </span>
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <span style={{ width: '24px', height: '2px', backgroundColor: menuOpen ? '#06B6D4' : '#E8E8E8', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ width: '24px', height: '2px', backgroundColor: menuOpen ? '#06B6D4' : '#E8E8E8', display: 'block', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }}></span>
          <span style={{ width: '24px', height: '2px', backgroundColor: menuOpen ? '#06B6D4' : '#E8E8E8', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 z-40 flex flex-col justify-center items-center gap-8" style={{ backgroundColor: 'rgba(17,17,17,0.98)' }}>
          <button onClick={() => handleNavClick('#about')} style={{ color: '#E8E8E8', background: 'none', border: 'none', cursor: 'pointer', fontSize: '28px' }} className="hover:opacity-70 transition-opacity">About</button>
          <button onClick={() => handleNavClick('#projects')} style={{ color: '#E8E8E8', background: 'none', border: 'none', cursor: 'pointer', fontSize: '28px' }} className="hover:opacity-70 transition-opacity">Projects</button>
          <button onClick={() => handleNavClick('#skills')} style={{ color: '#E8E8E8', background: 'none', border: 'none', cursor: 'pointer', fontSize: '28px' }} className="hover:opacity-70 transition-opacity">Skills</button>
          <button onClick={() => handleNavClick('#contact')} style={{ color: '#E8E8E8', background: 'none', border: 'none', cursor: 'pointer', fontSize: '28px' }} className="hover:opacity-70 transition-opacity">Contact</button>
          <a href="/Suraj_Karthikeyan_Resume.pdf" target="_blank" rel="noreferrer" style={{ color: '#06B6D4', fontSize: '28px' }} className="hover:opacity-70 transition-opacity">Resume ↗</a>
        </div>
      )}
    </>
  )
}