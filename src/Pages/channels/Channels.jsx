import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/headerComponent/Header'
import backIcon from "../../assets/icons/long_left.svg";
import Logo from "../../assets/imgs/logo.png";
import Logo1 from "../../assets/imgs/stuprofile.jfif";
import Logo2 from "../../assets/imgs/logo.png";
import Logo3 from "../../assets/imgs/google.svg";
import Logo4 from "../../assets/imgs/channel1.png";
import "./channels.css"
import Input from '../../components/global/Input';

export default function Channels ()
{
 const navigate = useNavigate()
 const [ currentTab, setCurrentTab ] = useState( "Channels" )
 const [ data, setData ] = useState()

 useEffect( () =>
 {
  fetch( "/mockdata/channels.json" )
   .then( res => res.json() )
   .then( data =>
   {
    setData( data[ currentTab ] )
    console.log( data[ currentTab ] )
   } )
 }, [ currentTab ] )

 return (
  <div id='channel-page'>
   <div id='top'>
    <Input id='back-icon' src={ backIcon } alt="" click={ () => navigate( '/settings' ) } />
    <Header tabs={ [ "Channels", "Global" ] } currentTab={ currentTab } setTab={ setCurrentTab } />
   </div>
   <section id='channels-list'>
    { data?.map( elem =>
    {
     return ( <div className="channels-banner">
      <div className="channels-banner-title">
       <div className="channel-catergory-image">
        <Input type="image" src={ Logo } />
       </div>
       <div className="channel-details">
        <span className="channel-name">
         { elem.title }
        </span>
        <span className="channel-data">
         { elem.followers } Members, since 03 Jan 2023
        </span>
       </div>
      </div>
      <div className="channels-banner-info">
       <div className="channel-user-image">
        <Input type="image" src={ Logo1 } />
        <Input type="image" src={ Logo3 } />
        <Input type="image" src={ Logo4 } />
       </div>
       <Input type="submit" value="follow" cls="join-channel" />
      </div>
     </div> )
    } ) }
   </section>
   {/* <Footer /> */ }
  </div>
 )
}
