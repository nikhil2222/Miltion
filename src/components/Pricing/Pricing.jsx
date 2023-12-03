import React, { useEffect, useRef, useState } from "react";
import "./Pricing.css";
import { motion, useInView, useAnimation } from "framer-motion";
const Pricing = () => {
  const [smartervalue, setSmartervalue] = useState("19");
  const [provalue, setProvalue] = useState("49");
  const [starterbackground, setStarterbackground] = useState("white");
  const [probackground, setProbackground] = useState("lightgray");

  const monthlyvalue = () => {
    setSmartervalue("19");
    setProvalue("49");
    setStarterbackground("white");
    setProbackground("lightgray");
  };

  const annualvalue = () => {
    setSmartervalue("15");
    setProvalue("45");
    setStarterbackground("lightgray");
    setProbackground("white");
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 5, delay: 1 }}
      >
        <div ref={ref} id="pricing" className="pricing">
          <div className="mainfeatures">
            <h5>Pricing and plans 💰</h5>
          </div>
          <div className="features-row1">Find the best plan for your needs</div>
          <div className="container">
            <div className="button-container">
              <button
                className="custom-button1"
                onClick={monthlyvalue}
                style={{ backgroundColor: starterbackground }}
              >
                Button 1
              </button>
              <button
                className="custom-button1"
                onClick={annualvalue}
                style={{ backgroundColor: probackground }}
              >
                Button 2
              </button>
            </div>
            <p>✨ save 30%</p>
          </div>

          <div className="three-columns-container">
            <div className="column">
              <div className="value">
                <h5>Free</h5>
              </div>
              <p>So you can see how incredible our tool is. </p>
              <div className="price-per-month">
                $0<span style={{ fontSize: "20px", color: "grey" }}>/mo</span>
              </div>
              <p>Free for ever</p>
              <div className="front-button">
                <button className="custom-button">
                  Get started, it's free
                </button>
              </div>
              <div className="credit-card-needed">No credit card needed</div>
              <div className="includes">What's included:</div>
              <div className="list">
                <ul className="tick-list">
                  <li>A cool feature</li>
                  <li>A basic feature</li>
                  <li>A top feature with limitations</li>
                  <li>An incredible feature so useful</li>
                  <li>A top feature</li>
                </ul>
              </div>
            </div>

            <div className="column">
              <div className="value">
                <h5>Starter</h5>
              </div>
              <div className="value-top">
                <h5>Best deal 🔥</h5>
              </div>
              <span>So you can see how incredible our tool is. </span>
              <div className="price-per-month">
                ${smartervalue}
                <span style={{ fontSize: "20px", color: "grey" }}>/mo</span>
              </div>
              <p>Billed monthly</p>
              <div className="front-button">
                <button className="custom-button">
                  Get started, it's free
                </button>
              </div>
              <div className="credit-card-needed">
                7 days free trial no credit card needed
              </div>
              <div className="includes">All Free features, plus:</div>
              <div className="list">
                <ul className="tick-list">
                  <li>A cool feature</li>
                  <li>A basic feature</li>
                  <li>A top feature with limitations</li>
                  <li>An incredible feature so useful</li>
                  <li>A cool feature</li>
                </ul>
              </div>
            </div>

            <div className="column">
              <div className="value">
                <h5>Pro</h5>
              </div>
              <p>So you can see how incredible our tool is. </p>
              <div className="price-per-month">
                ${provalue}
                <span style={{ fontSize: "20px", color: "grey" }}>/mo</span>
              </div>
              <p>Billed monthly</p>
              <div className="front-button">
                <button className="custom-button">
                  Get started, it's free
                </button>
              </div>
              <div className="credit-card-needed">
                7 days free trial no credit card needed
              </div>
              <div className="includes">All Starter features, plus:</div>
              <div className="list">
                <ul className="tick-list">
                  <li>A cool feature</li>
                  <li>A basic feature</li>
                  <li>A top feature with limitations</li>
                  <li>An incredible feature so useful</li>
                  <li>A premium feature</li>
                  <li>You need this feature</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Pricing;
