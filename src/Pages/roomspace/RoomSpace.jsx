import React, {useEffect, useState} from "react";
import "./room.css";
import Input from "../../components/global/Input.jsx";
import mic from "../../assets/icons/microphone-fill.svg"
import exist_icon from "../../assets/icons/exit.svg"
import more_menu from "../../assets/icons/more_vertical.svg"
import muteMic from "../../assets/icons/microphone-outline-off.svg"
import {useNavigate} from "react-router-dom";
import {ActiveUsers} from "./ActiveUsers";
import RecordRTC from 'recordrtc';

export default function RoomSpace() {
    const [recording, setRecording] = useState(false);
    const [audioRecorder, setAudioRecorder] = useState(null);

    useEffect(() => {
        if (recording) {
            // Start recording audio
            navigator.mediaDevices.getUserMedia({audio: true})
                .then(stream => {
                    // Start recording audio
                    const audioRecorder = RecordRTC(stream, {type: 'audio'});
                    audioRecorder.startRecording();
                    setAudioRecorder(audioRecorder);
                })
                .catch(err => {
                    console.log('Error getting microphone', err);
                    // Handle the error
                });
        } else if (audioRecorder) {
            // Stop recording audio
            audioRecorder.stopRecording(() => {
                const blob = audioRecorder.getBlob();
                // Do something with the recorded audio (e.g. save it to a file, upload it to a server, etc.)
            });
            setAudioRecorder(null);
        }
    }, [recording, audioRecorder]);

    const navigate = useNavigate()
    const [micState, setMicState] = useState(true)
    const [active, setActive] = useState(false);
    const userBox = document.getElementsByClassName('user-box');
    const changeFocus = () => {
        for (let userBoxKey of userBox) {
            userBoxKey.addEventListener('click', () => {
                for (let userBoxKey of userBox) {
                    userBoxKey.classList.remove("active")
                }
                userBoxKey.classList.add("active")
            })
        }
    }

    const showMenu = (event) => {
        if (event.clientX < window.innerWidth - event.clientX) {
            event.target.parentElement.parentElement.lastElementChild.style.left = "90%"
            event.target.parentElement.parentElement.lastElementChild.classList.toggle("hide-pop")
        } else {
            event.target.parentElement.parentElement.lastElementChild.lastElementChild.firstElementChild.style.textAlign = "right";
            event.target.parentElement.parentElement.lastElementChild.lastElementChild.lastElementChild.style.textAlign = "right";
            event.target.parentElement.parentElement.lastElementChild.style.textAlign = "right";
            event.target.parentElement.parentElement.lastElementChild.style.left = "26%"
            event.target.parentElement.parentElement.lastElementChild.classList.toggle("hide-pop")
        }
    }
    const closeExistingMenu = (mainParent) => {
        for (let child of mainParent.firstElementChild.children)
            child.lastElementChild.classList.contains("hide-pop") ? child.lastElementChild.classList.toggle("pop") : child.lastElementChild.classList.toggle("hide-pop")
        mainParent.lastElementChild.lastElementChild.classList.contains("hide-pop") ? false : mainParent.lastElementChild.lastElementChild.classList.toggle("hide-pop")
    }
    useEffect(() => {
        const mainParent = document.getElementById("room-space-container")
        mainParent.addEventListener('click', () => closeExistingMenu(mainParent))
    }, [])


    const userTabMenu = (event) => {
        if (event.clientX < window.innerWidth - event.clientX) {
            event.target.parentElement.lastElementChild.classList.toggle("hide-pop")
        } else {
            event.target.parentElement.lastElementChild.style.textAlign = "right";
            event.target.parentElement.lastElementChild.classList.toggle("hide-pop")
        }
    }

    return (
        <div id="room-space-container">
            <div id="ppl-container">
                <ActiveUsers showMenu={showMenu}/>
                <ActiveUsers showMenu={showMenu}/>
                <ActiveUsers showMenu={showMenu}/>
                <ActiveUsers showMenu={showMenu}/>
                <ActiveUsers showMenu={showMenu}/>
                <ActiveUsers showMenu={showMenu}/>
                <ActiveUsers showMenu={showMenu}/>
                <ActiveUsers showMenu={showMenu}/>
                <ActiveUsers showMenu={showMenu}/>
            </div>
            <div id="note-container">
                <div id="note">
                    Stack Wears – a fashion brand that
                    helps you showcase your career and
                    skills with high-quality wears.
                    skills with high-quality wears.
                    #cloth #vintage #vintagestyle #viral
                    skills with high-quality wears.
                    skills with high-quality wears.
                    #wear #wearingtoday #clothingbrand
                    #cloth #vintage #vintagestyle #viral
                    #cloth #vintage #vintagestyle #viral
                    #vintagefashion #stackwear #stackwears
                    #stackoverflow #fashion #designerwear
                    #design #iamaprogrammerihavenolife
                    #programming #developer #development
                    #contentcreator #fx #fxtrader #stack
                    #contentcreator #fx #fxtrader #stack
                    #contentcreator #fx #fxtrader #stack
                    #contentcreator #fx #fxtrader #stack
                    #followforfollowback #fitness #fore

                </div>
            </div>
            <div id="action-btn-container">
                <Input type={"image"} src={more_menu} click={userTabMenu}/>
                <Input type={"image"} src={recording ? mic : muteMic} click={() => {
                    setRecording(!recording)
                    setMicState(muteMic => !muteMic)
                }}/>
                {/*<Input type={"image"} src={mic}/>*/}
                <Input type={"image"} click={() => navigate("/home")} src={exist_icon}/>
                <div className="hide-pop show-pop">
                    <ul>
                        <li> Display Scripture</li>
                        <hr/>
                        <li> Text to Speech</li>
                        <hr/>
                        <li> Speech to Text</li>
                        <hr/>
                        <li> Pause Audio</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
