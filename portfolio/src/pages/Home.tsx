import Navbar from '../components/Navbar'
import { projects } from '../data/projects'
export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col justify-center min-h-screen px-8 md:px-20 pt-20">
        <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Software Engineer & Game Developer</p>
        <h1 className="text-5xl md:text-7xl font-medium leading-tight mb-6">
          Suraj<br />Karthikeyan.
        </h1>
        <p className="text-white/50 text-lg max-w-lg leading-relaxed mb-8">
          Building immersive experiences and robust systems — from VR medical simulations to audio plugins.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors">
            View my work
          </a>
          <a href="#contact" className="border border-white/20 text-white/70 px-6 py-3 rounded-lg text-sm hover:border-white/40 hover:text-white transition-colors">
            Get in touch
          </a>
        </div>
        <p className="text-white/20 text-sm mt-16">↓ scroll</p>
      </section>

      {/* About */}
      <section id="about" className="px-8 md:px-20 py-24 border-t border-white/10">
        <p className="text-white/40 text-sm uppercase tracking-widest mb-8">About</p>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-white/70 text-lg leading-relaxed">
              CS grad student at Michigan State University pursuing an MSc in Computer Science, with a minor in Game Design and Development. I specialise in systems engineering, game development, and audio integration.
            </p>
            <p className="text-white/50 text-base leading-relaxed mt-4">
              When I'm not fixing the last bug I pushed, I'm powerlifting, reading philosophy, playing the saxophone, or annoying my cat Tyler.
            </p>
            <div className="flex gap-6 mt-8">
              <a href="https://github.com/SurajKarthikeyan" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white text-sm transition-colors">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/suraj-karthikeyan-04baa0191/" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white text-sm transition-colors">LinkedIn ↗</a>
              <a href="https://surajkarthikeyan.itch.io/" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white text-sm transition-colors">itch.io ↗</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-white/10 rounded-xl p-6">
              <p className="text-3xl font-medium">5+</p>
              <p className="text-white/40 text-sm mt-1">shipped projects</p>
            </div>
            <div className="border border-white/10 rounded-xl p-6">
              <p className="text-3xl font-medium">4</p>
              <p className="text-white/40 text-sm mt-1">game titles</p>
            </div>
            <div className="border border-white/10 rounded-xl p-6">
              <p className="text-3xl font-medium">MSc</p>
              <p className="text-white/40 text-sm mt-1">in progress</p>
            </div>
            <div className="border border-white/10 rounded-xl p-6">
              <p className="text-3xl font-medium">Unity</p>
              <p className="text-white/40 text-sm mt-1">primary engine</p>
            </div>
          </div>
        </div>
      </section>

    {/* Projects */}
    <section id="projects" className="px-8 md:px-20 py-24 border-t border-white/10">
      <p className="text-white/40 text-sm uppercase tracking-widest mb-8">Projects</p>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(project => (
          <a key={project.id} href={`/projects/${project.id}`} className="group border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-colors">
            <div className="h-150 overflow-hidden">
              {project.thumbnail ? (
                <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="w-full h-full bg-white/5 flex items-center justify-center">
                  <p className="text-white/20 text-sm">{project.title}</p>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex gap-2 mb-3 flex-wrap">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/10">{tag}</span>
                ))}
              </div>
              <h3 className="text-white font-medium mb-2">{project.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{project.subtitle}</p>
              <p className="text-white/20 text-xs mt-4 group-hover:text-white/40 transition-colors">View project →</p>
            </div>
          </a>
        ))}
      </div>
    </section>

      {/* Skills */}
      <section id="skills" className="px-8 md:px-20 py-24 border-t border-white/10">
        <p className="text-white/40 text-sm uppercase tracking-widest mb-8">Skills</p>
        <div className="space-y-6">
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Languages</p>
            <div className="flex flex-wrap gap-3">
              {['C#', 'C++', 'Python', 'TypeScript', 'JavaScript'].map(skill => (
                <span key={skill} className="border border-white/10 text-white/60 text-sm px-4 py-2 rounded-lg hover:border-white/30 hover:text-white transition-colors">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Tools & Engines</p>
            <div className="flex flex-wrap gap-3">
              {['Unity', 'Wwise', 'JUCE', 'React', 'Git', 'Jira'].map(skill => (
                <span key={skill} className="border border-white/10 text-white/60 text-sm px-4 py-2 rounded-lg hover:border-white/30 hover:text-white transition-colors">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 md:px-20 py-24 border-t border-white/10">
        <p className="text-white/40 text-sm uppercase tracking-widest mb-8">Contact</p>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-medium mb-4">Let's talk.</h2>
            <p className="text-white/50 leading-relaxed mb-8">Open to roles in game development, systems engineering, and application development.</p>
            <a href="mailto:surajkarthikeyan@gmail.com" className="text-white/40 hover:text-white text-sm transition-colors">surajkarthikeyan@gmail.com ↗</a>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Your name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/30" />
            <input type="email" placeholder="Email address" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/30" />
            <textarea placeholder="Message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/30 resize-none" />
            <button type="submit" className="bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors">
              Send message
            </button>
          </form>
        </div>
      </section>

    </div>
  )
}

