import React from "react";

const RestaurantCard = ({ name, rating, costForTwo, cloudinaryImageId }) => {
  return (
    <div style={{ border: "solid 1px black", cursor: "pointer" }}>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        style={{ width: "300px", height: "250px" }}
      />
      <h3>{name}</h3>
      <p>{rating}</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
