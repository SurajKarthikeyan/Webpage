import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Navbar from '../components/Navbar'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="bg-black min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40 mb-4">Project not found</p>
          <Link to="/" className="text-white hover:text-white/70 text-sm">← Back home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 px-8 md:px-20 pb-16 border-b border-white/10">
        <Link to="/" className="text-white/40 hover:text-white text-sm transition-colors mb-8 inline-block">← All projects</Link>

        {project.heroBanner ? (
          <img src={project.heroBanner} alt={project.title} className="w-full h-64 object-cover rounded-xl mb-8" />
        ) : (
          <div className="h-64 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10">
            <p className="text-white/20 text-sm">Hero banner / GIF</p>
          </div>
        )}

        {project.award && (
          <div className="inline-flex items-center gap-2 bg-amber-900/30 border border-amber-700/30 rounded-full px-4 py-2 mb-6">
            <span className="text-amber-400 text-xs">★</span>
            <span className="text-amber-300 text-xs font-medium">{project.award}</span>
          </div>
        )}

        <div className="flex gap-2 flex-wrap mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/10">{tag}</span>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-medium mb-4">{project.title}</h1>
        <p className="text-white/50 text-lg max-w-2xl leading-relaxed mb-8">{project.subtitle}</p>

        <div className="flex gap-4">
          {project.itchLink && (
            <a href={project.itchLink} target="_blank" rel="noreferrer" className="bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors">
              Play on itch.io ↗
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer" className="border border-white/20 text-white/70 px-6 py-3 rounded-lg text-sm hover:border-white/40 hover:text-white transition-colors">
              View source ↗
            </a>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="border border-white/10 rounded-xl p-4">
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Role</p>
            <p className="text-white text-sm font-medium">{project.role}</p>
          </div>
          <div className="border border-white/10 rounded-xl p-4">
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Team size</p>
            <p className="text-white text-sm font-medium">{project.teamSize} people</p>
          </div>
          <div className="border border-white/10 rounded-xl p-4">
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Duration</p>
            <p className="text-white text-sm font-medium">{project.duration}</p>
          </div>
          <div className="border border-white/10 rounded-xl p-4">
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Engine</p>
            <p className="text-white text-sm font-medium">{project.engine}</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-8 md:px-20 py-16 border-b border-white/10">
        <p className="text-white/40 text-sm uppercase tracking-widest mb-6">Overview</p>
        <p className="text-white/70 text-lg leading-relaxed max-w-3xl">{project.overview}</p>
      </section>

      {/* Technical Contributions */}
      <section className="px-8 md:px-20 py-16 border-b border-white/10">
        <p className="text-white/40 text-sm uppercase tracking-widest mb-12">Technical Contributions</p>
        <div className="space-y-16">
          {project.contributions.map((contribution, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-xl font-medium mb-4">{contribution.title}</h3>
                <p className="text-white/50 leading-relaxed">{contribution.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {contribution.images.length > 0 ? (
                  contribution.images.map((img, i) => (
                    <img key={i} src={img} alt="" className="rounded-xl w-full object-cover" />
                  ))
                ) : (
                  <>
                    <div className="h-36 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                      <p className="text-white/20 text-xs">GIF / screenshot</p>
                    </div>
                    <div className="h-36 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                      <p className="text-white/20 text-xs">GIF / screenshot</p>
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
        <p className="text-white/40 text-sm uppercase tracking-widest mb-6">More projects</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/" className="border border-white/10 rounded-xl p-6 hover:border-white/30 transition-colors">
            <p className="text-white/30 text-xs mb-2">← Back to all</p>
            <p className="text-white font-medium">All Projects</p>
          </Link>
        </div>
      </section>

    </div>
  )
}