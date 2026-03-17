import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b border-white/10 bg-black/80 backdrop-blur-sm">
      <Link to="/" className="text-white font-medium text-sm">
        Suraj Karthikeyan
      </Link>
      <div className="flex gap-8">
        <a href="#about" className="text-white/60 hover:text-white text-sm transition-colors">About</a>
        <a href="#projects" className="text-white/60 hover:text-white text-sm transition-colors">Projects</a>
        <a href="#skills" className="text-white/60 hover:text-white text-sm transition-colors">Skills</a>
        <a href="#contact" className="text-white/60 hover:text-white text-sm transition-colors">Contact</a>
      </div>
    </nav>
  )
}