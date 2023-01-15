import React, { useEffect, useState } from 'react'
import welcomeImg from '../../assets/welcomeImg.svg'
import logo from '../../assets/logo.svg'
import slide1logo from '../../assets/slide1logo.svg'
import insta from '../../assets/insta.svg'
import fb from '../../assets/fb.svg'
import google from '../../assets/google.svg'
import WelcomeSlide from '../../components/WelcomeSlide'
import "./welcomePage.css"

import ElementSelector from "../../myfunctions/ElementSelector";
import nxt from "../../../coolicons.v2.5/coolicons v2.5 SVG/arrow/circle_right.svg"
import "./welcomepage.css";
import { useNavigate } from "react-router-dom";
import firstSlideImage from "../../assets/images/firstSlideImage.svg";
import secondSlideImage from "../../assets/images/secondSlideImage.svg";
import thirdSlideImage from "../../assets/images/thirdSlideImage.svg";
// import input from "../../globalComponents/input";


export default function WelcomePage ()
{




  const [ count, setCount ] = useState( 0 )

  // useEffect( () =>
  // {
  //  var slider = document.querySelector( '.welcome-page-container' );
  //  var getStartedBtn = document.querySelector( '#getStartedBtn' );
  //  var slide = document.querySelectorAll( '.slides' );
  //  var currentSlide = 0;
  //  var startPoint = 0;
  //  var endPoint = 0;

  //  slider.addEventListener( 'mousedown', function ( event )
  //  {
  //   startPoint = event.clientX;
  //  } )
  //  slider.addEventListener( 'mouseup', function ( event )
  //  {
  //   endPoint = event.clientX;
  //   if ( startPoint > endPoint )
  //   {

  //    slide[ currentSlide ].style.marginLeft = "-100vw";
  //    currentSlide = ( currentSlide + 1 ) % slide.length;
  //    slide[ currentSlide ].style.marginLeft = "0px";
  //   }
  //  } )

  //  slider.addEventListener( 'touchstart', function ( event )
  //  {
  //   startPoint = event.touches[ 0 ].clientX;
  //  } )
  //  slider.addEventListener( 'touchend', function ( event )
  //  {
  //   endPoint = event.changedTouches[ 0 ].clientX;
  //   if ( startPoint > endPoint )
  //   {
  //    slide[ currentSlide ].style.marginLeft = "-100vw";
  //    currentSlide = ( currentSlide + 1 ) % slide.length;
  //    slide[ currentSlide ].style.marginLeft = "0px";
  //   }

  //  } )
  //  getStartedBtn.addEventListener( "click", () =>
  //  {

  //   slide[ currentSlide ].style.marginLeft = "-100vw";
  //   currentSlide = ( currentSlide + 1 ) % slide.length;
  //   slide[ currentSlide ].style.marginLeft = "0px";
  //  }
  //  )
  // } )

  const slideIt = ( page ) =>
  {
    var slider = document.querySelector( '.welcome-page-container' );
    var slide = document.querySelectorAll( '.slides' );

    slide[ page ].style.marginLeft = "-100vw";
    currentSlide = ( currentSlide + 1 ) % slide.length;
    slide[ currentSlide ].style.marginLeft = "0px";
  }


  const Logo = ( { slideLogo, cls } ) =>
  {
    return <img draggable={ false } onDragStart={ ( event ) => event.preventDefault() } className={ cls } src={ slideLogo } />

  }
  const Pagiganation = ( { num } ) =>
  {
    return (
      <div className='pignation'>
        <span className={ num == 0 ? "active" : "inactive" }

        ></span>
        <span className={ num == 1 ? "active" : "inactive" }></span>
        <span className={ num == 2 ? "active" : "inactive" }></span>
      </div>
    )
  }

  const navigate = useNavigate();
  var slideCount = 0;
  const changeRoute = () =>
  {
    localStorage.setItem( "usersFirstVisit", true )
    navigate( "/home" );
  };
  const welcomeMsgData = [
    {
      title: "Explore the digital canvas and unleash your creativity with our drawing board feature!",
      img: firstSlideImage,
    },
    {
      title: "Host classes and lectures virtually with just a few clicks! Our user-friendly platform has everything you need to make learning easy and engaging.",
      img: secondSlideImage,
    },
    {
      title: "Bring friends and family together by creating group chats for any occasion!",
      img: thirdSlideImage,
    },
    {
      title: "Stay in touch anytime and anywhere with our real-time audio. Keep conversations going across the globe!",
      img: firstSlideImage,
    },
    {
      title: "Make your voice heard and get answers fast with our polls posting feature. Get everyone's opinion on important matters!",
      img: secondSlideImage,
    },
    {
      title: "Stand out by being an influential contributor and get rewarded for your efforts. Earn rewards and be recognized for your valuable input!",
      img: thirdSlideImage,
    },
  ]

  function* slideGenerator ( slideDirection )
  {
    const changeWelcomeSlide = ( slideCount ) =>
    {
      new ElementSelector( "#welcomepage-slide-image" ).setStyle( {
        backgroundImage: `url(${ welcomeMsgData[ slideCount ].img })`
      } );
      new ElementSelector( "#welcomepage-slide-title" ).setAttr( {
        textContent: welcomeMsgData[ slideCount ].title
      } );
    }

    switch ( slideDirection )
    {
      case "prev":
        if ( slideCount > 0 )
        {
          slideCount--;
          yield changeWelcomeSlide( slideCount );
        }
        break;
      case "next":
        // new ElementSelector( "#prev-btn" ).setStyle( {
        //   display: 'inline'
        // } );
        if ( slideCount < welcomeMsgData.length - 1 )
        {
          slideCount++;
          yield changeWelcomeSlide( slideCount );
        } else
        {
          changeRoute();
        }
        break;
      default:
        changeRoute();
        break;
    }
  }

  return (
    <div id="welcome-page-container">
      <section id="welcomepage-show-slide-screen">
        <div id="welcomepage-slide-image">

        </div>
        <div id="welcomepage-slide-title">
          { welcomeMsgData[ 0 ].title }
        </div>
        <div id='next-btn' onClick={ () => slideGenerator( "next" ).next() }>
          <span id='next-text'>
            Next
          </span>
          <input
            value="Next"
            type='image'
            className="welcomepage-btn"
            id="next-btn-icon"
            src={ nxt }
          />
        </div>
      </section >
    </div>
  )
}
