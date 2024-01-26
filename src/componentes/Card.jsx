import React from "react";
import "/src/styles/card.css";

function Card({ cardImg, action, time, previous }) {
  return (
    <>
      <div id="main-card-container">
        <div className={`img_card_container ${action}`}>
          <img src={cardImg} alt="Action_img" />
        </div>
        <div className="card_info">
          <div>
            <p className="action_size">{action}</p>
            <p className="point">...</p>
          </div>
          <div className="action_time">
            <p className="hours">{time}hrs</p>
            <p className="previous">Last week - {previous}hrs</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
