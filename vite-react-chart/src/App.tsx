import { useState } from 'react'
import './App.css'
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'

import About from './views/About'
import Contract from './views/Contract'
import Error from './views/Error'
import Home from './views/Home'
import RaderChart from './views/RaderChart'
import Setting from './views/Setting'



function App() {
  const [count, setCount] = useState(0)

  let activeClassName = 'nav-active'

  return (
    <BrowserRouter>
      <header>
        <h1>Welcome to Vite React.</h1>
      </header>
      <nav>
        <NavLink className={({ isActive }) => isActive ? activeClassName : undefined} end to=''>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? activeClassName : undefined} to='about'>About</NavLink>
        <NavLink className={({ isActive }) => isActive ? activeClassName : undefined} to='contract'>Contract</NavLink>
        <NavLink to='/dashboard'>Dashboard</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contract' element={<Contract />} />
        <Route path='/dashboard' element={<Navigate to='/' />} />
        <Route path='/rader-chart' element={<RaderChart />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/*' element={<Error />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
