import React from 'react'
import Input from './global/Input'
import searchIcon from "../assets/icons/search.svg"

export default function Searchbarform ( { children, width, height } )
{
 const FormStyle = {
  width: width ? width : "95%",
  height: height ? height : "55px",
  fontWeight: "900",
  display: "flex",
  alignItems: 'center',
  justifyContent: "space-around",
  flexDirection: children ? "row" : "column",
  backgroundColor: "inherit",
  margin: "auto"
 }

 const ForGroupmStyle = {
  height: "35px",
  width: children ? "80%" : "85%",
  display: "flex",
  flexDirection: 'row',
  alignItems: "center",
  padding: "0 10px",
  backgroundColor: "inherit",
  border: "1px rgb(16, 223, 220) solid",
  borderRadius: "10px",
 }

 const searchBarStyle = {
  backgroundColor: "inherit",
  border: 0,
  width: "100%",
  height: "80%",
  padding: "0 5px",
  fontWeight: 500,
  fontSize: "16px",
  color: "rgb(16, 223, 220)"
 }

 return (
  <div id='header-top'>
   <form id="header-form" style={ FormStyle }>
    <div id="form-group" style={ ForGroupmStyle }>
     <Input type="img" alt="" id="search-bar-btn" src={ searchIcon } styles={ { width: "30px" } } />
     <Input type="text" alt="" id="search-bar-btn" styles={ searchBarStyle } pl="search" />
    </div>
   </form>
  </div>

 )
}