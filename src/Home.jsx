import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"

function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Services/>
    </div>
  )
}

export default Home