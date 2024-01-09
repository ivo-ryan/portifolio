import './App.css'
import { About } from './components/about/about'
import { Contact } from './components/contact/contact'
import { Header } from './components/header/header'
import { Projects } from './components/projects/projects'
import { Services } from './components/services/services'

function App() {

  return (
    <>
        <Header/>
        <main>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
        </main>
       
    </>
  )
}

export default App
