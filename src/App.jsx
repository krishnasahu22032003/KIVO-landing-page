import About from "./components/About"
import Checking from "./components/Checking"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Services from "./components/Services"

function App() {


  return (
    <>
 <main className=" w-autp overflow-x-hidden " >
<Navbar/>
<Hero/>
<Services/>
<About/>
<Pricing/>
<CTA/>
<Footer/>
<Checking/>
 </main>
    </>
  )
}

export default App
