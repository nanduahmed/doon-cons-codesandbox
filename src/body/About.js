import React, { Component } from "react";
import { render } from "react-dom";
import GoogleMapReact from "google-map-react";

const PhoneDetails = props => (
  <div>
    <p className="aboutHeader">Phone</p>
    <a href="tel:+919045550888">+91 9045550888</a>
    <br />
    <a href="tel:+919760797567">+91 9760797567</a>
  </div>
);

const EmailAdd = props => (
  <div>
    <p className="aboutHeader">Email</p>
    <a href="mailto:gulshan.ahmed82@gmail.com">Gulshan</a>
    <br />
    <p>13/9, Deep Lok Colony</p>
    <p>Ballupur Road</p>
    <p>Dehradun, Uttarakhand</p>
  </div>
);

const url =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8371.25177711075!2d78.02029881616252!3d30.330850814742565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929f0aadaf793%3A0x16f3669e09909726!2sDeeplok+Fountain+chowk!5e0!3m2!1sen!2sus!4v1558665242696!5m2!1sen!2sus";

const Map = props => (
  <div>
    <p className="aboutHeader">Map</p>
    <iframe
      src={url}
      width={"95%"}
      height={"95%"}
      frameborder={0}
      style={{ border: "0px" }}
      allowfullscreen
    />
  </div>
);
const About = () => (
  // return (
  <div className="container">
    <div className="row-fluid">
      <div className="col">
        <div className="row" style={{ height: "100px" }} />
        <div className="row">
          <div className="col-5 aboutCard">
            <PhoneDetails />
          </div>
          <div className="col-5 aboutCard">
            <EmailAdd />
          </div>
        </div>
        <div className="row">
          <div className="col-10 aboutCard">
            <Map />
          </div>
        </div>
      </div>
    </div>
  </div>
  // );
);

export default About;
