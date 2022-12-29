import React, { useEffect, useState } from 'react'
import welcomeImg from '../assets/welcomeImg.svg'
import logo from '../assets/logo.svg'
import slide1logo from '../assets/slide1logo.svg'
import insta from '../assets/insta.svg'
import fb from '../assets/fb.svg'
import google from '../assets/google.svg'
import WelcomeSlide from '../components/WelcomeSlide'
import "./welcomePage.css"


export default function WelcomePage ()
{




 const [ count, setCount ] = useState( 0 )

 useEffect( () =>
 {
  var slider = document.querySelector( '.welcome-page-container' );
  var slide = document.querySelectorAll( '.slides' );
  var currentSlide = 0;
  var startPoint = 0;
  var endPoint = 0;

  slider.addEventListener( 'mousedown', function ( event )
  {
   startPoint = event.clientX;
  } )
  slider.addEventListener( 'mouseup', function ( event )
  {
   endPoint = event.clientX;
   if ( startPoint > endPoint )
   {
    
    slide[ currentSlide ].style.marginLeft = "-100vw";
    currentSlide = ( currentSlide + 1 ) % slide.length;
    slide[ currentSlide ].style.marginLeft = "0px";
   }
  } )

  slider.addEventListener( 'touchstart', function ( event )
  {
   startPoint = event.touches[ 0 ].clientX;
  } )
  slider.addEventListener( 'touchend', function ( event )
  {
   endPoint = event.changedTouches[ 0 ].clientX;
   if ( startPoint > endPoint )
   {
    slide[ currentSlide ].style.marginLeft = "-100vw";
    currentSlide = ( currentSlide + 1 ) % slide.length;
    slide[ currentSlide ].style.marginLeft = "0px";
   }

  } )
 } )

 const Logo = ( { slideLogo, cls } ) =>
 {
  return <img draggable={ false } onDragStart={ ( event ) => event.preventDefault() } className={ cls } src={ slideLogo } />

 }
 const Pagiganation = ( { num } ) =>
 {
  return (
   <div className='pignation'>
    <span className={ num == 0 ? "active" : "inactive" }></span>
    <span className={ num == 1 ? "active" : "inactive" }></span>
    <span className={ num == 2 ? "active" : "inactive" }></span>
   </div>
  )
 }

 return (
  <div className='welcome-page-container'>
   <WelcomeSlide cls='slide1 slides'>
    <Logo slideLogo={ slide1logo } cls='logo' />
    <div className='foot-container'>
     <Pagiganation num={ 0 } />
    </div>
   </WelcomeSlide>

   <WelcomeSlide cls='slide2 slides'>
    <Logo slideLogo={ logo } cls='logo' />
    <div className='slide-img'>
     <img draggable={ false } onDragStart={ ( event ) => event.preventDefault() } src={ welcomeImg } />
    </div>
    <div className='foot-container'>
     <div className='slide-action-bnt'>
      GET STARTED
     </div>
     <Pagiganation num={ 1 } />
    </div>
   </WelcomeSlide>

   <WelcomeSlide cls='slide3 slides'>

    <div id='info-text'>
     Sign In And Get Started With Book It...
    </div>

    <form action="">

     <button className='find-fight-form-btn'>
      Find a flight
     </button>

     <button className='signin-form-btn'>
      SIgn in
     </button>
     <hr />

     <div id="social-login-option">
      <div id="social-login-icon">
       <img src={ insta } alt="" className='social-icon' />
       <img src={ fb } alt="" className='social-icon' />
       <img src={ google } alt="" className='social-icon' />
      </div>
      <button className='create-acct-form-btn'>
       SIgn in
      </button>
     </div>

    </form>

    <div className='foot-container'>
     <div className='slide-action-bnt'>
      Get
     </div>
     <Pagiganation num={ 2 } />
    </div>
   </WelcomeSlide>
  </div>
 )
}
