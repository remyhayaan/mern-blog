import React from 'react'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Header from './components/Header'
import Projects from './pages/Projects'

function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/signin' element={<Signin/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/projects' element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
