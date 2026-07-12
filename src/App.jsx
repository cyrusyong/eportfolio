import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Background from './components/Background'
import Projects from './components/Projects'
import Goals from './components/Goals'
import Resume from './components/Resume'
import Contact from './components/Contact'

export default function App() {
  return (
    <div style={{
      '--acc': '#c05f2c',
      '--bgTop': '#faf4e8',
      '--bgBase': '#efe6d6',
      position: 'relative',
      minHeight: '100vh',
      background: 'radial-gradient(120% 90% at 50% -10%, var(--bgTop, #faf4e8) 0%, var(--bgBase, #efe6d6) 62%, #eadfcc 100%)',
    }}>
      <Nav />
      <main style={{ maxWidth: 1120, margin: '0 auto', padding: '104px 24px 64px' }}>
        <Hero />
        <About />
        <Background />
        <Projects />
        <Goals />
        <Resume />
        <Contact />
      </main>
    </div>
  )
}
