import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import Header from './components/Header'
Header

function App() {
  return (
    <BrowserRouter>
   <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Sign-in" element={<Signin/> } />
      <Route path="/Sign-up" element={<SignUp/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/profile" element={<Profile/>} />

      
    </Routes>
    
    </BrowserRouter>
  )
}

export default App