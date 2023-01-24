import React from 'react'

import userImg from "../../assets/imgs/google.svg"
import Input from '../global/Input'

export default function User ( { user } )
{
 return (
  <div className='users' >
   <div className="follower-component">
    <div className="follower">
     <div className="follower-image">
      <Input type="image" src={ userImg } />
     </div>
     <div className="follower-details">
      <span className="follower-name">
       { user.name }
      </span>
      <span className="follower-quote">
       { user.quote }
      </span>
     </div>
    </div>
   </div>
  </div>
 )
}
