import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: 'rgba(17,17,17,0.85)', borderBottom: '1px solid #2A2A2A' }} className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-sm">
      <Link to="/" style={{ color: '#E8E8E8' }} className="font-medium text-sm">
        Suraj Karthikeyan
      </Link>
      <div className="flex gap-8 items-center">
        <a href="#about" style={{ color: '#A0A0A0' }} className="hover:opacity-70 text-sm transition-opacity">About</a>
        <a href="#projects" style={{ color: '#A0A0A0' }} className="hover:opacity-70 text-sm transition-opacity">Projects</a>
        <a href="#skills" style={{ color: '#A0A0A0' }} className="hover:opacity-70 text-sm transition-opacity">Skills</a>
        <a href="#contact" style={{ color: '#A0A0A0' }} className="hover:opacity-70 text-sm transition-opacity">Contact</a>
        <a href="/Suraj_Karthikeyan_Resume.pdf" target="_blank" rel="noreferrer" style={{ color: '#E8E8E8', border: '1px solid #2A2A2A' }} className="hover:opacity-70 text-sm transition-opacity px-4 py-1 rounded-lg">Resume</a>
      </div>
    </nav>
  )
}