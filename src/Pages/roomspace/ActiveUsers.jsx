import React, {useEffect, useState} from 'react';
import Input from "../../components/global/Input.jsx";
import more_menu from "../../assets/icons/more_vertical.svg";
import profile_a from "../../assets/imgs/channel1.png";
import waveX from "../../assets/icons/sound-waves.svg";
import waveY from "../../assets/icons/sound-waves-thin.svg";
import waveZ from "../../assets/icons/radio-waves-thick.svg";
import muteMic from "../../assets/icons/microphone-outline-off.svg"

export function ActiveUsers({showMenu}) {

    const [micOpt, setMicOpt] = useState(false)
    const [wave, setWave] = useState(waveX)
    const waveArr = [waveX, waveY, waveZ, waveX, waveX, waveY, waveX]
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (count === 6) {
                setCount(0);
            } else {
                setCount(count + 1);
            }
        }, 60);
        return () => clearInterval(interval);
    }, [count]);


    return (
        <div className={"user-box active"}>
            <div className="user-name">
                <span>Abraham </span>
                <Input type="image" cls="more-menu" src={more_menu} click={showMenu}/>
            </div>
            <div id="user-img">
                <Input type={"image"} cls="profile-img" src={profile_a}/>
                <Input type={"image"} cls="mic-icon" src={micOpt ? waveArr[count] : muteMic}
                       click={() => setMicOpt(!micOpt)}/>
            </div>
            <div className="hide-pop show-pop">
                <ul>
                    <li onClick={() => setMicOpt(!micOpt)}> {micOpt ? "mute" : "unmute"}</li>
                    <hr/>
                    <li> view profile</li>
                </ul>
            </div>
        </div>
    );
}