import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Education, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, HireMe} from './components'

const  App = () => {
  return (
   <BrowserRouter>
    <div className="relative z-10 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />

      </div>
      <HireMe />
      <About />
      <Experience />
      <Education />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
   </div>
   </BrowserRouter>
  )
}

export default App
