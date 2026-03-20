import { useState } from 'react'
import { projects } from '../data/projects'
import Navbar from '../components/Navbar'

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  return (
    <div style={{ backgroundColor: '#111111', color: '#E8E8E8' }} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col justify-center min-h-screen px-8 md:px-20 pt-20">
        <p style={{ color: '#A0A0A0' }} className="text-sm uppercase tracking-widest mb-4">Software Engineer & Game Developer</p>
        <h1 className="text-5xl md:text-7xl font-medium leading-tight mb-6" style={{ color: '#E8E8E8' }}>
          Suraj<br />Karthikeyan.
        </h1>
        <p style={{ color: '#A0A0A0' }} className="text-xl max-w-lg leading-relaxed mb-8">
          Building immersive experiences and robust systems — from VR medical simulations to audio plugins.
        </p>
        <div className="flex gap-4">
          <a href="#projects" style={{ backgroundColor: '#E8E8E8', color: '#111111' }} className="px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            View my work
          </a>
          <a href="#contact" style={{ color: '#A0A0A0', border: '1px solid #2A2A2A' }} className="px-6 py-3 rounded-lg text-sm hover:opacity-70 transition-opacity">
            Get in touch
          </a>
        </div>
        <p style={{ color: '#A0A0A0' }} className="text-sm mt-16">↓ scroll</p>
      </section>

      {/* About */}
      <section id="about" className="px-8 md:px-20 py-24" style={{ borderTop: '1px solid #2A2A2A' }}>
        <p style={{ color: '#A0A0A0' }} className="text-sm uppercase tracking-widest mb-8">About</p>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p style={{ color: '#E8E8E8' }} className="text-xl leading-relaxed">
              CS grad student at Michigan State University pursuing an MSc in Computer Science, with a minor in Game Design and Development. I specialise in systems engineering, game development, and audio integration.
            </p>
            <p style={{ color: '#A0A0A0' }} className="text-base leading-relaxed mt-4">
              When I'm not fixing the last bug I pushed, I'm powerlifting, reading philosophy, playing the saxophone, or annoying my cat Tyler.
            </p>
            <div className="flex gap-6 mt-8">
              <a href="https://github.com/SurajKarthikeyan" target="_blank" rel="noreferrer" style={{ color: '#A0A0A0' }} className="hover:opacity-70 text-sm transition-opacity">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/suraj-karthikeyan-04baa0191/" target="_blank" rel="noreferrer" style={{ color: '#A0A0A0' }} className="hover:opacity-70 text-sm transition-opacity">LinkedIn ↗</a>
              <a href="https://surajkarthikeyan.itch.io/" target="_blank" rel="noreferrer" style={{ color: '#A0A0A0' }} className="hover:opacity-70 text-sm transition-opacity">itch.io ↗</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div style={{ border: '1px solid #2A2A2A' }} className="rounded-xl p-6">
              <p className="text-3xl font-medium" style={{ color: '#E8E8E8' }}>5+</p>
              <p style={{ color: '#A0A0A0' }} className="text-sm mt-1">shipped projects</p>
            </div>
            <div style={{ border: '1px solid #2A2A2A' }} className="rounded-xl p-6">
              <p className="text-3xl font-medium" style={{ color: '#E8E8E8' }}>4</p>
              <p style={{ color: '#A0A0A0' }} className="text-sm mt-1">game titles</p>
            </div>
            <div style={{ border: '1px solid #2A2A2A' }} className="rounded-xl p-6">
              <p className="text-3xl font-medium" style={{ color: '#E8E8E8' }}>MSc</p>
              <p style={{ color: '#A0A0A0' }} className="text-sm mt-1">in progress</p>
            </div>
            <div style={{ border: '1px solid #2A2A2A' }} className="rounded-xl p-6">
              <p className="text-3xl font-medium" style={{ color: '#E8E8E8' }}>Unity</p>
              <p style={{ color: '#A0A0A0' }} className="text-sm mt-1">primary engine</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 md:px-20 py-24" style={{ borderTop: '1px solid #2A2A2A' }}>
        <p style={{ color: '#A0A0A0' }} className="text-sm uppercase tracking-widest mb-16">Projects</p>

        {/* Games */}
        <div className="mb-16">
          <p style={{ color: '#E8E8E8', borderBottom: '1px solid #2A2A2A' }} className="text-xs uppercase tracking-widest mb-6 pb-3">Games</p>
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

      {/* Skills */}
      <section id="skills" className="px-8 md:px-20 py-24" style={{ borderTop: '1px solid #2A2A2A' }}>
        <p style={{ color: '#A0A0A0' }} className="text-sm uppercase tracking-widest mb-8">Skills</p>
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#A0A0A0' }}>Languages</p>
            <div className="flex flex-wrap gap-3">
              {['C#', 'C++', 'Python', 'TypeScript', 'JavaScript'].map(skill => (
                <span key={skill} className="text-sm px-4 py-2 rounded-lg" style={{ border: '1px solid #2A2A2A', color: '#A0A0A0' }}>{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#A0A0A0' }}>Tools & Engines</p>
            <div className="flex flex-wrap gap-3">
              {['Unity', 'Wwise', 'JUCE', 'React', 'Git', 'Jira'].map(skill => (
                <span key={skill} className="text-sm px-4 py-2 rounded-lg" style={{ border: '1px solid #2A2A2A', color: '#A0A0A0' }}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 md:px-20 py-24" style={{ borderTop: '1px solid #2A2A2A' }}>
        <p style={{ color: '#A0A0A0' }} className="text-sm uppercase tracking-widest mb-8">Contact</p>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-medium mb-4" style={{ color: '#E8E8E8' }}>Let's talk.</h2>
            <p className="leading-relaxed mb-8" style={{ color: '#A0A0A0' }}>Open to roles in game development, systems engineering, and application development.</p>
            <a href="mailto:surajkarthikeyan@gmail.com" style={{ color: '#A0A0A0' }} className="text-sm hover:opacity-70 transition-opacity">surajkarthikeyan@gmail.com ↗</a>
          </div>
          <form
            className="space-y-4"
            onSubmit={async (e) => {
              e.preventDefault()
              setFormStatus('sending')
              const form = e.target as HTMLFormElement
              const name = (form.elements.namedItem('name') as HTMLInputElement).value
              const email = (form.elements.namedItem('email') as HTMLInputElement).value
              const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value

              try {
                const res = await fetch('/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ name, email, message }),
                })

                if (res.ok) {
                  setFormStatus('success')
                  form.reset()
                } else {
                  setFormStatus('error')
                }
              } catch {
                setFormStatus('error')
              }
            }}
          >
            <input name="name" type="text" placeholder="Your name" className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none" style={{ backgroundColor: '#1A1A1A', border: '1px solid #2A2A2A', color: '#E8E8E8' }} />
            <input name="email" type="email" placeholder="Email address" className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none" style={{ backgroundColor: '#1A1A1A', border: '1px solid #2A2A2A', color: '#E8E8E8' }} />
            <textarea name="message" placeholder="Message" rows={4} className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none resize-none" style={{ backgroundColor: '#1A1A1A', border: '1px solid #2A2A2A', color: '#E8E8E8' }} />
            {formStatus === 'success' && (
              <p className="text-sm" style={{ color: '#10B981' }}>Message sent! I'll get back to you soon.</p>
            )}
            {formStatus === 'error' && (
              <p className="text-sm" style={{ color: '#E24B4A' }}>Something went wrong. Please try again or email directly.</p>
            )}
            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#E8E8E8', color: '#111111', opacity: formStatus === 'sending' ? 0.6 : 1 }}
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </section>

    </div>
  )
}