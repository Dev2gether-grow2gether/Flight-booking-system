import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './themes/darkmode.css'
import './App.css'
import Home from './pages/home/Home'
import Settings from './pages/settings/Settings'
import Footer from './components/footerComponent/Footer'
import ManageChannel from './pages/manageChannel/ManageChannel'
import CreateChannel from './pages/createChannel/CreateChannel'
import Channels from './pages/channels/Channels'
import Account from './pages/Account/Account'
import RoomSpace from "./pages/roomspace/RoomSpace";

function App() {

    // const [count, setCount] = useState(0)

    return (
        <section id="app">

            <Router>
                <div>
                    <Routes>
                        {/* <Route exact path="/" element={ <WelcomePage /> } /> */}
                        <Route exact path="/home" element={<Home children={<Footer/>}/>}/>
                        <Route exact path="/settings" element={<Settings children={<Footer/>}/>}/>
                        <Route exact path="/manage_channel/my_channel_space" element={<ManageChannel/>}/>
                        <Route exact path="/account_settings" element={<Account/>}/>
                        <Route exact path="/create_new_channel" element={<CreateChannel/>}/>
                        <Route exact path="/channels" element={<Channels/>}/>
                        <Route exact path="/room_space" element={<RoomSpace/>}/>
                    </Routes>
                </div>
            </Router>
        </section>
    )
}

export default App
