import React from "react";
import bert from "../images/BertPally.jpg"
import "../styling/TransmogDisplayStyle.scss";
import StarRatingComponent from 'react-star-rating-component';




export const TransmogDisplay = () => {
    
  return (
      
    <div className="display-container">
      
      
      <div className="display-top"><span>Testing</span></div>
      <img className="display-image" src={bert} />
      <div className="display-bottom"> <StarRatingComponent 
          name="rate1"
          
          value={3}
       
        /> </div>
    </div>
  );
};
