import React from "react";
import "./footer.css";
import twitter from "./twitter.png";
import linkdin from "./linkdin.png";
import facebook from "./facebook.png";
const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-column">
          <h3>Milton</h3>
          <div className="milton-text">
          <p>A short text explaining why my startup is so cool.</p>
          <p>© My super start-up</p>
          <div className="social">
            <img src={twitter} />
            <img src={linkdin} />
            <img src={facebook} />
          </div>
          </div>
         
        </div>

        <div className="footer-column">
        <h3>Products</h3>
          <div className="milton-text">
          <p>Features</p>
          <p>Testimonials</p>
          <p>Pricing</p>
          <p>FAQs</p>
          </div>
        </div>


        <div className="footer-column">
          <h3>Resources</h3>
          <div className="milton-text">
          <p>Change log</p>
          <p>Help center</p>
          <p>Blog</p>
          <p>Contact</p>
          </div>
        </div>
        <div className="footer-column">
          <h3>Others</h3>
          <div className="milton-text">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Affiliation</p>
          <p>Press</p>
          </div>
        </div>

        <div className="footer-blog-column">
          <h3>From the Blog</h3>
          <div className="milton-text">
          <p>Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life</p>
          <p>Organizing Your Calendar for Enhanced Productivity and Focus</p>
          <p>The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks</p>
          <p>Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
