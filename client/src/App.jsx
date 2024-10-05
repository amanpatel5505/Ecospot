import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Rewards from './pages/Rewards'


function App() {

  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/rewards" element={<Rewards/>} />
    </Routes>
    </Router>
     
    </>
  )
}

export default App
