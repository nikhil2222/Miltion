import React from 'react'
import './front.css'
import  supercharge from './supercharge.png'
import image1 from './faceimage/image2.png'
import image2 from './faceimage/image3.png'
import image3 from './faceimage/image4.png'
import image4 from './faceimage/image4.png'
import image5 from './faceimage/image6.png'
import {motion} from "framer-motion";

const Front = () => {

  return (
    <>
   <div id="features" className="front">
   <motion.div 
    variants={{
       hidden:{opacity:0, y:75},
       visible:{opacity:1,y:0},
    }}
    initial="hidden"
    animate="visible"
    transition={{duration:0.5, delay:0.25}}>
        <div className="front-row1">
               <h5>An other way to manage time</h5>
        </div>
        <div className="front-row2">
        Your new favorite calendar 🗓️ app
        </div>
        <div className="front-row3">
               <p>Here you should explain how cool your app is. Remember, focus on the benefits for your users, not on the features.  </p>
        </div>
        <div className="front-button">
        <button className="custom-button">Get started, it's free</button>
        </div>
        <div className="front-row4">
               <p><b>Free 14 days trials,no credit card needed</b> </p>
        </div>
        <div className="front-row5">
              <div className="image">
              <img src={image1} style={{backgroundColor:"purple"}}/>
              <img src={image2} style={{backgroundColor:"blue"}}/>
              <img src={image3} style={{backgroundColor:"pink"}}/>
              <img src={image4} style={{backgroundColor:"orange"}}/>
              <img src={image5} style={{backgroundColor:"lightgreen"}}/></div>
              <div className="text-front">
              <b>⭐ ⭐ ⭐ ⭐ ⭐5.0<br/>From 200+ happy users </b></div>
        </div>
        </motion.div>
        <motion.div 
    variants={{
       hidden:{opacity: 0, scale: 0.5},
       visible:{opacity: 1, scale: 1},
    }}
    initial="hidden"
    animate="visible"
    transition={{
       duration: 0.8,
       delay: 0.5,
       ease: [0, 0.71, 0.2, 1.01]
     }}>
        <div className="supercharge">
        <img src={supercharge} />
        </div>
        </motion.div>
    </div>
    
    </>
  )
}



export default Front