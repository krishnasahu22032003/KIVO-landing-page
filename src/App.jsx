import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"

function App() {


  return (
    <>
 <main className="bg-black w-autp overflow-x-hidden " >
<Navbar/>
<Hero/>
<Services/>
<About/>
 </main>
    </>
  )
}

export default App
