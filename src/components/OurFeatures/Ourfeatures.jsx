import React, { useEffect, useRef } from "react";
import "./Ourfeatures.css";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import { motion, useInView, useAnimation } from "framer-motion";

const data = [
  {
    id: 1,
    image: image1,
    title: "Cross-Device Sync",
    desc: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    color: "#f1f2f4",
  },
  {
    id: 1,
    image: image2,
    title: "Auto Event Import",
    desc: "Automatically import events from emails, social media, and other sources, so you never miss a beat or have to manually input details.",
    color: "rgb(254 233 203)",
  },
  {
    id: 1,
    image: image3,
    title: "Task Delegation",
    desc: "Easily assign tasks to team members, family, or friends, promoting shared responsibility and seamless collaboration.",
    color: "rgb(204 234 253)",
  },
  {
    id: 1,
    image: image4,
    title: "Voice Command Integration",
    desc: "Quickly create events, set reminders, or reschedule appointments with voice commands, thanks to compatibility with popular virtual assistants.",
    color: "#ddf4e4",
  },
  {
    id: 1,
    image: image5,
    title: "Customizable Alerts",
    desc: "Personalize notification types and timings for events, tasks, and goals, ensuring you stay on track and informed without feeling overwhelmed.",
    color: "#fdded6",
  },
  {
    id: 1,
    image: image6,
    title: "Privacy Protection",
    desc: "Safeguard your personal information and event details with our robust security measures, including end-to-end encryption and optional password protection.",
    color: "#c39cf6",
  },
];

const Ourfeatures = () => {
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
      <div ref={ref} className="Ourfeatures">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0 }}
        >
          <div className="mainfeatures">
            <h5>And so much more... 💼</h5>
          </div>
          <div className="features-row1">
            Our features to make your life easier
          </div>

          <div className="ourfeature_container">
            {data.map(({ id, image, title, desc, color }) => {
              return (
                <article key={id} className="item">
                  <div className="item-image">
                    <img src={image} alt={title} />
                  </div>

                  <h4 className="title" style={{ backgroundColor: color }}>
                    {title}
                  </h4>

                  <div className="item-cta">{desc}</div>
                </article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Ourfeatures;
