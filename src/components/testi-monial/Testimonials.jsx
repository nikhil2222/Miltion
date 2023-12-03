import React from "react";
import image1 from "./faceimages/image.png";
import image2 from "./faceimages/image2.png";
import image3 from "./faceimages/image3.png";
import image4 from "./faceimages/image4.png";
import image5 from "./faceimages/image5.png";
import image6 from "./faceimages/image6.png";
import image7 from "./faceimages/image7.png";
import image8 from "./faceimages/image8.png";
import image9 from "./faceimages/image9.png";
import "./testimonials.css";
const Testimonials = () => {
  return (
    <>
    
      <div  id="testimonials" className="mainfeatures">
        <h5>They already love our products 😍</h5>
      </div>
      <div className="features-row1">See what our users say about us</div>
      
      <div className="logos">
  <div className="logos-slide">
    <img src={image1} />
    <img src={image2}  />
    <img src={image3} />
  </div>

  <div className="logos-slide">
    <img src={image1} />
    <img src={image2}  />
    <img src={image3} />
  </div>
  <div className="logos-slide">
    <img src={image1} />
    <img src={image2}  />
    <img src={image3} />
  </div>

  <div className="logos-slide">
    <img src={image1} />
    <img src={image2}  />
    <img src={image3} />
  </div>
</div>


<div className="logos">
  <div className="logos-slide">
    <img src={image4} />
    <img src={image5}  />
    <img src={image6} />
  </div>

  <div className="logos-slide">
    <img src={image4} />
    <img src={image5}  />
    <img src={image6} />
  </div>
  <div className="logos-slide">
    <img src={image4} />
    <img src={image5}  />
    <img src={image6} />
  </div>

  <div className="logos-slide">
    <img src={image4} />
    <img src={image5}  />
    <img src={image6} />
  </div>
</div>


<div className="logos">
  <div className="logos-slide">
    <img src={image7} />
    <img src={image8}  />
    <img src={image9} />
  </div>

  <div className="logos-slide">
    <img src={image7} />
    <img src={image8}  />
    <img src={image9} />
  </div>
  <div className="logos-slide">
    <img src={image7} />
    <img src={image8}  />
    <img src={image9} />
  </div>

  <div className="logos-slide">
    <img src={image7} />
    <img src={image8}  />
    <img src={image9} />
  </div>
</div>

    </>
  );
};

export default Testimonials;
