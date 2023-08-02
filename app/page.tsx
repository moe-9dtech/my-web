import Image from 'next/image'
import Hero from './components/hero'
import About from './components/about'

export default function Home() {
  return (
    <main className="h-screen bg-[rgb(36,36,36)] snap-y snap-mandatory scroll-smooth overflow-scroll z-0">
      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero/>
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About/>
      </section>
      {/* Eperience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </main>
  )
}
