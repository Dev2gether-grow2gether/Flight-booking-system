import React, { useState } from 'react'
import Searchbarform from '../Searchbarform'
import "./header.css"
export default function Header ( { tabs = [ "home" ], setTab, currentTab } )
{
 return (
  <header id='header' >
   <Searchbarform />
   <nav id="header-nav" >
    <div id="tabs">
     <div id="tabs">
      <div className={ currentTab === tabs[ 0 ] ? "tab active" : 'tab' } onClick={ () => { setTab( tabs[ 0 ] ) } }>
       { tabs[ 0 ] }
      </div>
      <div className={ currentTab === tabs[ 1 ] ? "tab active" : 'tab' } onClick={ () => { setTab( tabs[ 1 ] ) } }>
       { tabs[ 1 ] }
      </div>
     </div>
    </div>
   </nav>
  </header>
 )
}
