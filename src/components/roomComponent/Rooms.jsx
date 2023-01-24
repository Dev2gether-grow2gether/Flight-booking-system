import React from 'react'
import Input from '../global/Input'
import googleImg from "../../assets/imgs/google.svg"
import "./rooms.css"

export default function Rooms({details, click}) {
    return (
        <div className="rooms-banner-cont" onClick={click}>
            <div className="rooms-banner">
                <div className="room-category-image">
                    <Input type="img" alt="" src={googleImg}/>
                </div>
                <div className="room-details">
     <span className="room-name">
      {details.title}
     </span>
                    <span className="room-data">
      <span id='join-ppl'> {details.connected} connected,</span>  <span id='sync-time'>03 Jan 2023</span>
     </span>
                </div>
                <Input type="submit" value="" cls="join-room"/>
            </div>
        </div>
    )
}
