import './App.css'
import { Switch, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Navbar />
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </AnimatePresence>
  )
}

export default App
