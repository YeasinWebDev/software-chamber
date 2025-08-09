import Faq from "./components/Faq"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Review from "./components/Review"
import Services from "./components/Services"
import Stacks from "./components/Stacks"
import WhyChoose from "./components/WhyChoose"

function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Services/>
      <WhyChoose/>
      <Stacks/>
      <Faq/>
      <Review/>
    </div>
  )
}

export default Home