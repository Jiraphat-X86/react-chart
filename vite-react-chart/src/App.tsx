import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import * as action from './redux/actions/counter.action'

const client = new ApolloClient({
  uri:
    'https://api-ap-southeast-2.hygraph.com/v2/clbg6tqxl01b901us12eacupn/master',
  cache: new InMemoryCache()
});

import About from './views/About'
import Contract from './views/Contract'
import Error from './views/Error'
import Home from './views/Home'
import RaderChart from './views/RaderChart'
import Setting from './views/Setting'
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  
  const dispatch = useDispatch()
  const counterReducer = useSelector(({counterReducer}) => counterReducer)

  function handleLogin() {
    setLoggedIn(true)
  }

  function handleLogout() {
    setLoggedIn(false)
  }

  let activeClassName = 'nav-active'

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <header>
          <h1>Welcome to Vite React.</h1>
        </header>
        <button onClick={() => dispatch(action.onIncrementAsync())}>Increment after 1 second</button>
        <button onClick={() => dispatch(action.onIncrement())}>Increment</button>
        <button onClick={() => dispatch(action.onDecrement())}>Decrement</button>
        <button onClick={() => dispatch(action.onAdd(10))}>Add</button>
        <hr />
        <div>Clicked: {counterReducer.count}</div>
        <nav>
          <NavLink className={({ isActive }) => isActive ? activeClassName : undefined} end to=''>Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? activeClassName : undefined} to='about'>About</NavLink>
          <NavLink className={({ isActive }) => isActive ? activeClassName : undefined} to='contract'>Contract</NavLink>
          <NavLink to='/dashboard'>Dashboard</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={loggedIn ? <Navigate to={'/dashboard'} /> : <Home login={handleLogin} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contract' element={<Contract />} />
          <Route path='/dashboard' element={loggedIn ? <Dashboard logout={handleLogout} /> : <Navigate to='/' state={'From Dsshboard'} />} >
            <Route path='settings' element={<p>This is the nested setttings route</p>} />
          </Route>
          <Route path='/rader-chart' element={<RaderChart />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/profile'>
            <Route path=':userId' element={<Profile />} />
          </Route>
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>  
    </ApolloProvider>
    
  )
}

export default App
