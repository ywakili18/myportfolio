import './App.css'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
      </Switch>
    </div>
  )
}

export default App
