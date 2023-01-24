import React from 'react'
import {useNavigate} from 'react-router-dom'
import Input from '../../components/global/Input'
import backIcon from "../../assets/icons/long_left.svg";
import profile from "../../assets/imgs/channel1.png"
import "./account.css"

export default function Account() {
    const navigate = useNavigate()

    return (
        <div id='account-page'>
            <div id='top'>
                <Input id='back-icon' src={backIcon} alt="" click={() => navigate('/settings')}/>
            </div>
            <div id='account-profile-container'>
                <div id="profile_img">
                    <img src={profile} alt=""/>
                </div>

                <div id='account-details'>
                    <h4>Profile Details</h4>
                    <div className="tab">
                        <Input pl="NAME"/>
                    </div>
                    <div className="tab">
                        <Input pl="QUOTE"/>
                    </div>
                </div>

                <div id='account-details'>
                    <h4>Profile Contact</h4>
                    <div className="tab">
                        <Input pl="PHONE (+234)"/>
                    </div>
                    <div className="tab">
                        <Input pl="EMAIL (example@gmail.com)"/>
                    </div>
                </div>

                <div id='account-details'>
                    <h4>Account Privacy</h4>
                    <div className="tab">
                        <select id='privacy-selection'>
                            <option value="Account Visibility">
                                Select Privacy
                            </option>
                            <option value="private">PRIVATE</option>
                            <option value="public">PUBLIC</option>
                        </select>
                    </div>
                </div>
                <div id="save-settings-btn">
                    save
                </div>
                <div id='trade-mark'>
       <span>
        SION
       </span>
                </div>
            </div>
        </div>

    )
}
