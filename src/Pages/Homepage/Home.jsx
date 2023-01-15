import React, { useEffect, useState } from 'react'
import "./home.css"
import roomlLstIcon from '../../assets/noun-wifi-3238741.svg'
import micIcon from '../../assets/microphone_plus_icon_137404.svg'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import RoomBanner from '../../components/roombanner/RoomsBanner'
import Rooms from '../../components/rooms/rooms'
import Footer from '../../components/foot/Footer'
import ChannelSpace from '../channelspace/ChannelSpace'
export default function Home ()
{
    const navigate = useNavigate()
    const [ currentTab, setCurrentTab ] = useState( "hostedrooms" )
    const [ data, setData ] = useState()

    useEffect( () =>
    {
        fetch( "/mockdata/rooms.json" )
            .then( res => res.json() )
            .then( data =>
            {
                setData( data[ currentTab ] )
                console.log( data[ currentTab ] )
            } )
    }, [ currentTab ] )

    return (
        <div id='home-page'>
            <Header id="header-nav">
                <div id="tabs">
                    <div className={ currentTab === "hostedrooms" ? "tab active" : 'tab' } onClick={ () =>
                    {
                        setCurrentTab( "hostedrooms" )
                    } }>
                        {/* <img src={ micIcon } alt="channel" /> */ }
                        ONGOING
                    </div>
                    <div className={ currentTab === "allrooms" ? "tab active" : 'tab' } onClick={ () =>
                    {
                        setCurrentTab( "allrooms" )
                    } }>
                        {/* <img src={ roomlLstIcon } alt="channel" /> */ }
                        UPCOMING
                    </div>
                </div>
            </Header>

            <section id='rooms-list'>
                { currentTab === "host" ? <ChannelSpace rooms={ data } /> :
                    <Rooms rooms={ data } /> }
            </section>
        </div>
    )
}
