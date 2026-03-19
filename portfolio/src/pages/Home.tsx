import { projects } from '../data/projects'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F5F0E8' }} className="min-h-screen" style={{ color: '#1C1C1C' }}>
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col justify-center min-h-screen px-8 md:px-20 pt-20">
        <p style={{ color: '#6B6560' }} className="text-sm uppercase tracking-widest mb-4">Software Engineer & Game Developer</p>
        <h1 className="text-5xl md:text-7xl font-medium leading-tight mb-6" style={{ color: '#1C1C1C' }}>
          Suraj<br />Karthikeyan.
        </h1>
        <p style={{ color: '#6B6560' }} className="text-xl max-w-lg leading-relaxed mb-8">
          Building immersive experiences and robust systems — from VR medical simulations to audio plugins.
        </p>
        <div className="flex gap-4">
          <a href="#projects" style={{ backgroundColor: '#1C1C1C', color: '#F5F0E8' }} className="px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            View my work
          </a>
          <a href="#contact" style={{ color: '#6B6560', borderColor: '#E0D9CF' }} className="border px-6 py-3 rounded-lg text-sm hover:opacity-70 transition-opacity">
            Get in touch
          </a>
        </div>
        <p style={{ color: '#C4622D' }} className="text-sm mt-16">↓ scroll</p>
      </section>

      {/* About */}
      <section id="about" className="px-8 md:px-20 py-24" style={{ borderTop: '1px solid #E0D9CF' }}>
        <p style={{ color: '#6B6560' }} className="text-sm uppercase tracking-widest mb-8">About</p>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p style={{ color: '#1C1C1C' }} className="text-xl leading-relaxed">
              CS grad student from Michigan State University with a M.Sc in Computer Science. I specialise in systems engineering, game development, and audio integration.
            </p>
            <p style={{ color: '#6B6560' }} className="text-base leading-relaxed mt-4">
              When I'm not fixing the last bug I pushed, I'm powerlifting, reading philosophy, playing the saxophone, or annoying my cat Tyler.
            </p>
            <div className="flex gap-6 mt-8">
              <a href="https://github.com/SurajKarthikeyan" target="_blank" rel="noreferrer" style={{ color: '#6B6560' }} className="hover:opacity-70 text-sm transition-opacity">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/suraj-karthikeyan-04baa0191/" target="_blank" rel="noreferrer" style={{ color: '#6B6560' }} className="hover:opacity-70 text-sm transition-opacity">LinkedIn ↗</a>
              <a href="https://surajkarthikeyan.itch.io/" target="_blank" rel="noreferrer" style={{ color: '#6B6560' }} className="hover:opacity-70 text-sm transition-opacity">itch.io ↗</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div style={{ border: '1px solid #E0D9CF' }} className="rounded-xl p-6">
              <p className="text-3xl font-medium" style={{ color: '#1C1C1C' }}>5+</p>
              <p style={{ color: '#6B6560' }} className="text-sm mt-1">shipped projects</p>
            </div>
            <div style={{ border: '1px solid #E0D9CF' }} className="rounded-xl p-6">
              <p className="text-3xl font-medium" style={{ color: '#1C1C1C' }}>4</p>
              <p style={{ color: '#6B6560' }} className="text-sm mt-1">game titles</p>
            </div>
            <div style={{ border: '1px solid #E0D9CF' }} className="rounded-xl p-6">
              <p className="text-3xl font-medium" style={{ color: '#1C1C1C' }}>MSc</p>
              <p style={{ color: '#6B6560' }} className="text-sm mt-1">in progress</p>
            </div>
            <div style={{ border: '1px solid #E0D9CF' }} className="rounded-xl p-6">
              <p className="text-3xl font-medium" style={{ color: '#1C1C1C' }}>Unity</p>
              <p style={{ color: '#6B6560' }} className="text-sm mt-1">primary engine</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 md:px-20 py-24" style={{ borderTop: '1px solid #E0D9CF' }}>
        <p style={{ color: '#6B6560' }} className="text-sm uppercase tracking-widest mb-8">Projects</p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(project => (
            <a key={project.id} href={`/projects/${project.id}`} className="group rounded-xl overflow-hidden hover:opacity-90 transition-opacity" style={{ border: '1px solid #E0D9CF' }}>
              <div className="h-72 overflow-hidden">
                {project.thumbnail ? (
                  <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#EDE8E0' }}>
                    <p style={{ color: '#6B6560' }} className="text-sm">{project.title}</p>
                  </div>
                )}
              </div>
              <div className="p-6" style={{ backgroundColor: '#F5F0E8' }}>
                <div className="flex gap-2 mb-3 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: project.themeColor.tag, color: project.themeColor.tagText }}>{tag}</span>
                  ))}
                </div>
                <h3 className="font-medium mb-2 text-lg" style={{ color: '#1C1C1C' }}>{project.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B6560' }}>{project.subtitle}</p>
                <p className="text-xs mt-4 transition-colors" style={{ color: project.themeColor.accent }}>View project →</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 md:px-20 py-24" style={{ borderTop: '1px solid #E0D9CF' }}>
        <p style={{ color: '#6B6560' }} className="text-sm uppercase tracking-widest mb-8">Skills</p>
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#6B6560' }}>Languages</p>
            <div className="flex flex-wrap gap-3">
              {['C#', 'C++', 'Python', 'TypeScript', 'JavaScript'].map(skill => (
                <span key={skill} className="text-sm px-4 py-2 rounded-lg" style={{ border: '1px solid #E0D9CF', color: '#6B6560' }}>{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#6B6560' }}>Tools & Engines</p>
            <div className="flex flex-wrap gap-3">
              {['Unity', 'Wwise', 'JUCE', 'React', 'Git', 'Jira'].map(skill => (
                <span key={skill} className="text-sm px-4 py-2 rounded-lg" style={{ border: '1px solid #E0D9CF', color: '#6B6560' }}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 md:px-20 py-24" style={{ borderTop: '1px solid #E0D9CF' }}>
        <p style={{ color: '#6B6560' }} className="text-sm uppercase tracking-widest mb-8">Contact</p>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-medium mb-4" style={{ color: '#1C1C1C' }}>Let's talk.</h2>
            <p className="leading-relaxed mb-8" style={{ color: '#6B6560' }}>Open to roles in game development, systems engineering, and application development.</p>
            <a href="mailto:surajkarthikeyan@gmail.com" style={{ color: '#C4622D' }} className="text-sm hover:opacity-70 transition-opacity">surajkarthikeyan@gmail.com ↗</a>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Your name" className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none" style={{ backgroundColor: '#EDE8E0', border: '1px solid #E0D9CF', color: '#1C1C1C' }} />
            <input type="email" placeholder="Email address" className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none" style={{ backgroundColor: '#EDE8E0', border: '1px solid #E0D9CF', color: '#1C1C1C' }} />
            <textarea placeholder="Message" rows={4} className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none resize-none" style={{ backgroundColor: '#EDE8E0', border: '1px solid #E0D9CF', color: '#1C1C1C' }} />
            <button type="submit" className="px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity" style={{ backgroundColor: '#C4622D', color: '#F5F0E8' }}>
              Send message
            </button>
          </form>
        </div>
      </section>

    </div>
  )
}