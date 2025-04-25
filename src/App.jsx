import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './assets/component/Navbar'
import Hero from './assets/component/Hero'
import List from './assets/component/List'
import Footer from './assets/component/Footer'


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <List></List>
      <Footer></Footer>
    </>
  )
}

export default App
