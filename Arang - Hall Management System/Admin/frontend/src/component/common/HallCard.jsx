import React from 'react'
import "./hallcar.css"

    const HallCard = ({ imageUrl, hallName, accommodation, pricing, occasion, place }) => {
        return (
          <div className="hall-card">
            <img src={imageUrl} alt={hallName} className="hall-image" />
            <div className="hall-details">
              <h3>{hallName}</h3>
              <p>Accommodation Strength: {accommodation}</p>
              <p>Pricing: {pricing}</p>
              <p>Occasion: {occasion}</p>
              <p>Place: {place}</p>
              <button className="book-now-button">Book Now</button>
            </div>
          </div>
        );
      };

export default HallCard
