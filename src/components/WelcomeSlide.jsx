import React, { useEffect } from 'react'

export default function WelcomeSlide ( { children, cls, slides, slideId, } )
{

 useEffect( () =>
 {
  console.log( 'loaded' )
 }, [] )

 return (
  <>
   <div className={ cls }>

    { children }

   </div>
   {/* <div>
    12345
   </div> */}
  </>
 )
}
