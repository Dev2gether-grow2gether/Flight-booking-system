import React, { useState } from 'react'
import ChannelBanner from '../channelbanner/ChannelBanner'
import RoomBanner from '../roombanner/RoomsBanner'

export default function Channels ( { data } )
{
 // console.log( data )
 return (
  <>
   { data?.map( elem =>
   {
    return <ChannelBanner followers={ elem.followers } title={ elem.title } />
   } ) }
  </>
 )
}
