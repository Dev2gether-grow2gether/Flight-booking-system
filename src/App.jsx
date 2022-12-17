import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
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
        </Routes>
      </Router>
    </div>
  )
}

export default App
