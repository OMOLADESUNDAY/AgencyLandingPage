import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import AutoMoving from './component/AutoMoving'

function App() {
 

  return (
    <>
     <Navbar/>
      <Home/>
      <AutoMoving/>
    </>
  )
}

export default App
