import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '.././../components/headerComponent/Header'
import backIcon from "../../assets/icons/long_left.svg";
// import channel1 from "../../assets/images/channel1.png";
import "./managechannel.css"
import User from '../../components/userComponent/User';
import Input from '../../components/global/Input';
import Myspace from './Myspace';
// import Footer from '../../components/foot/Footer'
// import searchIcon from "../../../coolicons.v2.5/coolicons v2.5 SVG/edit/search.svg"
export default function ManageChannel ()
{
  const navigate = useNavigate()
  const [ currentTab, setCurrentTab ] = useState( "followers" )
  const [ data, setData ] = useState()

  useEffect( () =>
  {
    fetch( "/mockdata/followers.json" )
      .then( res => res.json() )
      .then( data =>
      {
        setData( data )
      } )
  }, [ currentTab ] )

  return (
    <>
      <div id="channel-space">
        <div id='channel-space-cont'>
          { !data ?
            (
              <div id='create-channel-section'>
                <div id='top'>
                  <Input id='back-icon' src={ backIcon } alt="" click={ () => navigate( '/settings' ) } />
                </div>
                <div id='create-channel-image'>
                </div>
                <div id='create-channel-btn' onClick={ () => navigate( '/create_new_channel' ) }> Create Channel </div>
              </div> ) :
            (
              <div id='my-channel'>
                <div id='top'>
                  <Input id='back-icon' src={ backIcon } alt="" click={ () => navigate( '/settings' ) } />
                  <Header tabs={ [ "followers", "my space" ] } currentTab={ currentTab } setTab={ setCurrentTab } />
                </div>
                { currentTab === "my space" ?
                  <div id='subs-list'>
                    <Myspace />
                  </div>
                  :
                  <div id='subs-list'>
                    { data?.map( userdata => <User user={ userdata } />
                    ) }
                  </div>
                }
              </div> )
          }
        </div>
        {/* <Footer /> */ }
      </div >
    </>
  )
}
