import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Rewards from './pages/Rewards'
import Community from './pages/Community'


function App() {

  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/rewards" element={<Rewards/>} />
      <Route path='/community' element={<Community/>} />
    </Routes>
    </Router>
     
    </>
  )
}

export default App
