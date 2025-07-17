import About from "./components/About"
import CTA from "./components/CTA"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Services from "./components/Services"

function App() {


  return (
    <>
 <main className="bg-black w-autp overflow-x-hidden " >
<Navbar/>
<Hero/>
<Services/>
<About/>
<Pricing/>
<CTA/>
 </main>
    </>
  )
}

export default App
