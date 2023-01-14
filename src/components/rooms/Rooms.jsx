import React, { useState } from 'react'
import RoomBanner from '../roombanner/RoomsBanner'

export default function Rooms ( { rooms } )
{
 console.log( rooms )

 
 return (
  <>
   { rooms?.map( elem =>
   {
    return <RoomBanner connected={ elem.connected } title={ elem.title } />
   } ) }
   
  </>
 )
}
