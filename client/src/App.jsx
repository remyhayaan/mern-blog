import React from 'react'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/signin' element={<Signin/>} />
    <Route path='/signup' element={<Signup/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
