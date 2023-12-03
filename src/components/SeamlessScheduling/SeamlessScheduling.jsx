import React, { useEffect, useRef } from "react";

import "./../features/ourfeatures.css";
import seamlessscheduling from "./seamlessscheduling.png";
import faceimage from "./faceimage.png";
import { motion, useInView, useAnimation } from "framer-motion";
const SeamlessScheduling = () => {
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
          transition={{ duration: 1, delay: 0.25 }}
        >
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
                  <img
                    src={faceimage}
                    className="carleimage"
                    style={{ paddingRight: "5px" }}
                  />
                  <div className="carle">
                    <p>
                      I've tried a lot of calendar apps, but this one is by far
                      the best! It's so intuitive and customizable, and it has
                      all the features I need. <br />
                      <br />{" "}
                      <span style={{ color: "grey" }}>
                        Annie, Designer
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
                <img src={seamlessscheduling} className="imagecalendar" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SeamlessScheduling;
