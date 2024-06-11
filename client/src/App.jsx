import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Header from './components/Header'
import Footers from './components/Footers'
import Farmvisit from './pages/FarmVisit'
import Urgentcare from './pages/UrgentCare'
import Vetclinic from './pages/VetClinic'
import Videovisit from './pages/VideoVisit'
import Appointment from './pages/Appointment'


function App() {
  return (
<BrowserRouter>
<Header/>

<Routes>
  <Route path ="/" element = {<Home/>}/>
  <Route path ="/about" element = {<About/>}/>
  <Route path ="/dashboard" element = {<Dashboard/>}/>
  <Route path ="/projects" element = {<Projects/>}/>
  <Route path ="/signin" element = {<Signin/>}/>
  <Route path ="/signup" element = {<Signup/>}/>
  <Route path ="/farmvisit" element = {<Farmvisit/>}/>
  <Route path ="/urgentcare" element = {<Urgentcare/>}/>
  <Route path ="/vetclinic" element = {<Vetclinic/>}/>
  <Route path ="/videovisit" element = {<Videovisit/>}/>
  <Route path="/appointment" element = {<Appointment/>}/>
  
  
  
  
  
  
  
</Routes>
<Footers/>
</BrowserRouter>
  )
}

export default App
