import React from 'react';
import "./BannerForPages.css";

export const BannerForPages = (props) => {
  return (
    <div className='pageBanner'>
    <img src={props.img} alt={props.alt} className='pageBanner-img' ></img>
    <h1 className='pageName'>{props.text}</h1>;
</div>
  )
}
