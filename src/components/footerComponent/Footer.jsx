import React from 'react'
import { useNavigate } from 'react-router-dom'
// import ChannelBanner from '../../components/channelbanner/ChannelBanner'
import homeIcon from "../../assets/icons/home-alt-fill.svg"
import channelsIcon from "../../assets/icons/network.svg"
import settingsIcon from "../../assets/icons/settings.svg"
import Input from '../global/Input'
import "./footer.css"
export default function Footer ()
{
 const navigate = useNavigate()

 const changeRoute = ( route ) => navigate( "/" + route )

 return (
  <footer id='foot-nav'>
   <div> <Input type="image" src={ homeIcon } click={ () => changeRoute( "home" ) } /> </div>
   <div> <Input type="image" src={ channelsIcon } click={ () => changeRoute( "home" ) } /> </div>
   <div> <Input type="image" src={ settingsIcon } click={ () => changeRoute( "settings" ) } /> </div>
  </footer>
 )
}
