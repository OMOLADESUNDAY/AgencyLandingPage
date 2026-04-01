import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import AutoMoving from './component/AutoMoving'
import Story from './pages/Story'
import ImageSlider from './pages/Imageslider'

function App() {
 

  return (
    <>
     <Navbar/>
      <Home/>
      <AutoMoving/>
      <Story/>
      <ImageSlider/>
    </>
  )
}

export default App
