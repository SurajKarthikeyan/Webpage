import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Navbar from '../components/Navbar'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div style={{ backgroundColor: '#111111', color: '#E8E8E8' }} className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p style={{ color: '#A0A0A0' }} className="mb-4">Project not found</p>
          <Link to="/" style={{ color: '#E8E8E8' }} className="hover:opacity-70 text-sm">← Back home</Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#111111', color: '#E8E8E8' }} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 px-8 md:px-20 pb-16" style={{ borderBottom: '1px solid #2A2A2A' }}>
        <Link to="/" style={{ color: '#A0A0A0' }} className="hover:opacity-70 text-sm transition-opacity mb-8 inline-block">← All projects</Link>

        {project.heroBanner ? (
          <img src={project.heroBanner} alt={project.title} className="w-full h-[500px] object-cover rounded-xl mb-8" />
        ) : (
          <div className="h-[500px] rounded-xl flex items-center justify-center mb-8" style={{ backgroundColor: '#1A1A1A', border: '1px solid #2A2A2A' }}>
            <p style={{ color: '#A0A0A0' }} className="text-sm">Hero banner / GIF</p>
          </div>
        )}

        {project.award && (
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6" style={{ backgroundColor: '#2A1F00', border: '1px solid #5A3E00' }}>
            <span style={{ color: '#E8820C' }} className="text-xs">★</span>
            <span style={{ color: '#E8B84B' }} className="text-xs font-medium">{project.award}</span>
          </div>
        )}

        <div className="flex gap-2 flex-wrap mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: project.themeColor.tag, color: project.themeColor.tagText }}>{tag}</span>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-medium mb-4">{project.title}</h1>
        <p className="text-xl max-w-2xl leading-relaxed mb-8" style={{ color: '#A0A0A0' }}>{project.subtitle}</p>

        <div className="flex gap-4 flex-wrap">
          {project.itchLink && (
            <a href={project.itchLink} target="_blank" rel="noreferrer" style={{ backgroundColor: '#E8E8E8', color: '#111111' }} className="px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Play on itch.io ↗
            </a>
          )}
          {project.steamLink && (
            <a href={project.steamLink} target="_blank" rel="noreferrer" style={{ backgroundColor: '#E8E8E8', color: '#111111' }} className="px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Play on Steam ↗
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer" style={{ color: '#A0A0A0', border: '1px solid #2A2A2A' }} className="px-6 py-3 rounded-lg text-sm hover:opacity-70 transition-opacity">
              View source ↗
            </a>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="rounded-xl p-4" style={{ border: '1px solid #2A2A2A' }}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#A0A0A0' }}>Role</p>
            <p className="text-sm font-medium" style={{ color: '#E8E8E8' }}>{project.role}</p>
          </div>
          <div className="rounded-xl p-4" style={{ border: '1px solid #2A2A2A' }}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#A0A0A0' }}>Team size</p>
            <p className="text-sm font-medium" style={{ color: '#E8E8E8' }}>{project.teamSize} people</p>
          </div>
          <div className="rounded-xl p-4" style={{ border: '1px solid #2A2A2A' }}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#A0A0A0' }}>Duration</p>
            <p className="text-sm font-medium" style={{ color: '#E8E8E8' }}>{project.duration}</p>
          </div>
          <div className="rounded-xl p-4" style={{ border: '1px solid #2A2A2A' }}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#A0A0A0' }}>Engine</p>
            <p className="text-sm font-medium" style={{ color: '#E8E8E8' }}>{project.engine}</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-8 md:px-20 py-16" style={{ borderBottom: '1px solid #2A2A2A' }}>
        <p className="text-sm uppercase tracking-widest mb-6" style={{ color: '#A0A0A0' }}>Overview</p>
        <p className="text-xl leading-relaxed max-w-3xl" style={{ color: '#E8E8E8' }}>{project.overview}</p>
      </section>

      {/* Technical Contributions */}
      <section className="px-8 md:px-20 py-16" style={{ borderBottom: '1px solid #2A2A2A' }}>
        <p className="text-sm uppercase tracking-widest mb-12" style={{ color: '#A0A0A0' }}>Technical Contributions</p>
        <div className="space-y-24">
          {project.contributions.map((contribution, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-xl font-medium mb-4" style={{ color: '#E8E8E8' }}>{contribution.title}</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#A0A0A0' }}>{contribution.description}</p>
              </div>
              <div className={`grid gap-4 ${contribution.images.length > 2 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                {contribution.images.length > 0 ? (
                  contribution.images.map((img, i) => (
                    <img key={i} src={img} alt="" className="rounded-xl w-full object-cover" />
                  ))
                ) : (
                  <>
                    <div className="h-36 rounded-xl border flex items-center justify-center" style={{ backgroundColor: '#1A1A1A', borderColor: '#2A2A2A' }}>
                      <p className="text-xs" style={{ color: '#A0A0A0' }}>GIF / screenshot</p>
                    </div>
                    <div className="h-36 rounded-xl border flex items-center justify-center" style={{ backgroundColor: '#1A1A1A', borderColor: '#2A2A2A' }}>
                      <p className="text-xs" style={{ color: '#A0A0A0' }}>GIF / screenshot</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* More projects */}
      <section className="px-8 md:px-20 py-16">
        <p className="text-sm uppercase tracking-widest mb-6" style={{ color: '#A0A0A0' }}>More projects</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/" className="rounded-xl p-6 hover:opacity-70 transition-opacity" style={{ border: '1px solid #2A2A2A' }}>
            <p className="text-xs mb-2" style={{ color: '#A0A0A0' }}>← Back to all</p>
            <p className="font-medium" style={{ color: '#E8E8E8' }}>All Projects</p>
          </Link>
        </div>
      </section>

    </div>
  )
}