import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './themes/darkmode.css'
import './App.css'
import './themes/colors.css'
import Home from './Pages/Homepage/home'
import WelcomePage from './Pages/welcome/WelcomePage'
import Channels from './Pages/channelpage/channel'
import Status from './Pages/status/Status'
import Settings from './Pages/settings/Settings'
import Footer from './components/foot/Footer'
import ChannelSpace from './Pages/channelspace/ChannelSpace'

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
          <Route exact path="/status" element={
            <Home />
          } />
          <Route exact path="/channelspace" element={
            <ChannelSpace />
          } />
          <Route exact path="/settings" element={
            <Settings />
          } />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
