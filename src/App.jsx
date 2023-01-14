import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './themes/darkmode.css'
import './App.css'
import './themes/colors.css'
import Home from './Pages/Homepage/home'
import WelcomePage from './Pages/welcome/WelcomePage'
import Channels from './Pages/channelpage/channel'

function App ()
{

  const [ count, setCount ] = useState( 0 )

  return (
    <div id="app">
      <Router>
        <Routes>
          <Route exact path="/" element={
            <WelcomePage />
          } />
          <Route exact path="/home" element={
            <Home />
          } />
          <Route exact path="/channels" element={
            <Channels />
          } />
          <Route exact path="/settings" element={
            <Home />
          } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
