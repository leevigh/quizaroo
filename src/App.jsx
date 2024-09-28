import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Start from './components/Start'
import QuizBox from './components/QuizBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path='/start' element={<QuizBox />} />
        {/* <Route path="/extension" element={<Extension />} />
        <Route path="/testnet" element={<Navigate to={"/dashboard"} />} />
        <Route path="/contact" element={<Navigate to={"/"} />} />
        <Route path="/faucet" element={<Faucet />} /> */}
      </Routes>
    </>
  )
}

export default App
