import React, { useEffect, useRef } from "react";
import "./../features/ourfeatures.css";
import Notification from "./Notification.png";
import faceimage from "./faceimage.png";
import { motion, useInView, useAnimation } from "framer-motion";
const SmartRemainderTask = () => {
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
          <div className="seamless">
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
                <img src={Notification} className="imagecalendar" />
              </div>
            </motion.div>
            <div className="seamless-colums">
              <div className="seamless-col-1-row-1">
                <h5>Smart Reminders & Task</h5>
              </div>
              <div className="seamless-col-1-row-2">
                Never miss an important deadline or event again
              </div>
              <div className="seamless-col-1-row-3">
                Never miss an important deadline again with our AI-driven
                notifications. Our app intelligently analyzes your schedule to
                prioritize what's most important, keeping you on track and
                ensuring your day is productive and stress-free.
              </div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 2, delay: 2 }}
              >
                <div className="seamless-col-1-row-4">
                  <div className="carle">
                    <p>
                      I've recommended this app to all my friends and
                      colleagues! <br />
                      <br />{" "}
                      <span style={{ color: "grey" }}>
                        Karl, CTO of a cool startup
                      </span>{" "}
                    </p>
                  </div>
                  <img src={faceimage} className="carleimage" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SmartRemainderTask;
