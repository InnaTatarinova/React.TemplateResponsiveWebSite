import React from "react";
import "./Footer.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { ListOfLinks } from "../ListOfLinks/ListOfLinks";


const aboutUs = ["How we work", "Our managers", "Career", "Term of Service"];
const contactUs = ["Contact", "Support", "Write to us"];
const socialMedia = ["Instagram", "Facebook", "Youtube", "Twitter"];
const socialMediaIcon=["bi bi-instagram", "bi bi-facebook", "bi bi-youtube", "bi bi-twitter"];


export const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscribe">
        <h1>Join to receive our best trip offers</h1>
        <h3>You can subscribe in any time :)</h3>
        <input
          placeholder="Your email"
          className="footer-subscribe-input"
        ></input>
        <ButtonComponent btnStyle="btn-outline" path="/">SUBSCRIBE</ButtonComponent>
      </section>
      <section className="section-links">
        <ListOfLinks title="About Us" listofTheme={aboutUs} link="/" />
        <ListOfLinks title="Contact us" listofTheme={contactUs} link="/"/>
        <ListOfLinks title="Social Media" listofTheme={socialMedia} link="/" icon={socialMediaIcon}/>
      </section>
      <section className="footer-logo">            
        <small> Go abroad @ 2023</small>
      </section>
    </div>
  );
};
