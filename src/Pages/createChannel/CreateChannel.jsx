import React from 'react'
import upload from "../../assets/icons/image.svg"
import backicon from "../../assets/icons/long_left.svg"
import { useNavigate } from 'react-router-dom'
import "./createchannel.css"
import Input from '../../components/global/Input'
export default function CreateChannel ()
{
 const navigate = useNavigate();
 return (
  <div id='create-channel'>
   <div id='header'>
    <div id='top-bar' >
     <Input type="image" src={ backicon } click={ () =>
     {
      navigate( '/manage_channel/my_channel_space' )
     } } />
    </div>
    <div id="title">
     <h3> Create channel</h3>
     <span id='description'>
      Create your own channel from below
     </span>
    </div>
   </div>
   <section id='channel-form'>
    <form id="form">

     <div className="form-group">
      <label id='channel-name' children="Channel Name" />
      <Input type="text" placeholder='enter channel name' />
     </div>

     <div className="form-group">
      <label id='channel-logo' children='Channel Logo' />
      <Input type="file"  name="profileImage" src={ upload } apt="/*" />
     </div>

     <div className="form-group categories">
      <label id='categories' children="Categories" />
      <div id="category-cont">
       <div className="form-group category">
        <Input type="image" click={ ( e ) => { e.preventDefault() } } src={ upload } />
        <label children='Science' />
       </div>
       <div className="form-group category">
        <Input type="image" click={ ( e ) => { e.preventDefault() } } src={ upload } />
        <label children='Tech' />
       </div>
       <div className="form-group category">
        <Input type="image" click={ ( e ) => { e.preventDefault() } } src={ upload } />
        <label children='Commerce' />
       </div>
       <div className="form-group category" >
        <Input type="image" click={ ( e ) => { e.preventDefault() } } src={ upload } />
        <label children='Design' />
       </div>
      </div>
     </div>

     <div className="form-group description">
      <label children="Description" id='description' />
      <textarea placeholder="write here..." />
     </div>
     <Input type="submit" value="Confirm and Create" id="confirm-btn" />
    </form>
   </section>
  </div>
 )
} 
