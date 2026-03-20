import { projects } from '../data/projects'
import Navbar from '../components/Navbar'

{/* Projects */}
<section id="projects" className="px-8 md:px-20 py-24" style={{ borderTop: '1px solid #2A2A2A' }}>
  <p style={{ color: '#A0A0A0' }} className="text-sm uppercase tracking-widest mb-16">Projects</p>

  {/* Games */}
  <div className="mb-16">
    <p style={{ color: '#E8E8E8' }} className="text-xs uppercase tracking-widest mb-6 pb-3" style={{ borderBottom: '1px solid #2A2A2A' }}>Games</p>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.filter(p => p.category === 'game').map(project => (
        <a key={project.id} href={`/projects/${project.id}`} className="group rounded-xl overflow-hidden hover:opacity-90 transition-opacity" style={{ border: '1px solid #2A2A2A' }}>
          <div className="h-72 overflow-hidden">
            {project.thumbnail ? (
              <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                <p style={{ color: '#A0A0A0' }} className="text-sm">{project.title}</p>
              </div>
            )}
          </div>
          <div className="p-6" style={{ backgroundColor: '#111111' }}>
            <div className="flex gap-2 mb-3 flex-wrap">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: project.themeColor.tag, color: project.themeColor.tagText }}>{tag}</span>
              ))}
            </div>
            <h3 className="font-medium mb-2 text-lg" style={{ color: '#E8E8E8' }}>{project.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#A0A0A0' }}>{project.subtitle}</p>
            <p className="text-xs mt-4" style={{ color: project.themeColor.accent }}>View project →</p>
          </div>
        </a>
      ))}
    </div>
  </div>

  {/* Solo Projects */}
  <div className="mb-16">
    <p style={{ color: '#E8E8E8', borderBottom: '1px solid #2A2A2A' }} className="text-xs uppercase tracking-widest mb-6 pb-3">Solo Projects</p>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.filter(p => p.category === 'solo').map(project => (
        <a key={project.id} href={`/projects/${project.id}`} className="group rounded-xl overflow-hidden hover:opacity-90 transition-opacity" style={{ border: '1px solid #2A2A2A' }}>
          <div className="h-72 overflow-hidden">
            {project.thumbnail ? (
              <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                <p style={{ color: '#A0A0A0' }} className="text-sm">{project.title}</p>
              </div>
            )}
          </div>
          <div className="p-6" style={{ backgroundColor: '#111111' }}>
            <div className="flex gap-2 mb-3 flex-wrap">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: project.themeColor.tag, color: project.themeColor.tagText }}>{tag}</span>
              ))}
            </div>
            <h3 className="font-medium mb-2 text-lg" style={{ color: '#E8E8E8' }}>{project.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#A0A0A0' }}>{project.subtitle}</p>
            <p className="text-xs mt-4" style={{ color: project.themeColor.accent }}>View project →</p>
          </div>
        </a>
      ))}
    </div>
  </div>

  {/* Research */}
  <div>
    <p style={{ color: '#E8E8E8', borderBottom: '1px solid #2A2A2A' }} className="text-xs uppercase tracking-widest mb-6 pb-3">Research</p>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.filter(p => p.category === 'research').map(project => (
        <a key={project.id} href={`/projects/${project.id}`} className="group rounded-xl overflow-hidden hover:opacity-90 transition-opacity" style={{ border: '1px solid #2A2A2A' }}>
          <div className="h-72 overflow-hidden">
            {project.thumbnail ? (
              <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                <p style={{ color: '#A0A0A0' }} className="text-sm">{project.title}</p>
              </div>
            )}
          </div>
          <div className="p-6" style={{ backgroundColor: '#111111' }}>
            <div className="flex gap-2 mb-3 flex-wrap">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: project.themeColor.tag, color: project.themeColor.tagText }}>{tag}</span>
              ))}
            </div>
            <h3 className="font-medium mb-2 text-lg" style={{ color: '#E8E8E8' }}>{project.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#A0A0A0' }}>{project.subtitle}</p>
            <p className="text-xs mt-4" style={{ color: project.themeColor.accent }}>View project →</p>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>