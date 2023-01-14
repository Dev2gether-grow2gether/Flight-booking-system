import React from 'react'
// import input from '../../globalComponents/Input'
import Logo from "../../assets/images/stuprofile.jfif";
import Logo2 from "../../assets/images/logo.png";
import channel1 from "../../assets/images/channel1.png";
import "./roombanner.css"

export default function RoomBanner ({connected, title})
{
  return (
    <div className="rooms-banner-cont">
      <div className="rooms-banner">
        <div className="room-catergory-image">
          <input type="image" src={ channel1 } />
        </div>
        <div className="room-details">
          <span className="room-name">
            {title}
          </span>
          <span className="room-data">
           <span id='join-ppl'> {connected} connected,</span>  <span id='sync-time'>03 Jan 2023</span>
          </span>
        </div>
        <input type="submit" value="" className="join-room" />
      </div>
    </div>
  )
}
