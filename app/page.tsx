import Hero from './components/hero'
import About from './components/about'
import Experience from './components/experience'

export default function Home() {
  // h-screen snap-y snap-mandatory scroll-smooth overflow-scroll z-0
  return (
    <main className="h-screen z-0">
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      <section id='about' className='snap-center'>
        <About/>
      </section>

      <section id='experience' className="snap-center">
        <Experience/>
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </main>
  )
}
