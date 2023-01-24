import React from 'react'
import upload from "../../assets/icons/image.svg"
import {useNavigate} from 'react-router-dom'
import Input from '../../components/global/Input'

export default function Myspace() {
    const navigate = useNavigate();
    return (
        <div id='host-room'>
            <div id='header'>
                <div id="title">
     <span id='description'>
      Host a space concerning a topic or matter
     </span>
                </div>
            </div>
            <section id='room-form'>
                <form id="form">

                    <div className="form-group">
                        <label id='room-logo' children='banner'/>
                        <Input type="file" name="profileImage" src={upload} apt="/*"/>
                    </div>
                    <div className="form-group">
                        <label id='room-name' children="topic"/>
                        <Input type="text" placeholder='enter space topic'/>
                    </div>
                    <div className="form-group">
                        <label id='room-logo' children='date/time'/>
                        <Input type="datetime-local" name="profileImage"/>
                    </div>
                    <div className="form-group description">
                        <label children="Description" id='description'/>
                        <textarea placeholder="write here..."/>
                    </div>
                    <Input type="submit" value="Host" id="confirm-btn"/>
                </form>
            </section>
        </div>
    )
} 
