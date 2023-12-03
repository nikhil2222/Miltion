import React, { useEffect, useRef } from "react";
import "./ourfeatures.css";
import calendarimage from "./calendarimage.png";
import faceimage from "./faceimage.png";
import { motion, useInView, useAnimation } from "framer-motion";
const Features = () => {
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
      <div ref={ref} className="features">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 3, delay: 0.25 }}
        >
          <div className="mainfeatures">
            <h5>Our main features 🦸🏼</h5>
          </div>
          <div className="features-row1">Discover your new superpowers</div>
        </motion.div>
        <div className="seamless">
          <div className="seamless-colums">
            <div className="seamless-col-1-row-1">
              <h5>Seamless Scheduling</h5>
            </div>
            <div className="seamless-col-1-row-2">
              Focus on what matters most for you
            </div>
            <div className="seamless-col-1-row-3">
              Effortlessly plan your day with our intuitive drag-and-drop
              interface. Sync with multiple calendar platforms, import events
              from emails, and add participants with just a few clicks.
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 2, delay: 1 }}
            >
              <div className="seamless-col-1-row-4">
                <img src={faceimage} className="carleimage" />
                <div className="carle">
                  <p>
                    I tested many calendar apps. This app is the best of all! It
                    saves me hours of time. <br />
                    <br />{" "}
                    <span style={{ color: "grey" }}>
                      Carla, Head of Finance
                    </span>{" "}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0, rotate: [0, 180, 360] },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.25 }}
          >
            <div className="seamless-colums">
              <img src={calendarimage} className="imagecalendar" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Features;
