import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas } from './components';
import Works1 from "./components/Works1";
import Works2 from "./components/Works2";

const App = () => {

  return ( 
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Works/>
      <Works1/>
      <Works2/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    
    </BrowserRouter>
  )
}

export default App
