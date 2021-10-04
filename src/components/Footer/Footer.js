import React from "react";
import "./Footer.css";
import brand from "../../brandLogo.png";

const Footer = () => {
  return (
    <footer className="mt-5 text-white">
      <div className="row row-col-1 mx-5">

        <div className="col m-2 brand-logo">
          <div className="d-flex align-items-center">
            <img src={brand} alt="brand name" className="me-2" />
            <h1>FrontTend Mastery</h1>
          </div>
          <p>
            By conducting students all over the world to the best instructor, We
            helping individuals reach their goals and pursue their dreams.
          </p>
        </div>
        <div className="col m-2">
          <h2 className='underline'>Contacts</h2>
          <h6><i class="fas fa-map-marker-alt"></i> 4967 Sardis Sta, Victoria 8007, Montreal.</h6>
          <h6><i class="fas fa-phone-alt"></i> +1 246-345-0695</h6>
          <h6><i class="fas fa-paper-plane"></i> Info@fronttendmastery.Com</h6>
          <div className='mt-3 fw-bold fs-3'>
          <i className="fab fa-facebook-square me-3"></i>
          <i className="fab fa-twitter me-3"></i>
          <i className="fab fa-linkedin me-3"></i>
          <i className="fab fa-google-plus-square"></i>
          </div>
        </div>
        <div className="col m-2">
          <h2 className='underline'>Popular Courses</h2>
          <p>React with Redux and Hook</p>
          <p>AWS Certified Solutions Architect - 2021</p>
          <p>Django Full Stack Web Developer Bootcamp</p>
          <p>MongoDB - The Complete Developer's Guide 2021</p>
        </div>
        <div className="col m-2">
          <h2 className='underline'>Help & Support</h2>
          <p>Live Chat</p>
          <p>Privacy Policy</p>
          <p>Faqs</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
