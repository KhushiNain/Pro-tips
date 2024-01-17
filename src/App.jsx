import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import NavBar from './component/NavBar'
import Contact from './pages/contact'
import Registration from './pages/Registration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
      </Routes>
    </>
  )
}

export default App