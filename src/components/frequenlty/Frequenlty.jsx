import React,{ useEffect, useRef , useState}from "react";
import "./Frequenlty.css";
import {motion, useInView, useAnimation } from "framer-motion";

const Frequenlty = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);


  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleAccordion4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleAccordion5 = () => {
    setIsOpen5(!isOpen5);
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
      <div ref={ref} id="frequenlty"className="mainfeatures">
        <h5>Relevant stuff, bla bla 📣</h5>
      </div>
      <div className="features-row1">Frequently asked questions</div>

      {/* question start */}
      <div className={`accordion-container ${isOpen ? "open" : ""}`}>
        <div className="accordion-header" onClick={toggleAccordion}>
          <h2>Can I cancel my subscrition?</h2>
          <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && (
          <div className="accordion-content">
            <p>
              You can cancel your plan whenever you’d like. You’ll be downgraded
              to the free plan. You won’t be locked out of any projects that
              have paid plans.
            </p>
          </div>
        )}
      </div>

      <div className={`accordion-container ${isOpen ? "open" : ""}`}>
        <div className="accordion-header" onClick={toggleAccordion2}>
          <h2>What happens when my trial ends?</h2>
          <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen2 && (
          <div className="accordion-content">
            <p>
            When your trial period ends, your account will automatically be downgraded to our free plan, with limited features and functionality. To continue enjoying the full benefits of our service, you can upgrade to one of our paid plans at any time during or after the trial. Your data and settings will be preserved, ensuring a seamless transition as you move forward with our SaaS platform.
            </p>
          </div>
        )}
      </div>

      <div className={`accordion-container ${isOpen ? "open" : ""}`}>
        <div className="accordion-header" onClick={toggleAccordion3}>
          <h2>What payment methods do you offer?</h2>
          <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen3 && (
          <div className="accordion-content">
            <p>
            We aim to provide a seamless experience for our customers. We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express, and Discover), PayPal, and bank transfers.
            </p>
          </div>
        )}
      </div>

      <div className={`accordion-container ${isOpen ? "open" : ""}`}>
        <div className="accordion-header" onClick={toggleAccordion4}>
          <h2>What is your refund policy?</h2>
          <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen4 && (
          <div className="accordion-content">
            <p>
            Our refund policy is designed with customer satisfaction in mind. If you are not satisfied with our service, you can request a full refund within 30 days of your initial purchase. To initiate the refund process, please contact our support team through the "Help" section in your account or email us at support@Milton.com, and we'll be happy to assist you.
            </p>
          </div>
        )}
      </div>

      <div className={`accordion-container ${isOpen ? "open" : ""}`}>
        <div className="accordion-header" onClick={toggleAccordion5}>
          <h2>Do you offer discounts to educational institutions ?</h2>
          <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen5 && (
          <div className="accordion-content">
            <p>
             Yes, we are happy to support educational institutions by offering special discounts on our SaaS platform. Please reach out to our sales team at sales@Milton.com with your institution's details, and we will provide you with more information on our exclusive educational pricing options.
            </p>
          </div>
        )}
      </div>
      </motion.div>
    </>
  );
};

export default Frequenlty;
