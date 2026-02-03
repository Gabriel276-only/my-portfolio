import AboutMe from './components/about'
import Footer from './components/footer'
import InteractiveMouse from './components/cursorInteractive'
import Interests from "./components/Objectives"; // Used in the JSX
import './App.css'

function App() {
  

  return (
    
    <main>
      <AboutMe/>
      <Interests /> 
      <Footer/>
      <InteractiveMouse />
    </main>
    
  )
}

export default App
