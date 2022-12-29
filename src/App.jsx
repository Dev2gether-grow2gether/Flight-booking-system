import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './Pages/Homepage/home'
import WelcomePage from './Pages/WelcomePage'

function App ()
{

  const [ count, setCount ] = useState( 0 )

  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/" element={
            <WelcomePage />
          } />
          <Route exact path="/bookit/flights/home" element={
            <Home />
          } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
