import React from 'react'
import './lastcall.css'
import faceimage from './faceimage.png'
const LastCall = () => {
  return (
    <>
    <div className="front">
    <div className="front-row1">
               <h5>Last call Baby! 🚀</h5>
        </div>
        <div className="front-row2">
        Ready to start?
        </div>
        <div className="front-row3">
               <p>Here is your last chance to explain how cool your app is. Focus on the benefits for your users, not on the features. </p>
        </div>
        <div className="front-button">
        <button className="custom-button">Get started, it's free</button>
        </div>
        
        <div className="seamless-col-1-row-4">
            <img src={faceimage} className='carleimage'  />
            <div className="carle">
             <p>I tested many calendar apps. This app is the best of all! It saves me hours of time. <br/><br/> <span style={{ color: 'grey' }}>Carla, Head of Finance</span>  </p>
                </div> 
        </div>
    </div>
    </>
  )
}

export default LastCall