import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Facilities from './components/Facilities'
import Merch from './components/Merch'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Hero />
    <Services />
    <Facilities />
    <Merch />
    </>
  )
}

export default App
