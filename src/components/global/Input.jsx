import React, { useState } from "react";

export default function Input ( {
  cls, value, click,
  pl, type, src,
  id,
  name,
  req,
  apt,
  disable,
  change,
  styles
} )
{

  if ( click && !src )
  {
    return (
      <input type={ type } value={ value } disabled={ disable ? disable : false } name={ name } accept={ apt } className={ cls } id={ id } onClick={ click } style={ styles }
      />
    );
  }
  if ( type === "textarea" )
  {
    return (
      <textarea value={ value } disabled={ disable ? disable : false } name={ name } className={ cls } id={ id } onChange={ change }
        onClick={ click } style={ styles } placeholder={ pl }
      >
      </textarea>
    );
  }
  if ( src && [ "file", "audio", "vidoe" ].includes( type ) )
  {
    return (
      <>
        <input type={ type } name={ name } style={ { display: 'none' } } accept={ apt } />
        <input
          type="image" disabled={ disable ? disable : false } className={ cls } id={ id } src={ src }
          onClick={ ( e ) => { e.preventDefault(), document.getElementsByName( name )[ 0 ].click() } } style={ styles } />
      </>
    )
  } else
    if ( src )
    {
      return <input type="image" name={ name } disabled={ disable ? disable : false } className={ cls } id={ id } src={ src }
        onClick={ click } style={ styles } />;
    } else
    {
      return (
        <input
          type={ type }
          required={ req ? req : true }
          placeholder={ pl }
          name={ name }
          accept={ apt }
          disabled={ disable ? disable : false }
          className={ cls }
          value={ value }
          id={ id }
          onChange={ change }
          style={ styles }
        />
      );
    }
}
