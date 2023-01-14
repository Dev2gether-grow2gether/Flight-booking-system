import React, { useEffect, useState } from 'react'
import "./channel.css"
import channelIcon from '../../assets/megaphone.png'
import followIcon from '../../assets/hashtag.png'
import globalIcon from '../../assets/global.png'
import homeIcon from "../../../coolicons.v2.5/coolicons v2.5.iconjar/icons/home-alt-fill.svg"
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/foot/Footer'
import Channels from '../../components/channels/Channels'
import ChannelSpace from '../channelspace/ChannelSpace'
export default function Channel ()
{
    const navigate = useNavigate()
    const [ currentTab, setCurrentTab ] = useState( "channels" )
    const [ data, setData ] = useState()

    useEffect( () =>
    {
        fetch( "/mockdata/channels.json" )
            .then( res => res.json() )
            .then( data =>
            {
                setData( data[ currentTab ] )
                // console.log( data[ currentTab ] )
            } )
    }, [ currentTab ] )

    return (
        <div id='channel-page'>
            <Header id="channel-nav">
                <div id="tabs">
                    <div className={ currentTab === "channels" ? "tab active" : 'tab' } onClick={ () => { setCurrentTab( "channels" ) } }>
                        <img
                            src={ channelIcon } alt="channel" /></div>
                    <div className={ currentTab === "follows" ? "tab active" : 'tab' } onClick={ () =>
                    {
                        setCurrentTab( "follows" )
                    } }> <img src={ followIcon } alt="channel" /> </div>
                    <div className={ currentTab === "global" ? "tab active" : 'tab' } onClick={ () =>
                    {
                        setCurrentTab( "global" )
                    } }>  <img src={ globalIcon } alt="channel" /> </div>
                </div>
            </Header>
            <section id='channels-list'>

                { currentTab === "channels" ? <ChannelSpace data={ data } /> :
                    <Channels data={ data } /> }
            </section>
            <Footer />
        </div>
    )
}
