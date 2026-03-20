import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const handleNavClick = (anchor: string) => {
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
    <nav style={{ backgroundColor: 'rgba(17,17,17,0.95)', borderBottom: '1px solid #2A2A2A' }} className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6 backdrop-blur-sm">
      <Link to="/" style={{ color: '#E8E8E8' }} className="font-medium text-lg">
        Suraj Karthikeyan
      </Link>
      <div className="flex gap-10 items-center">
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
    </nav>
  )
}