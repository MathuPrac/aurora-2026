import Hero        from '../components/Hero'
import About       from '../components/About'
import Events      from '../components/Events'
import Timeline    from '../components/Timeline'
import Gallery     from '../components/Gallery'
// import Departments from '../components/Departments'
import Guidelines  from '../components/Guidelines'
import Committee   from '../components/Committee'
import FAQ         from '../components/FAQ'
// import Register    from '../components/Register'

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Events />
      <Guidelines />
      <Timeline />
      {/* <Departments /> */}
      <Committee />
      <FAQ />
      {/* <Register /> */}
    </main>
  )
}

export default Home
