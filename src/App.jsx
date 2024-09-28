import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Start from './components/Start'
import QuizBox from './components/QuizBox'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path='/start' element={<QuizBox />} />
      </Routes>
    </>
  )
}

export default App
