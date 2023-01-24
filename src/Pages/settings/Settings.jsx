import React from 'react'
import profile from "../../assets/imgs/channel1.png"
import "./settings.css"
import {useNavigate} from 'react-router-dom'
import Input from '../../components/global/Input'
import LangIcon from "../../assets/icons/global.png"
import flagIcon from "../../assets/icons/flag_fill.svg"
import helpIcon from "../../assets/icons/help_circle.svg"
import followsIcon from "../../assets/icons/user_plus.svg"
import userIcon from "../../assets/icons/user.svg"
import TermsIcon from "../../assets/icons/info_circle_outline.svg"
import manageSettingsIcon from "../../assets/icons/settings_future.svg"
import exitIcon from "../../assets/icons/exit.svg"
import shareIcon from "../../assets/icons/share_outline.svg"

export default function Settings({children}) {
    const navigate = useNavigate()

    return (
        <div id="settings-page">
            <div id='settings-container'>
                <div id='profile'>
                    <img src={profile} alt=""/>
                    <div id='profile-details'>
                        <span> Abraham Samuel</span>
                        <small id='quote'> Think positive, stay motivated</small>
                    </div>
                </div>
                <div id="settings-tab-container">
                    <div id="settings-tabs">
                        <div className="tab" onClick={() => navigate('/account_settings')}>
                            <Input src={userIcon} cls="settings-tab-icon"/>
                            <div>
                                <span>  Account  </span>
                                <small> Profile Setting (Name, Contact, privacy)</small>
                            </div>
                        </div>
                        <div className="tab" onClick={() => navigate('/manage_channel/my_channel_space')}>
                            <Input src={manageSettingsIcon} cls="settings-tab-icon"/>
                            <div>
                                <span>  Manage Channel  </span>
                                <small>Channel Space, Manage Followers </small>
                            </div>
                        </div>
                        <div className="tab" onClick={() => navigate('/channels')}>
                            <Input src={followsIcon} cls="settings-tab-icon"/>
                            <div>
                                <span> Following </span>
                                <small>See Channels You Follow, Public Channels </small>
                            </div>
                        </div>
                        <div className="tab">
                            <Input src={LangIcon} cls="settings-tab-icon"/>
                            <div>
                                <span> Language  </span>
                                <small>Set Preferred Language</small>
                            </div>
                        </div>
                        <div className="tab">
                            <Input src={flagIcon} cls="settings-tab-icon"/>
                            <div>
                                <span> Feedback  </span>
                                <small>Report, Rate us</small>
                            </div>
                        </div>
                        <div className="tab">
                            <Input src={helpIcon} cls="settings-tab-icon"/>
                            <div>
                                <span> Help  </span>
                                <small>Help Center, Contact Us, Supports</small>
                            </div>
                        </div>
                        <div className="tab">
                            <Input src={TermsIcon} cls="settings-tab-icon"/>
                            <div>
                                <span> Terms And Conditions  </span>
                                <small>Terms And Conditions, Privacy Policy</small>
                            </div>
                        </div>
                        <div className="tab">
                            <Input src={shareIcon} cls="settings-tab-icon"/>
                            <div>
                                <span> Invite a Friend  </span>
                                <small>Invite A Friend To Join Sion</small>
                            </div>
                        </div>
                        <div className="tab">
                            <Input src={exitIcon} cls="settings-tab-icon"/>
                            <div>
                                <span className='exit'> Exit  </span>
                            </div>
                        </div>
                        <div id='trade-mark'>
       <span>
        SION
       </span>
                        </div>
                    </div>
                </div>
            </div>


            {children}
        </div>
    )
}
